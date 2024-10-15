// Products API interface

export interface ProductsAPI {
  products: ProductAPI[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductAPI {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Meta {
  createdAt: Date;
  updatedAt: Date;
  barcode: string;
  qrCode: string;
}

export interface Review {
  rating: number;
  comment: string;
  date: Date;
  reviewerName: string;
  reviewerEmail: string;
}


// Categories API interface

export interface CategoryAPI {
  slug: CatSlug;
  name: string;
  url: string;
}

export type CatSlug =
  | "all"
  | "beauty"
  | "fragrances"
  | "furniture"
  | "groceries"
  | "home-decoration"
  | "kitchen-accessories"
  | "laptops"
  | "mens-shirts"
  | "mens-shoes"
  | "mens-watches"
  | "mobile-accessories"
  | "motorcycle"
  | "skin-care"
  | "smartphones"
  | "sports-accessories"
  | "sunglasses"
  | "tablets"
  | "tops"
  | "vehicle"
  | "womens-bags"
  | "womens-dresses"
  | "womens-jewellery"
  | "womens-shoes"
  | "womens-watches";
