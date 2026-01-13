import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getProduct, getProducts } from "@demo/products";
import { Button } from "@demo/ui/button";

import { ProductCard } from "@/components/product-card";
import { formatPrice } from "@/lib/utils";

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return {
      title: "Product Not Found | Shape Shop",
      description: "The requested product could not be found",
    };
  }

  return {
    title: `${product.name} | Shape Shop`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = await getProducts({ featured: true });

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
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail Section */}
      <section className="px-6 py-12 md:px-10 lg:px-20">
        <div className="mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Product Image */}
            <div className="flex items-center justify-center rounded-lg bg-muted p-8">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <h1 className="font-bold text-3xl text-foreground md:text-4xl">
                {product.name}
              </h1>
              <p className="text-muted-foreground text-xl">
                {product.description}
              </p>
              <div className="font-bold text-3xl text-primary">
                {formatPrice(product.price)}
              </div>

              <div className="border-border border-t pt-6">
                <h3 className="mb-4 font-semibold text-lg text-foreground">
                  Details
                </h3>
                <p className="text-muted-foreground">{product.details}</p>
              </div>

              <div className="flex flex-col gap-4 pt-6 sm:flex-row">
                <Button size="lg" className="w-full sm:w-auto">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="bg-secondary px-6 py-12 md:px-10 lg:px-20">
          <div className="mx-auto">
            <h2 className="mb-8 font-bold text-2xl text-foreground">
              Related Products
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
