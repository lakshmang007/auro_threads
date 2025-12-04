// todo: remove mock functionality - replace with database data

import blackHoodie from "@assets/generated_images/black_hoodie_product_shot.png";
import whiteHoodie from "@assets/generated_images/white_hoodie_product_shot.png";
import lavenderHoodie from "@assets/generated_images/lavender_hoodie_product_shot.png";
import pinkHoodie from "@assets/generated_images/pink_hoodie_product_shot.png";
import navyHoodie from "@assets/generated_images/navy_hoodie_product_shot.png";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  category: string;
  tags: string[];
  stock: number;
  rating: number;
  reviewCount: number;
  embroideryPositions: string[];
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Sakura Spirit Hoodie",
    description: "Premium heavyweight cotton hoodie featuring delicate cherry blossom embroidery. Perfect blend of traditional Japanese aesthetics with modern streetwear comfort.",
    price: 89.99,
    originalPrice: 109.99,
    images: [pinkHoodie, blackHoodie],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Sakura Pink", hex: "#FFB7C5" },
      { name: "Midnight Black", hex: "#1a1a2e" },
    ],
    category: "Anime Characters",
    tags: ["sakura", "cherry blossom", "japanese", "floral"],
    stock: 24,
    rating: 4.8,
    reviewCount: 156,
    embroideryPositions: ["Front Center", "Back", "Sleeve"],
    featured: true,
  },
  {
    id: "2",
    name: "Neon Samurai Hoodie",
    description: "Cyberpunk-inspired samurai design with neon accent embroidery. Glow in the dark thread details for that extra edge.",
    price: 99.99,
    images: [blackHoodie, navyHoodie],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Shadow Black", hex: "#0a0a0f" },
      { name: "Deep Navy", hex: "#1e3a5f" },
    ],
    category: "Streetwear Text",
    tags: ["samurai", "cyberpunk", "neon", "glow"],
    stock: 18,
    rating: 4.9,
    reviewCount: 89,
    embroideryPositions: ["Front Center", "Back"],
    featured: true,
  },
  {
    id: "3",
    name: "Minimalist Kitsune",
    description: "Clean line art fox mask design. Subtle yet striking embroidery for the understated anime fan.",
    price: 79.99,
    images: [whiteHoodie, lavenderHoodie],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Cloud White", hex: "#f8f8ff" },
      { name: "Soft Lavender", hex: "#B794F6" },
    ],
    category: "Minimal Line Art",
    tags: ["kitsune", "fox", "minimal", "line art"],
    stock: 32,
    rating: 4.7,
    reviewCount: 203,
    embroideryPositions: ["Front Center", "Sleeve"],
    featured: true,
  },
  {
    id: "4",
    name: "Dragon Spirit Hoodie",
    description: "Majestic dragon embroidery wrapping around the hoodie. Full back piece with metallic thread accents.",
    price: 129.99,
    originalPrice: 149.99,
    images: [navyHoodie, blackHoodie],
    sizes: ["M", "L", "XL", "XXL"],
    colors: [
      { name: "Dragon Navy", hex: "#1e3a5f" },
      { name: "Obsidian", hex: "#0a0a0f" },
    ],
    category: "Anime Characters",
    tags: ["dragon", "mythical", "premium", "back piece"],
    stock: 12,
    rating: 5.0,
    reviewCount: 67,
    embroideryPositions: ["Back Full"],
    featured: true,
  },
  {
    id: "5",
    name: "Custom Name Hoodie",
    description: "Your name in stylized Japanese katakana. Personalized anime aesthetic with premium embroidery.",
    price: 94.99,
    images: [lavenderHoodie, pinkHoodie, whiteHoodie],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Lavender Dream", hex: "#B794F6" },
      { name: "Blush Pink", hex: "#FFB7C5" },
      { name: "Pure White", hex: "#f8f8ff" },
    ],
    category: "Custom Name",
    tags: ["custom", "personalized", "katakana", "name"],
    stock: 50,
    rating: 4.6,
    reviewCount: 312,
    embroideryPositions: ["Front Center", "Back", "Sleeve"],
    featured: false,
  },
  {
    id: "6",
    name: "Wave Kanagawa Hoodie",
    description: "The iconic Great Wave reimagined in modern embroidery. Classic art meets contemporary streetwear.",
    price: 109.99,
    images: [navyHoodie, whiteHoodie],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Ocean Navy", hex: "#1e3a5f" },
      { name: "Foam White", hex: "#f8f8ff" },
    ],
    category: "Minimal Line Art",
    tags: ["wave", "kanagawa", "japanese art", "classic"],
    stock: 20,
    rating: 4.8,
    reviewCount: 145,
    embroideryPositions: ["Back", "Front Pocket"],
    featured: true,
  },
  {
    id: "7",
    name: "Cyber Geisha Hoodie",
    description: "Futuristic take on traditional geisha aesthetics. Neon circuit patterns meet classic beauty.",
    price: 119.99,
    images: [blackHoodie, pinkHoodie],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Cyber Black", hex: "#0a0a0f" },
      { name: "Neon Pink", hex: "#EC4899" },
    ],
    category: "Anime Characters",
    tags: ["geisha", "cyberpunk", "futuristic", "neon"],
    stock: 15,
    rating: 4.9,
    reviewCount: 78,
    embroideryPositions: ["Front Center", "Back"],
    featured: false,
  },
  {
    id: "8",
    name: "Kanji Strength Hoodie",
    description: "Bold kanji character embroidery. Express your inner strength with this powerful design.",
    price: 84.99,
    images: [blackHoodie, whiteHoodie, navyHoodie],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Power Black", hex: "#0a0a0f" },
      { name: "Clean White", hex: "#f8f8ff" },
      { name: "Deep Navy", hex: "#1e3a5f" },
    ],
    category: "Streetwear Text",
    tags: ["kanji", "japanese", "text", "bold"],
    stock: 40,
    rating: 4.5,
    reviewCount: 189,
    embroideryPositions: ["Front Center", "Back"],
    featured: false,
  },
];

