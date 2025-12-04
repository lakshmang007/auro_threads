import { db } from "./db";
import { products } from "@shared/schema";
import { sql } from "drizzle-orm";

const sampleProducts = [
    {
        name: "Sakura Dreams Hoodie",
        slug: "sakura-dreams-hoodie",
        description: "Premium heavyweight cotton hoodie featuring delicate cherry blossom embroidery. Perfect blend of traditional Japanese aesthetics with modern streetwear comfort.",
        price: "89.99",
        compareAtPrice: "129.99",
        category: "Nature & Aesthetic",
        images: ["/products/sakura-hoodie.jpg"],
        tags: ["sakura", "cherry blossom", "japanese", "floral"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "White", "Pink"],
        stock: 50,
        featured: true,
        active: true,
    },
    {
        name: "Dragon Spirit Embroidered Hoodie",
        slug: "dragon-spirit-hoodie",
        description: "Bold dragon embroidery on premium cotton blend. Channel your inner power with this statement piece.",
        price: "94.99",
        compareAtPrice: "139.99",
        category: "Anime Characters",
        images: ["/products/dragon-hoodie.jpg"],
        tags: ["dragon", "power", "mythology", "bold"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "Navy", "Red"],
        stock: 45,
        featured: true,
        active: true,
    },
    {
        name: "Minimal Line Art Portrait",
        slug: "minimal-line-art-portrait",
        description: "Clean, minimalist anime character line art. Subtle yet striking design for the refined otaku.",
        price: "79.99",
        compareAtPrice: "119.99",
        category: "Minimal Line Art",
        images: ["/products/minimal-portrait.jpg"],
        tags: ["minimal", "line art", "portrait", "clean"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "White", "Gray"],
        stock: 60,
        featured: false,
        active: true,
    },
    {
        name: "Custom Name Katakana Hoodie",
        slug: "custom-name-katakana-hoodie",
        description: "Your name in stylized Japanese katakana. Personalized anime aesthetic with premium embroidery.",
        price: "99.99",
        compareAtPrice: "149.99",
        category: "Custom Name",
        images: ["/products/custom-name.jpg"],
        tags: ["custom", "personalized", "katakana", "name"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "White", "Navy"],
        stock: 100,
        featured: true,
        active: true,
    },
    {
        name: "Great Wave Embroidery",
        slug: "great-wave-embroidery",
        description: "Iconic Hokusai wave design in premium embroidered detail. Classic Japanese art meets streetwear.",
        price: "89.99",
        compareAtPrice: "129.99",
        category: "Nature & Aesthetic",
        images: ["/products/great-wave.jpg"],
        tags: ["wave", "kanagawa", "japanese art", "classic"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Navy", "Black", "White"],
        stock: 40,
        featured: false,
        active: true,
    },
    {
        name: "Neon Tokyo Nights",
        slug: "neon-tokyo-nights",
        description: "Vibrant neon cityscape embroidery. Capture the energy of Tokyo's electric nights.",
        price: "94.99",
        compareAtPrice: "139.99",
        category: "Streetwear Text",
        images: ["/products/neon-tokyo.jpg"],
        tags: ["neon", "tokyo", "city", "vibrant"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "Purple", "Navy"],
        stock: 35,
        featured: true,
        active: true,
    },
    {
        name: "Kanji Power Symbol",
        slug: "kanji-power-symbol",
        description: "Bold kanji character embroidery. Make a statement with traditional Japanese calligraphy.",
        price: "84.99",
        compareAtPrice: "124.99",
        category: "Streetwear Text",
        images: ["/products/kanji-power.jpg"],
        tags: ["kanji", "japanese", "text", "bold"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "White", "Red"],
        stock: 55,
        featured: false,
        active: true,
    },
    {
        name: "Anime Eyes Collection",
        slug: "anime-eyes-collection",
        description: "Expressive anime character eyes in detailed embroidery. Show your anime soul.",
        price: "79.99",
        compareAtPrice: "119.99",
        category: "Anime Characters",
        images: ["/products/anime-eyes.jpg"],
        tags: ["eyes", "character", "expressive", "detailed"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "White", "Gray"],
        stock: 50,
        featured: false,
        active: true,
    },
];

async function seed() {
    try {
        console.log("🌱 Starting database seed...");

        // Clear existing products (optional - comment out if you want to keep existing data)
        console.log("🗑️  Clearing existing products...");
        await db.delete(products);

        // Insert sample products
        console.log("📦 Inserting sample products...");
        for (const product of sampleProducts) {
            await db.insert(products).values(product);
            console.log(`✅ Added: ${product.name}`);
        }

        console.log("🎉 Database seeded successfully!");
        console.log(`📊 Total products added: ${sampleProducts.length}`);

        process.exit(0);
    } catch (error) {
        console.error("❌ Error seeding database:", error);
        process.exit(1);
    }
}

seed();
