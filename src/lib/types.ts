
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  discountedPrice?: number;
  description: string;
  specs: {
    engine?: string;
    power?: string;
    torque?: string;
    transmission?: string;
    topSpeed?: string;
    weight?: string;
    fuelCapacity?: string;
    [key: string]: string | undefined;
  };
  images: string[];
  featured: boolean;
  inStock: boolean;
  rating: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  featured?: boolean;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description?: string;
}
