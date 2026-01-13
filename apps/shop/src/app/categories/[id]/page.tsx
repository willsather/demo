import Link from "next/link";
import { notFound } from "next/navigation";

import { getCategories, getCategory, getProducts } from "@demo/products";

import { ProductCard } from "@/components/product-card";

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category) => ({
    id: category.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const category = await getCategory(id);

  if (!category) {
    return {
      title: "Category Not Found | Shape Shop",
      description: "The requested category could not be found",
    };
  }

  return {
    title: `${category.name} | Shape Shop`,
    description: `Browse our collection of ${category.name.toLowerCase()} for your designs`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const category = await getCategory(id);

  if (!category) {
    notFound();
  }

  const products = await getProducts({ category: id });

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="mx-auto px-6 md:px-10 lg:px-20">
          <div className="flex items-center text-muted-foreground text-sm">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-primary">
              Products
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{category.name}</span>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="px-6 py-16 md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h1 className="font-bold text-4xl text-foreground">
              {category.name}
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              {category.description}
            </p>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-muted-foreground text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
