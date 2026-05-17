# Smart Leads Dashboard

A complete, production-ready MERN application for managing and tracking sales leads with advanced filtering, pagination, RBAC, and CSV export.

## Tech Stack

- **Frontend**: React.js, TypeScript, TailwindCSS, Vite
- **Backend**: Node.js, Express.js, TypeScript, MongoDB, Mongoose
- **Auth**: JWT, Bcrypt
- **Deployment**: Docker, Docker Compose

## Features

- **JWT Authentication**: Secure login and registration with hashed passwords.
- **Leads Management**: Full CRUD operations for sales leads.
- **Advanced Filtering**: Composible filters for status and source.
- **Search & Sort**: Debounced search by name/email and sorting by date.
- **Pagination**: Backend-driven pagination for efficient data loading.
- **RBAC**: Role-based access control (Admin vs. Sales). Only admins can delete leads.
- **CSV Export**: Export filtered leads directly to CSV.
- **Dark Mode**: Toggleable dark mode with persistent settings.
- **Responsive UI**: Fully mobile-friendly design using TailwindCSS.

## Project Structure

```
smart-leads-dashboard/
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/      # UI components
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom hooks
│   │   ├── context/         # Global state
│   │   ├── services/        # API services
│   │   ├── types/           # TS definitions
│   │   └── utils/           # Helpers
├── server/                  # Express backend
│   ├── src/
│   │   ├── controllers/     # Route logic
│   │   ├── middleware/      # Auth & RBAC
│   │   ├── models/          # DB schemas
│   │   ├── routes/          # API endpoints
│   │   ├── types/           # TS definitions
│   │   └── utils/           # Helpers
├── docker-compose.yml
└── README.md
```

## Setup Instructions

### Local Development

1. **Prerequisites**: Node.js, MongoDB
2. **Setup Server**:
   ```bash
   cd server
   npm install
   npm run dev
   ```
3. **Setup Client**:
   ```bash
   cd client
   npm install
   npm run dev
   ```

### Using Docker

1. **Run with Compose**:
   ```bash
   docker-compose up --build
   ```
2. Access the app at `http://localhost:3000`.

## API Documentation

### Auth Endpoints
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Login and receive JWT.

### Lead Endpoints
- `GET /api/leads`: Fetch leads with filters/pagination.
  - Params: `status`, `source`, `search`, `sort`, `page`, `limit`
- `GET /api/leads/:id`: Fetch a single lead.
- `POST /api/leads`: Create a new lead.
- `PUT /api/leads/:id`: Update an existing lead.
- `DELETE /api/leads/:id`: Delete a lead (Admin only).
- `GET /api/leads/export`: Download leads as CSV.

## Environment Variables

Refer to `.env.example` for the required variables.
"# Smart-Leads-Dashboard" 
