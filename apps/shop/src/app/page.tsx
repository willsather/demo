import Image from "next/image";
import Link from "next/link";

import { getProducts } from "@demo/products";
import { Button } from "@demo/ui/button";

import { ProductCard } from "@/components/product-card";
import { showHeroCTA } from "@/lib/flags";

export default async function ShopPage() {
  const showCTA = await showHeroCTA();
  const featuredProducts = await getProducts({ featured: true });

  return (
    <main className="min-h-screen bg-background px-4 py-6 md:px-6">
      {/* Hero Section */}
      <section className="relative mt-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <h1 className="font-extrabold text-4xl text-foreground leading-tight md:text-5xl lg:text-6xl">
                Discover Perfect <span className="text-primary">Shapes</span>{" "}
                for Your Designs
              </h1>
              <p className="max-w-lg text-muted-foreground text-lg">
                Explore our collection of premium geometric shapes, crafted with
                mathematical precision and artistic flair.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products">
                  <Button size="lg">Shop Now</Button>
                </Link>

                {showCTA && (
                  <Link href="/about">
                    <Button variant="outline" size="lg">
                      Learn More
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            <div className="relative flex h-64 items-center justify-center md:h-96">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-full w-full">
                  <Image
                    src="/shop/shapes/circle.svg"
                    alt="Circle Shape"
                    width={150}
                    height={150}
                    className="absolute top-0 left-0 animate-pulse"
                  />

                  <Image
                    src="/shop/shapes/hexagon.svg"
                    alt="Hexagon Shape"
                    width={130}
                    height={130}
                    className="absolute top-1/2 right-1/4 animate-pulse"
                  />

                  <Image
                    src="/shop/shapes/triangle.svg"
                    alt="Triangle Shape"
                    width={100}
                    height={100}
                    className="absolute bottom-1/2 left-1/3 animate-spin [animation-duration:3s]"
                  />

                  <Image
                    src="/shop/shapes/square.svg"
                    alt="Square Shape"
                    width={120}
                    height={120}
                    className="absolute right-0 bottom-0 animate-bounce"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-neutral-100 dark:bg-neutral-900 p-8 mt-12 rounded-lg">
        <div className="mb-12 flex justify-between items-start">
          <div>
            <h2 className="font-bold text-3xl text-foreground">
              Featured Shapes
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Our most popular geometric masterpieces
            </p>
          </div>
          <Link href="/products">
            <Button size="lg" variant="outline">
              View All Products
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
