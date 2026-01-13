import Image from "next/image";
import Link from "next/link";

import { Button } from "@demo/ui/button";

export const metadata = {
  title: "About Us | Shape Shop",
  description: "Learn more about our premium geometric shapes and our mission",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <h1 className="font-extrabold text-4xl text-foreground leading-tight md:text-5xl lg:text-6xl">
                About Our <span className="text-primary">Shape</span> Shop
              </h1>
              <p className="max-w-lg text-muted-foreground text-lg">
                Welcome to Shape Shop, where geometry meets artistry. Founded in
                2023, we've dedicated ourselves to providing the highest quality
                geometric shapes for designers, educators, and shape enthusiasts
                around the world.
              </p>
              <p className="max-w-lg text-muted-foreground text-lg">
                Our shapes are crafted with mathematical precision and artistic
                flair, ensuring perfect proportions and stunning visual appeal.
                Whether you're creating digital designs, educational materials,
                or simply appreciate the beauty of perfect geometry, our
                collection offers something for everyone.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products">
                  <Button size="lg">Explore Our Shapes</Button>
                </Link>
              </div>
            </div>

            <div className="relative flex h-64 items-center justify-center md:h-96">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-full w-full">
                  <Image
                    src="/shapes/star.svg"
                    alt="Star Shape"
                    width={140}
                    height={140}
                    className="absolute top-0 left-0 animate-spin [animation-duration:15s]"
                  />

                  <Image
                    src="/shapes/heart.svg"
                    alt="Heart Shape"
                    width={120}
                    height={120}
                    className="absolute top-1/3 right-1/4 animate-bounce [animation-duration:2s]"
                  />

                  <Image
                    src="/shapes/spiral.svg"
                    alt="Spiral Shape"
                    width={110}
                    height={110}
                    className="absolute bottom-1/4 left-1/4 animate-spin [animation-duration:8s]"
                  />

                  <Image
                    src="/shapes/wave.svg"
                    alt="Wave Shape"
                    width={130}
                    height={130}
                    className="absolute right-0 bottom-0 animate-pulse [animation-duration:4s]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="bg-secondary px-6 py-16 md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-bold text-3xl text-foreground">
              Our Philosophy
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground text-lg">
              At Shape Shop, we believe in the power of perfect geometry to
              inspire creativity and bring order to design.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-card p-8 shadow-sm">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/shapes/circle.svg"
                  alt="Precision"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="mb-3 text-center font-bold text-xl text-card-foreground">
                Mathematical Precision
              </h3>
              <p className="text-muted-foreground">
                Every shape we offer is crafted with exact mathematical
                proportions, ensuring perfect symmetry and balance.
              </p>
            </div>

            <div className="rounded-lg bg-card p-8 shadow-sm">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/shapes/star.svg"
                  alt="Quality"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="mb-3 text-center font-bold text-xl text-card-foreground">
                Artistic Quality
              </h3>
              <p className="text-muted-foreground">
                Beyond precision, we infuse each shape with artistic elements
                that make them visually stunning and versatile.
              </p>
            </div>

            <div className="rounded-lg bg-card p-8 shadow-sm">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/shapes/cube.svg"
                  alt="Innovation"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="mb-3 text-center font-bold text-xl text-card-foreground">
                Continuous Innovation
              </h3>
              <p className="text-muted-foreground">
                We're constantly expanding our collection with new shapes,
                exploring the boundaries of geometric design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary px-6 py-16 text-primary-foreground md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-6 font-bold text-3xl">
            Ready to Discover Perfect Shapes?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Browse our collection of premium geometric shapes and find the
            perfect ones for your next project.
          </p>
          <Link href="/products">
            <Button size="lg" variant="secondary">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
