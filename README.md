# Katalyx Solutions

A modern, full-stack web application for Katalyx Solutions - a tech startup specializing in AI, cloud solutions, and digital transformation.

## 🚀 Tech Stack

### Frontend
- **React 18** with Vite
- **Framer Motion** for animations
- **React Three Fiber** for 3D graphics
- **TailwindCSS** for styling
- **React Router** for navigation
- **Axios** for API calls

### Backend
- **Node.js** with Express
- **MongoDB** with Mongoose
- **JWT** authentication
- **Multer** for file uploads
- **bcryptjs** for password hashing

## 📦 Project Structure

```
Katalyx/
├── src/                    # Frontend source
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── utils/             # Utilities
│   └── assets/            # Static assets
├── server/                # Backend API
│   ├── routes/            # API routes
│   ├── models/            # MongoDB models
│   └── index.js           # Server entry
└── public/                # Public assets
```

## 🛠️ Development Setup

### Prerequisites
- Node.js >= 18.x
- MongoDB Atlas account (or local MongoDB)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/hrexe178/Katalyx.git
cd Katalyx
```

2. **Install dependencies**
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

3. **Environment Variables**

Create a `.env` file in the root directory:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
VITE_API_URL=http://localhost:5000/api
```

4. **Run Development Server**
```bash
npm run dev
```

This will start both frontend (port 5173) and backend (port 5000) concurrently.

## 🌐 Deployment

### Frontend (Vercel)
- **URL**: https://katalyxsolutions.com
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### Backend (Vercel)
- **URL**: https://katalyxsolutions.com/api
- **Root Directory**: `server`
- **Framework**: Other (Node.js)

**Required Environment Variables:**
- `MONGO_URI`
- `JWT_SECRET`
- `NODE_ENV=production`

## 📄 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm run server` - Start backend with nodemon
- `npm start` - Start backend (production)

## 🎨 Features

- ✨ Modern, responsive UI with dark theme
- 🌐 3D interactive globe and animations
- 📱 Mobile-optimized performance
- 🔐 JWT authentication
- 📝 Blog system with detailed articles
- 💼 Careers portal with job applications
- 📧 Contact form with email integration
- 🎯 SEO optimized with sitemap and robots.txt

## 📝 License

Copyright © 2025-2026 Katalyx Solutions. All rights reserved.

## 👥 Team

- **Vishal Sharma** - Founder & CEO
- **Anmol Babu** - CTO

## 🔗 Links

- Website: https://katalyxsolutions.com
- GitHub: https://github.com/hrexe178/Katalyx
