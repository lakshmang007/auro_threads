# 🌟 AURA THREADS - E-Commerce Setup Guide

## Quick PostgreSQL Database Setup

### Step 1: Choose Your Database Option

#### Option A: Free Cloud Database (Recommended for Testing)

**Using Neon (Easiest & Free)**
1. Go to https://neon.tech
2. Sign up with GitHub/Google
3. Click "Create Project"
4. Name it "aura-threads"
5. Copy the connection string (looks like: `postgresql://user:pass@host/dbname`)

**Using Supabase**
1. Go to https://supabase.com
2. Create new project
3. Go to Settings → Database
4. Copy the "Connection string" (URI format)

#### Option B: Local PostgreSQL

1. Download PostgreSQL: https://www.postgresql.org/download/
2. Install and remember your password
3. Open pgAdmin or command line
4. Create database: `CREATE DATABASE aura_threads;`
5. Your connection string: `postgresql://postgres:yourpassword@localhost:5432/aura_threads`

### Step 2: Configure Environment

1. **Create `.env` file** in project root:
   ```bash
   # Copy the example file
   cp .env.example .env
   ```

2. **Edit `.env` file** and add your database URL:
   ```env
   DATABASE_URL=postgresql://your-connection-string-here
   SESSION_SECRET=any-random-long-string-here
   PORT=5000
   NODE_ENV=development
   ```

### Step 3: Set Up Database Tables

Run this command to create all tables:
```bash
npm run db:push
```

You should see output like:
```
✓ Pushing schema changes to database
✓ Done!
```

### Step 4: Add Sample Products (Optional)

Populate your database with sample products:
```bash
npm run db:seed
```

### Step 5: Start the Application

```bash
npm run dev
```

Your e-commerce site should now be running at http://localhost:5000 with a fully functional PostgreSQL database!

---

## 🗄️ Database Schema

Your database now includes these tables:

- **users** - Customer accounts
- **products** - Product catalog
- **orders** - Customer orders
- **order_items** - Items in each order
- **cart** - Shopping cart items
- **wishlist** - Saved products
- **reviews** - Product reviews
- **addresses** - Shipping addresses

---

## 🚀 Next Steps

### For Development:
1. ✅ Database is set up
2. Add real product images
3. Implement authentication
4. Add payment gateway (Razorpay/Stripe)
5. Test all features

### For Production Deployment:
See **DEPLOYMENT.md** for complete deployment guide including:
- Hosting options (Vercel, Railway, Render)
- Payment integration
- Email setup
- SSL certificates
- Custom domain

---

## 🔍 Verify Database Setup

### Check if tables were created:

**Using Neon/Supabase Dashboard:**
- Go to your project dashboard
- Click on "SQL Editor" or "Database"
- Run: `SELECT tablename FROM pg_tables WHERE schemaname = 'public';`

**Using command line:**
```bash
# Install PostgreSQL client if needed
psql $DATABASE_URL

# List tables
\dt

# View products table structure
\d products
```

You should see all 8 tables listed.

---

## 🛠️ Troubleshooting

### "DATABASE_URL must be set" error
- Make sure `.env` file exists in project root
- Check that `DATABASE_URL` is correctly set in `.env`
- Restart the development server

### "Connection refused" error
- Verify your database is running (for local PostgreSQL)
- Check if connection string is correct
- Ensure firewall allows database connections

### "Schema push failed" error
- Check if DATABASE_URL is valid
- Try connecting to database manually: `psql $DATABASE_URL`
- Verify database user has CREATE TABLE permissions

---

## 📊 Database Management Tools

**GUI Tools (Recommended):**
- **pgAdmin** - https://www.pgadmin.org/
- **DBeaver** - https://dbeaver.io/
- **TablePlus** - https://tableplus.com/
- **Supabase Dashboard** (if using Supabase)
- **Neon Console** (if using Neon)

**Command Line:**
```bash
# Connect to database
psql $DATABASE_URL

# Common commands
\dt              # List tables
\d table_name    # Describe table
SELECT * FROM products LIMIT 5;  # View products
```

---

## 🎯 What's Included

### E-Commerce Features:
- ✅ Product catalog with categories
- ✅ Shopping cart
- ✅ Wishlist
- ✅ User accounts
- ✅ Order management
- ✅ Product reviews
- ✅ Multiple addresses
- ✅ Order tracking

### Database Features:
- ✅ PostgreSQL with Drizzle ORM
- ✅ Type-safe queries
- ✅ Automatic migrations
- ✅ Validation with Zod
- ✅ Relationships between tables
- ✅ UUID primary keys
- ✅ Timestamps on all records

---

## 📝 Environment Variables Reference

```env
# Required
DATABASE_URL=postgresql://...          # Your PostgreSQL connection string
SESSION_SECRET=random-secret-string    # For session encryption

# Optional (for production)
PORT=5000                              # Server port
NODE_ENV=development                   # development or production

# Payment (add when ready)
RAZORPAY_KEY_ID=                      # For Indian payments
RAZORPAY_KEY_SECRET=
STRIPE_SECRET_KEY=                     # For international payments
STRIPE_PUBLISHABLE_KEY=

# Email (add when ready)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=
SMTP_PASSWORD=
```

---

## 🎉 Success!

Your AURA THREADS e-commerce database is now set up and ready to use!

**Test it:**
1. Open http://localhost:5000
2. Browse products (if you ran the seed script)
3. Check the database using a GUI tool

**Ready for production?**
Follow the complete deployment guide in **DEPLOYMENT.md**

---

**Need Help?**
- Check DEPLOYMENT.md for detailed deployment instructions
- Review error messages carefully
- Verify all environment variables are set
- Test database connection separately

**Happy Coding! 🚀**
