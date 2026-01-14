import Link from "next/link";

import { getProducts } from "@demo/products";

import { ProductCard } from "@/components/product-card";

export const metadata = {
  title: "All Products | Shape Shop",
  description: "Browse all our premium geometric shapes for your designs",
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-background px-4 py-6 md:px-6">
      {/* Products Section */}
      <section className="mt-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h1 className="font-bold text-4xl text-foreground">All Shapes</h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Browse our complete collection of premium geometric shapes
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
