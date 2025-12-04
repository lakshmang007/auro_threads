# 🚀 AURA THREADS - Deployment Guide

## Complete E-Commerce Website Deployment

This guide will help you deploy your AURA THREADS e-commerce website with PostgreSQL database to production.

---

## 📋 Prerequisites

- Node.js 18+ installed
- PostgreSQL database (local or cloud)
- Git installed
- Domain name (optional but recommended)

---

## 🗄️ Database Setup

### Option 1: Local PostgreSQL

1. **Install PostgreSQL** (if not already installed)
   ```bash
   # Windows (using Chocolatey)
   choco install postgresql
   
   # Or download from: https://www.postgresql.org/download/
   ```

2. **Create Database**
   ```bash
   # Open PostgreSQL command line
   psql -U postgres
   
   # Create database
   CREATE DATABASE aura_threads;
   
   # Create user (optional)
   CREATE USER aura_admin WITH PASSWORD 'your_secure_password';
   GRANT ALL PRIVILEGES ON DATABASE aura_threads TO aura_admin;
   ```

### Option 2: Cloud PostgreSQL (Recommended for Production)

Choose one of these cloud providers:

#### **Neon (Free tier available)**
1. Go to [neon.tech](https://neon.tech)
2. Sign up and create a new project
3. Copy the connection string

#### **Supabase (Free tier available)**
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Settings → Database → Connection String
4. Copy the connection string

#### **Railway (Free tier available)**
1. Go to [railway.app](https://railway.app)
2. Create new project → Add PostgreSQL
3. Copy the connection string

#### **Render (Free tier available)**
1. Go to [render.com](https://render.com)
2. Create new PostgreSQL database
3. Copy the connection string

---

## ⚙️ Environment Configuration

1. **Create `.env` file** in the project root:
   ```bash
   cp .env.example .env
   ```

2. **Update `.env` with your configuration:**
   ```env
   DATABASE_URL=postgresql://user:password@host:5432/database_name
   PORT=5000
   NODE_ENV=production
   SESSION_SECRET=generate-a-random-secure-string-here
   ```

3. **Generate a secure session secret:**
   ```bash
   # Use Node.js to generate a random string
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

---

## 🏗️ Database Migration

1. **Push schema to database:**
   ```bash
   npm run db:push
   ```

2. **Verify tables were created:**
   - Connect to your database using a client (pgAdmin, DBeaver, or Supabase dashboard)
   - Check that all tables exist: users, products, orders, order_items, cart, wishlist, reviews, addresses

---

## 📦 Seed Initial Data (Optional)

Create a seed script to populate your database with initial products:

```bash
# Create seed file
touch server/seed.ts
```

Add sample products to `server/seed.ts` and run:
```bash
npx tsx server/seed.ts
```

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Easy & Free)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Set environment variables in Vercel:**
   - Go to your project on vercel.com
   - Settings → Environment Variables
   - Add all variables from `.env`

5. **Redeploy:**
   ```bash
   vercel --prod
   ```

### Option 2: Railway

1. **Install Railway CLI:**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login and initialize:**
   ```bash
   railway login
   railway init
   ```

3. **Add environment variables:**
   ```bash
   railway variables set DATABASE_URL="your_connection_string"
   railway variables set SESSION_SECRET="your_secret"
   ```

4. **Deploy:**
   ```bash
   railway up
   ```

### Option 3: Render

1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
5. Add environment variables in the dashboard
6. Click "Create Web Service"

### Option 4: DigitalOcean App Platform

1. Go to [digitalocean.com](https://www.digitalocean.com/products/app-platform)
2. Create new app from GitHub
3. Configure build settings:
   - **Build Command:** `npm install && npm run build`
   - **Run Command:** `npm start`
4. Add environment variables
5. Deploy

### Option 5: Traditional VPS (AWS, DigitalOcean Droplet, Linode)

1. **SSH into your server:**
   ```bash
   ssh user@your-server-ip
   ```

2. **Install Node.js and PostgreSQL:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs postgresql
   ```

3. **Clone your repository:**
   ```bash
   git clone https://github.com/yourusername/aura-threads.git
   cd aura-threads
   ```

4. **Install dependencies:**
   ```bash
   npm install
   ```

5. **Set up environment variables:**
   ```bash
   nano .env
   # Add your configuration
   ```

6. **Build the project:**
   ```bash
   npm run build
   ```

7. **Install PM2 for process management:**
   ```bash
   npm install -g pm2
   pm2 start npm --name "aura-threads" -- start
   pm2 save
   pm2 startup
   ```

8. **Set up Nginx as reverse proxy:**
   ```bash
   sudo apt install nginx
   sudo nano /etc/nginx/sites-available/aura-threads
   ```

   Add this configuration:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Enable the site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/aura-threads /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

9. **Set up SSL with Let's Encrypt:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

---

## 🔐 Security Checklist

- [ ] Use strong, unique SESSION_SECRET
- [ ] Enable HTTPS/SSL certificate
- [ ] Use environment variables for all secrets
- [ ] Set NODE_ENV=production
- [ ] Enable CORS only for your domain
- [ ] Implement rate limiting
- [ ] Use prepared statements (Drizzle ORM handles this)
- [ ] Validate all user inputs
- [ ] Hash passwords (implement bcrypt)
- [ ] Set up database backups

---

## 💳 Payment Integration

### For Indian Market - Razorpay

1. **Sign up at [razorpay.com](https://razorpay.com)**
2. Get API keys from Dashboard
3. Add to `.env`:
   ```env
   RAZORPAY_KEY_ID=rzp_test_xxxxx
   RAZORPAY_KEY_SECRET=xxxxx
   ```

### For International - Stripe

1. **Sign up at [stripe.com](https://stripe.com)**
2. Get API keys from Dashboard
3. Add to `.env`:
   ```env
   STRIPE_SECRET_KEY=sk_test_xxxxx
   STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
   ```

---

## 📧 Email Configuration

Use one of these services for transactional emails:

### SendGrid (Free tier: 100 emails/day)
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your_sendgrid_api_key
```

### Gmail (App Password required)
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-specific-password
```

---

## 🖼️ Image Storage

### Cloudinary (Free tier available)

1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Get credentials from Dashboard
3. Add to `.env`:
   ```env
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

---

## 🌍 Custom Domain Setup

1. **Purchase domain** from:
   - Namecheap
   - GoDaddy
   - Google Domains
   - Cloudflare

2. **Point domain to your deployment:**
   - For Vercel: Add domain in project settings
   - For Railway: Add custom domain in settings
   - For VPS: Point A record to server IP

3. **Configure DNS:**
   ```
   Type: A
   Name: @
   Value: your-server-ip or deployment-url
   ```

---

## 📊 Monitoring & Analytics

### Recommended Tools:

1. **Sentry** - Error tracking
2. **Google Analytics** - User analytics
3. **Plausible** - Privacy-friendly analytics
4. **Uptime Robot** - Uptime monitoring

---

## 🚀 Going Live Checklist

- [ ] Database is set up and migrated
- [ ] All environment variables are configured
- [ ] Payment gateway is integrated and tested
- [ ] Email service is configured
- [ ] SSL certificate is installed
- [ ] Domain is pointed correctly
- [ ] Products are added to database
- [ ] Test complete checkout flow
- [ ] Set up error monitoring
- [ ] Configure backups
- [ ] Add privacy policy and terms of service
- [ ] Test on mobile devices
- [ ] Set up Google Analytics

---

## 📝 Quick Start Commands

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env with your configuration

# Push database schema
npm run db:push

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## 🆘 Troubleshooting

### Database Connection Issues
- Verify DATABASE_URL is correct
- Check if database server is running
- Ensure firewall allows connections
- Test connection with: `psql $DATABASE_URL`

### Build Failures
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear build cache: `rm -rf dist`
- Check Node.js version: `node --version` (should be 18+)

### Deployment Issues
- Check logs on your platform
- Verify all environment variables are set
- Ensure PORT is not hardcoded
- Check build command is correct

---

## 📞 Support

For issues or questions:
- Check the documentation
- Review error logs
- Contact your hosting provider support
- Check community forums

---

## 🎉 Congratulations!

Your AURA THREADS e-commerce website is now live! 🌟

**Next Steps:**
1. Add your products to the database
2. Test the complete user journey
3. Set up marketing campaigns
4. Monitor performance and user feedback
5. Iterate and improve!

---

**Made with ❤️ for AURA THREADS**
