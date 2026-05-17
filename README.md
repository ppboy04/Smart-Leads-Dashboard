# 🚀 Smart Leads Dashboard

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![Deployed on Render](https://img.shields.io/badge/Deployed_on-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com)

A complete, enterprise-grade, production-ready MERN stack application designed for managing, tracking, and analyzing sales leads. Built with robust TypeScript typings, advanced role-based access control (RBAC), debounced search, composable filtering, pagination, one-click CSV export, and full Docker orchestration.

---

## 🌐 Live Demo & Deployment Links

| Service | Hosting Platform | Live URL |
| :--- | :--- | :--- |
| **Frontend (UI)** | **Vercel** | 🔗 [https://smart-leads-dashboard-sigma-sage.vercel.app](https://smart-leads-dashboard-sigma-sage.vercel.app/)  |


> **💡 Note on Architecture:** The frontend is deployed as a high-performance Single Page Application (SPA) on Vercel, securely communicating with the containerized Express REST API hosted on Render.

---

## ✨ Key Features

- 🔒 **Secure JWT Authentication**: Robust user signup and login flow utilizing JSON Web Tokens (JWT) and `bcrypt` password hashing.
- 🛡️ **Role-Based Access Control (RBAC)**: Distinct permissions for `admin` and `sales` roles. Custom middleware ensures only administrators can delete leads.
- 📊 **Advanced Leads Management**: Full CRUD operations (Create, Read, Update, Delete) accessible via a beautifully polished, responsive modal interface.
- 🔍 **Debounced Search & Composable Filtering**: Instant, debounced search across names and emails, seamlessly combining with multi-select filters for lead **Status** (`New`, `Contacted`, `Qualified`, `Lost`) and **Source** (`Website`, `Instagram`, `Referral`).
- 📑 **Backend-Driven Pagination & Sorting**: High-performance data fetching optimized with server-side pagination (`page`, `limit`) and chronological sorting.
- 📥 **Instant CSV Export**: Download filtered or complete lead lists directly to a `.csv` file in a single click.
- 🌗 **Persistent Dark Mode**: Elegant, smooth theme switching between Light and Dark modes with automatic `localStorage` persistence.
- 📱 **Fully Responsive UI**: Mobile-first premium design built entirely with Tailwind CSS, custom UI components, and Lucide React icons.
- 🐳 **Docker Containerization**: Includes multi-stage `Dockerfile`s for both client and server, alongside a `docker-compose.yml` for instant, reproducible local orchestration.

---

## 🛠️ Tech Stack

### Frontend
- **React 18** (scaffolded with Vite)
- **TypeScript** (Strict mode)
- **Tailwind CSS** (Custom design system & dark mode tokens)
- **React Router DOM** (Declarative SPA routing)
- **Axios** (Configured with automatic JWT interceptors)
- **Lucide React** (Modern iconography)

### Backend
- **Node.js & Express.js**
- **TypeScript**
- **MongoDB Atlas & Mongoose ODM**
- **JSON Web Token (JWT)** (Stateless authentication)
- **Bcrypt** (Secure credential encryption)
- **Json2Csv** (High-speed data streaming to CSV)

### DevOps & Deployment
- **Vercel** (Frontend deployment with custom `vercel.json` rewrite rules)
- **Render** (Backend Docker container deployment)
- **Docker & Docker Compose** (Containerization & multi-service orchestration)

---

## 📁 Project Architecture & Monorepo Structure

```text
smart-leads-dashboard/
├── client/                  # React Frontend (Vite + TS)
│   ├── public/
│   ├── src/
│   │   ├── components/      # Reusable UI components (Button, Input, Table, Modal)
│   │   ├── context/         # Global State (AuthContext & ThemeContext)
│   │   ├── hooks/           # Custom hooks (useDebounce)
│   │   ├── pages/           # Page views (Dashboard, LeadDetail, Login, Register)
│   │   ├── services/        # Axios API client & token interceptors
│   │   └── types/           # TypeScript shared definitions
│   ├── vercel.json          # Vercel SPA routing rewrite configuration
│   ├── Dockerfile           # Multi-stage Dockerfile for frontend
│   └── vite.config.ts       # Vite configuration with backend proxy
├── server/                  # Express Backend (Node.js + TS)
│   ├── src/
│   │   ├── controllers/     # Business logic (authController, leadController)
│   │   ├── middleware/      # Auth verification & RBAC authorization
│   │   ├── models/          # Mongoose ODM Schemas (User & Lead)
│   │   ├── routes/          # Express API route endpoints
│   │   ├── types/           # TypeScript backend definitions
│   │   └── utils/           # Helper utilities (jwt, bcrypt hashing)
│   ├── Dockerfile           # Dockerfile for backend service
│   └── tsconfig.json        # Backend TypeScript configuration
├── docker-compose.yml       # Multi-container Docker orchestration
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started (Local Development)

### Prerequisites
Make sure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/) (v18+)
- [Git](https://git-scm.com/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) *(Optional, for Docker setup)*
- [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas) or Local MongoDB instance

---

### Method 1: Using Docker Compose (Recommended & Fastest)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ppboy04/Smart-Leads-Dashboard.git
   cd Smart-Leads-Dashboard
   ```

2. **Run Docker Compose:**
   ```bash
   docker-compose up --build
   ```
3. **Access the application:**
   - Frontend UI: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

---

### Method 2: Manual Local Setup

If you prefer running the client and server separately without Docker, follow these steps:

#### 1. Clone the repository
```bash
git clone https://github.com/ppboy04/Smart-Leads-Dashboard.git
cd Smart-Leads-Dashboard
```

#### 2. Set up the Backend (Server)
Open a terminal window and navigate to the `server` directory:
```bash
cd server
npm install
```

Create a `.env` file in the `server` directory (or configure based on `.env.example`):
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/smart-leads  # Or your MongoDB Atlas connection string
JWT_SECRET=super_secret_key_12345
JWT_EXPIRES_IN=7d
NODE_ENV=development
```

Start the backend development server:
```bash
npm run dev
```

#### 3. Set up the Frontend (Client)
Open a second terminal window and navigate to the `client` directory:
```bash
cd client
npm install
```

Create a `.env` file in the `client` directory:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Start the Vite development server:
```bash
npm run dev
```

Your browser will automatically open `http://localhost:3000`.

---

## ⚙️ Environment Variables

### Server (`server/.env`)
| Variable | Required | Default / Example | Description |
| :--- | :--- | :--- | :--- |
| `PORT` | Yes | `5000` | Port number for the Express server |
| `MONGODB_URI` | Yes | `mongodb://localhost:27017/smart-leads` | MongoDB connection string (Local or Atlas) |
| `JWT_SECRET` | Yes | `super_secret_key_12345` | Secret key used to sign and verify JWT tokens |
| `JWT_EXPIRES_IN`| Yes | `7d` | Token expiration lifespan |
| `NODE_ENV` | Yes | `development` | Environment mode (`development` or `production`) |

### Client (`client/.env`)
| Variable | Required | Default / Example | Description |
| :--- | :--- | :--- | :--- |
| `VITE_API_BASE_URL` | Yes | `http://localhost:5000/api` | Base URL pointing to the Express backend API |

---

## 📖 API Documentation

### 🔐 Authentication Endpoints (`/api/auth`)

| Method | Endpoint | Description | Auth Required | Body / Parameters |
| :--- | :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register a new user | No | `{ name, email, password, role: 'admin' \| 'sales' }` |
| `POST` | `/api/auth/login` | Log in and receive JWT token | No | `{ email, password }` |

---

### 📊 Leads Endpoints (`/api/leads`)

| Method | Endpoint | Description | Auth Required | Query Params / Body | Role Access |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `GET` | `/api/leads` | Get all leads with filtering & pagination | Yes | `page, limit, status, source, search, sort` | Admin, Sales |
| `GET` | `/api/leads/:id`| Get a single lead by ID | Yes | `None` | Admin, Sales |
| `POST` | `/api/leads` | Create a new lead | Yes | `{ name, email, phone, status, source }` | Admin, Sales |
| `PUT` | `/api/leads/:id`| Update an existing lead | Yes | `{ name, email, phone, status, source }` | Admin, Sales |
| `DELETE`| `/api/leads/:id`| Delete a lead | Yes | `None` | **Admin Only** |
| `GET` | `/api/leads/export`| Download filtered leads as CSV | Yes | `status, source, search, sort` | Admin, Sales |

---

## 🚀 Production Deployment Guide

This project is fully optimized for cloud deployment. Here is how it is configured for **Vercel** and **Render**:

### 1. Deploying the Backend on Render (Docker)
1. Go to [Render.com](https://render.com) and create a new **Web Service**.
2. Connect your GitHub repository.
3. Configure the service settings:
   - **Runtime / Language**: `Docker`
   - **Root Directory**: `server`
   - **Dockerfile Path**: `./Dockerfile` *(relative to root directory)*
4. Add your Environment Variables under the **Environment** tab:
   - `MONGODB_URI`: `mongodb+srv://<username>:<password>@cluster0.xxxx.mongodb.net/smart-leads?retryWrites=true&w=majority`
   - `JWT_SECRET`: `your_super_secret_jwt_key`
   - `NODE_ENV`: `production`
   - `PORT`: `5000`
5. Click **Deploy**. Once live, copy your backend URL (e.g., `https://smart-leads-server.onrender.com`).

### 2. Deploying the Frontend on Vercel
1. Go to [Vercel.com](https://vercel.com) and import your GitHub repository.
2. Set the **Framework Preset** to `Vite`.
3. Set the **Root Directory** to `client`.
4. Under **Environment Variables**, add:
   - **Name**: `VITE_API_BASE_URL`
   - **Value**: `https://smart-leads-server.onrender.com/api` *(Your live Render URL + `/api`)*
5. Click **Deploy**.

> **🎯 Crucial Vercel SPA Configuration (`vercel.json`):**
> React Router requires server rewrite rules to prevent `404 Not Found` errors when refreshing pages. This repository already includes a `client/vercel.json` file configured to automatically rewrite all navigation routes to `index.html`:
> ```json
> {
>   "rewrites": [
>     {
>       "source": "/(.*)",
>       "destination": "/index.html"
>     }
>   ]
> }
> ```

---

## 📄 License & Author

- **Author**: [ppboy04](https://github.com/ppboy04)
- **License**: This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
