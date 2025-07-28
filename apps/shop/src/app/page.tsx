import Image from "next/image";
import Link from "next/link";

import { getCategories, getProducts } from "@demo/products";
import { Button } from "@demo/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@demo/ui/card";

import { ProductCard } from "@/components/product-card";
import { showHeroCTA } from "@/lib/flags";

export default async function ShopPage() {
  const showCTA = await showHeroCTA();

  const categories = await getCategories();
  const featuredProducts = await getProducts({ featured: true });

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <h1 className="font-extrabold text-4xl text-gray-900 leading-tight md:text-5xl lg:text-6xl">
                Discover Perfect <span className="text-blue-600">Shapes</span>{" "}
                for Your Designs
              </h1>
              <p className="max-w-lg text-gray-600 text-lg">
                Explore our collection of premium geometric shapes, crafted with
                mathematical precision and artistic flair.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Shop Now
                  </Button>
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
      <section className="bg-gray-50 px-6 py-16 md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-bold text-3xl text-gray-900">
              Featured Shapes
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Our most popular geometric masterpieces
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/products">
              <Button size="lg" variant="outline">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Middle CTA */}
      <section className="bg-green-600 px-6 py-16 text-white md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-6 font-bold text-3xl">
            Transform Your Designs Today
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Access our extensive library of premium geometric shapes and take
            your creative projects to the next level.
          </p>
          <Button
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100"
            asChild
          >
            <Link href="/products">Browse Collection</Link>
          </Button>
        </div>
      </section>

      {/* Category Grid */}
      <section className="bg-gray-50 px-6 py-16 md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-bold text-3xl text-gray-900">
              Shop by Category
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Find the perfect shapes for your next project
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="overflow-hidden transition-shadow duration-300 hover:shadow-lg"
              >
                <Link
                  href={`/categories/${category.id}`}
                  className="relative flex h-48 items-center justify-center bg-gray-100 p-6"
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </Link>

                <CardHeader>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>

                <CardFooter>
                  <Link href={`/categories/${category.id}`}>
                    <Button variant="outline" className="w-full">
                      Browse {category.name}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 px-6 py-16 text-white md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-6 font-bold text-3xl">
            Ready to Shape Your Next Project?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Join thousands of designers and creators who use our premium shapes
            in their projects.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Start Shopping
          </Button>
        </div>
      </section>
    </main>
  );
}
