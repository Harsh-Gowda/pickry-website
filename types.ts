export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badges?: string[];
  features: string[];
  link: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  readTime: string;
  date: string;
  author: string;
  content?: string; // HTML string for the full article
}

export interface ReviewStep {
  title: string;
  description: string;
  icon: string;
}
