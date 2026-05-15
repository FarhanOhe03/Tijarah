export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  stock: number;
  badge?: string;
};

export const categories = ["All", "Chips & Snacks", "Baby Products", "Beverages", "Household"];

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Potato Chips",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=400&fit=crop",
    category: "Chips & Snacks",
    description: "Crispy, golden potato chips made from the finest potatoes. Perfect for any occasion.",
    stock: 50,
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "Spicy Corn Puffs",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=400&fit=crop",
    category: "Chips & Snacks",
    description: "Bold and spicy corn puffs with a satisfying crunch. A fan favourite.",
    stock: 35,
  },
  {
    id: "3",
    name: "Mixed Nuts & Seeds",
    price: 5.49,
    image: "https://images.unsplash.com/photo-1599599811484-bc2a1a7c6fce?w=400&h=400&fit=crop",
    category: "Chips & Snacks",
    description: "A healthy blend of premium nuts and seeds. Great for snacking on the go.",
    stock: 20,
    badge: "New",
  },
  {
    id: "4",
    name: "Baby Diapers (Size 2)",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop",
    category: "Baby Products",
    description: "Ultra-soft, leak-proof diapers designed for your baby's comfort and protection.",
    stock: 100,
    badge: "Best Seller",
  },
  {
    id: "5",
    name: "Baby Wipes (80 Pack)",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=400&fit=crop",
    category: "Baby Products",
    description: "Gentle, fragrance-free wipes safe for sensitive baby skin.",
    stock: 75,
  },
  {
    id: "6",
    name: "Organic Baby Formula",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
    category: "Baby Products",
    description: "Nutritionally balanced organic formula for healthy infant development.",
    stock: 30,
    badge: "New",
  },
  {
    id: "7",
    name: "Sparkling Water (6-Pack)",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1583341612052-f04afc4a0db3?w=400&h=400&fit=crop",
    category: "Beverages",
    description: "Refreshing sparkling water with a light, clean taste. Zero calories.",
    stock: 60,
  },
  {
    id: "8",
    name: "Mango Juice (1L)",
    price: 3.29,
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=400&fit=crop",
    category: "Beverages",
    description: "100% pure mango juice with no added sugar. Rich and tropical.",
    stock: 45,
    badge: "Best Seller",
  },
  {
    id: "9",
    name: "Green Tea (20 Bags)",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop",
    category: "Beverages",
    description: "Premium green tea bags with a smooth, delicate flavour. Rich in antioxidants.",
    stock: 40,
  },
  {
    id: "10",
    name: "All-Purpose Cleaner",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1585232351009-aa87e4cec60b?w=400&h=400&fit=crop",
    category: "Household",
    description: "Powerful, eco-friendly all-purpose cleaner safe for all surfaces.",
    stock: 55,
  },
  {
    id: "11",
    name: "Dish Soap (500ml)",
    price: 2.49,
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=400&fit=crop",
    category: "Household",
    description: "Cuts through grease effortlessly. Gentle on hands, tough on dishes.",
    stock: 80,
  },
  {
    id: "12",
    name: "Microfibre Cloth Set",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category: "Household",
    description: "Pack of 6 ultra-absorbent microfibre cloths for streak-free cleaning.",
    stock: 25,
    badge: "New",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.badge === "Best Seller").slice(0, 4);
}