export const categories = [
  "All",
  "Anime Characters",
  "Minimal Line Art",
  "Streetwear Text",
  "Custom Name",
];

export const sizes = ["S", "M", "L", "XL", "XXL"];

export const colorFilters = [
  { name: "Black", hex: "#0a0a0f" },
  { name: "White", hex: "#f8f8ff" },
  { name: "Navy", hex: "#1e3a5f" },
  { name: "Pink", hex: "#FFB7C5" },
  { name: "Lavender", hex: "#B794F6" },
];

export const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Most Popular", value: "popular" },
  { label: "Top Rated", value: "rating" },
];

// todo: remove mock reviews
export const mockReviews = [
  {
    id: "r1",
    userName: "AnimeFan92",
    rating: 5,
    comment: "Absolutely love this hoodie! The embroidery quality is insane and it's super comfy.",
    date: "2024-11-15",
  },
  {
    id: "r2",
    userName: "StreetStyle_K",
    rating: 4,
    comment: "Great fit and the design gets so many compliments. Shipping was fast too!",
    date: "2024-11-10",
  },
  {
    id: "r3",
    userName: "TokyoDrifter",
    rating: 5,
    comment: "This is my third order from Aura Threads. Never disappoints. Premium quality every time.",
    date: "2024-11-05",
  },
];

// todo: remove mock orders
export const mockOrders = [
  {
    id: "ORD-001",
    date: "2024-11-20",
    status: "Delivered",
    items: [
      { name: "Sakura Spirit Hoodie", size: "M", color: "Sakura Pink", quantity: 1, price: 89.99 },
    ],
    total: 99.99,
  },
  {
    id: "ORD-002",
    date: "2024-11-25",
    status: "Shipped",
    items: [
      { name: "Neon Samurai Hoodie", size: "L", color: "Shadow Black", quantity: 1, price: 99.99 },
      { name: "Minimalist Kitsune", size: "L", color: "Cloud White", quantity: 1, price: 79.99 },
    ],
    total: 189.98,
  },
];
