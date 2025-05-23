import shopData from "./products.json";

export type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
};

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

export type ProductFilter = {
  featured?: boolean;
  category?: string;
  collectionId?: string;
};

export async function getProducts(filter?: ProductFilter): Promise<Product[]> {
  let products = [...shopData.products];

  // Apply filters if provided
  if (filter) {
    if (filter.featured !== undefined) {
      products = products.filter(
        (product) => product.featured === filter.featured,
      );
    }

    if (filter.category) {
      products = products.filter(
        (product) => product.category === filter.category,
      );
    }
  }

  return products;
}

// Get a single product by ID
export async function getProduct(id: string): Promise<Product> {
  const product = shopData.products.find((p) => p.id === id);

  if (product == null) {
    throw new Error(`Product with ID ${id} not found`);
  }

  return product;
}

export async function getCategories(): Promise<Category[]> {
  return [...shopData.categories];
}

export async function getCategory(id: string): Promise<Category | null> {
  const category = shopData.categories.find((c) => c.id === id);
  return category || null;
}
