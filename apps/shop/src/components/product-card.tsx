import Image from "next/image";
import Link from "next/link";

import { Button } from "@demo/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@demo/ui/card";

import { formatPrice } from "@/lib/utils";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  featured?: boolean;
  image: string;
  details: string;
};

export interface ProductCardProps {
  product: Product;
  basePath?: string;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <Link href={`/products/${product.id}`}>
        <div className="relative flex h-48 items-center justify-center bg-gray-100 p-6">
          <Image
            src={product.image}
            alt={product.name}
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
      </Link>
      <CardHeader>
        <Link href={`/products/${product.id}`} className="hover:text-blue-600">
          <CardTitle>{product.name}</CardTitle>
        </Link>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <Link href={`/products/${product.id}`} className="flex-1">
          <p className="font-bold text-blue-600 text-xl">
            {formatPrice(product.price)}
          </p>
        </Link>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button className="flex-1">Add to Cart</Button>

        <Link href={`/products/${product.id}`} className="flex-1">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
