# 🌟 AURA THREADS - Premium Anime E-Commerce Platform

![AURA THREADS](https://img.shields.io/badge/AURA-THREADS-ff69b4?style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

**Premium custom embroidered anime hoodies and streetwear. Express your anime aura.** ✨

---

## 🎯 Features

### 🛍️ E-Commerce Functionality
- **Product Catalog** - Browse anime-themed hoodies with categories and filters
- **Shopping Cart** - Add, update, and manage cart items
- **Wishlist** - Save favorite products for later
- **User Accounts** - Secure authentication and profile management
- **Order Management** - Complete checkout and order tracking
- **Product Reviews** - Customer ratings and reviews
- **Multiple Addresses** - Save and manage shipping addresses
- **Search & Filter** - Find products by category, tags, and price

### 🎨 Design Features
- **Modern UI/UX** - Sleek, responsive design with dark mode
- **Neon Aesthetics** - Vibrant pink, purple, and cyan color scheme
- **Smooth Animations** - Framer Motion powered interactions
- **Mobile Responsive** - Perfect on all devices
- **Premium Components** - Built with Radix UI and shadcn/ui

### 🔧 Technical Features
- **PostgreSQL Database** - Robust, scalable data storage
- **Type-Safe ORM** - Drizzle ORM with TypeScript
- **RESTful API** - Express.js backend
- **Form Validation** - Zod schema validation
- **Session Management** - Secure user sessions
- **Image Optimization** - Efficient asset delivery

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database (local or cloud)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/aura-threads.git
   cd aura-threads
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your database URL:
   ```env
   DATABASE_URL=postgresql://user:password@host:5432/database
   SESSION_SECRET=your-random-secret-key
   ```

4. **Set up database**
   ```bash
   npm run db:push
   ```

5. **Seed sample data (optional)**
   ```bash
   npm run db:seed
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   ```
   http://localhost:5000
   ```

---

## 📚 Documentation

- **[Database Setup Guide](DATABASE_SETUP.md)** - Complete PostgreSQL setup instructions
- **[Deployment Guide](DEPLOYMENT.md)** - Deploy to production (Vercel, Railway, Render, VPS)
- **[Design Guidelines](design_guidelines.md)** - UI/UX design principles

---

## 🗄️ Database Schema

```
users
├── id (UUID)
├── username
├── email
├── password (hashed)
├── firstName
├── lastName
└── phone

products
├── id (UUID)
├── name
├── slug
├── description
├── price
├── category
├── images (JSON)
├── sizes (JSON)
├── colors (JSON)
└── stock

orders
├── id (UUID)
├── userId (FK)
├── orderNumber
├── status
├── total
└── shippingAddress (JSON)

cart
├── id (UUID)
├── userId (FK)
├── productId (FK)
├── size
└── quantity

wishlist
├── id (UUID)
├── userId (FK)
└── productId (FK)

reviews
├── id (UUID)
├── productId (FK)
├── userId (FK)
├── rating
└── comment
```

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Wouter** - Lightweight routing
- **TanStack Query** - Data fetching
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible components
- **shadcn/ui** - Component library

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **PostgreSQL** - Database
- **Drizzle ORM** - Type-safe ORM
- **Zod** - Schema validation
- **Passport** - Authentication

### DevOps
- **Vite** - Build tool
- **TypeScript** - Type checking
- **ESBuild** - Fast bundling
- **Drizzle Kit** - Database migrations

---

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Database
npm run db:push      # Push schema changes to database
npm run db:seed      # Populate database with sample data

# Production
npm run build        # Build for production
npm start            # Start production server

# Type Checking
npm run check        # Run TypeScript type checking
```

---

## 🌐 Deployment

### Quick Deploy Options

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

#### Railway
```bash
npm install -g @railway/cli
railway init
railway up
```

#### Render
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set start command: `npm start`

**See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions**

---

## 🔐 Environment Variables

Required variables:

```env
DATABASE_URL=postgresql://...     # PostgreSQL connection string
SESSION_SECRET=...                # Random secret for sessions
PORT=5000                         # Server port (optional)
NODE_ENV=development              # Environment
```

Optional (for production):

```env
# Payment Gateway
RAZORPAY_KEY_ID=...              # For Indian market
RAZORPAY_KEY_SECRET=...
STRIPE_SECRET_KEY=...            # For international
STRIPE_PUBLISHABLE_KEY=...

# Email Service
SMTP_HOST=...
SMTP_PORT=...
SMTP_USER=...
SMTP_PASSWORD=...

# Image Storage
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

---

## 📱 Product Categories

- **Anime Characters** - Iconic character embroidery
- **Nature & Aesthetic** - Cherry blossoms, waves, landscapes
- **Minimal Line Art** - Clean, subtle designs
- **Custom Name** - Personalized katakana/kanji
- **Streetwear Text** - Bold typography and symbols

---

## 🎨 Design System

### Colors
- **Neon Pink** - `#FF1493` - Primary accent
- **Neon Purple** - `#9D4EDD` - Secondary accent
- **Neon Cyan** - `#00F0FF` - Tertiary accent
- **Dark Background** - `#0A0A0A` - Base background

### Typography
- **Headings** - Geist Sans, bold
- **Body** - Inter, regular
- **Code** - Geist Mono

### Components
- Built with Radix UI primitives
- Styled with Tailwind CSS
- Accessible by default
- Dark mode optimized

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- Design inspired by modern anime streetwear culture
- Built with amazing open-source tools
- Community feedback and support

---

## 📞 Support

- **Email**: support@aurathreads.com
- **Location**: Bangalore, India
- **Phone**: +91 7411467931

---

## 🗺️ Roadmap

- [x] Core e-commerce functionality
- [x] PostgreSQL database integration
- [x] Product catalog and cart
- [ ] Payment gateway integration (Razorpay/Stripe)
- [ ] Email notifications
- [ ] Order tracking
- [ ] Admin dashboard
- [ ] Product customization tool
- [ ] Mobile app (React Native)
- [ ] International shipping

---

## 📊 Project Status

![Status](https://img.shields.io/badge/Status-In%20Development-yellow?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge)

---

**Made with ❤️ and ✨ for anime lovers worldwide**

**AURA THREADS** - *Wear Your Anime Aura*
