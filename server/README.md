# AgroVision AI - Backend

Production-grade backend for the AgroVision AI platform.

This backend acts as:
- API Gateway
- Authentication Server
- GIS Analytics Manager
- Alert Engine
- ML Service Connector

Built using:
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Socket.IO

---

# Features

- JWT Authentication
- Role-Based Access Control
- REST APIs
- Real-Time Alerts
- Satellite Analytics APIs
- AI Prediction Integration
- MongoDB Integration
- Report Management
- Weather Intelligence
- District Monitoring

---

# Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- Socket.IO
- Axios
- Winston Logger

---

# Folder Structure

```text
server/
│
├── src/
│   │
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── sockets/
│   ├── validators/
│   ├── utils/
│   ├── jobs/
│   ├── scripts/
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── .env.example
├── .gitignore
├── package.json
├── Dockerfile
└── README.md
```

---

# Setup

## 1. Open Backend Folder

```bash
cd backend
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Create `.env`

Copy:

```bash
cp .env.example .env
```

Fill required values.

---

# Run Backend

## Development

```bash
npm run dev
```

---

## Production

```bash
npm start
```

---

# Server URLs

Backend:

```text
http://localhost:5000
```

Health Check:

```text
http://localhost:5000/api/health
```

---

# API Modules

| Module | Endpoint |
|---|---|
| Authentication | `/api/auth` |
| Districts | `/api/districts` |
| Predictions | `/api/predictions` |
| Analytics | `/api/analytics` |
| Alerts | `/api/alerts` |
| Weather | `/api/weather` |
| Reports | `/api/reports` |
| Satellite | `/api/satellite` |

---

# ML Service Integration

Backend communicates with FastAPI ML service.

Architecture:

```text
Frontend
    ↓
Node.js Backend
    ↓
FastAPI ML Service
    ↓
Satellite Processing
```

ML Service URL:

```env
ML_SERVICE_URL=http://localhost:8000/api/v1
```

---

# Authentication

Supported Roles:
- admin
- agriculture_officer
- analyst

JWT-based authentication.

---

# Socket.IO

Real-time features:
- outbreak alerts
- weather warnings
- disease notifications
- analytics updates

---

# Security

Implemented:
- Helmet
- CORS
- Rate Limiting
- JWT Protection
- Request Validation
- Error Middleware

---

# Example APIs

## Login

```http
POST /api/auth/login
```

---

## Prediction

```http
POST /api/predictions
```

---

## Satellite Analytics

```http
POST /api/satellite/process
```

---

# Production Features

- Modular Architecture
- Enterprise Folder Structure
- Microservice Ready
- AI Integration
- GIS Ready
- Scalable APIs
- Real-Time Systems
- Government Dashboard Architecture

---

# AgroVision AI

A real-world geospatial AI agriculture intelligence platform for:
- crop disease detection
- NDVI analytics
- satellite intelligence
- outbreak forecasting
- district risk analysis
- GIS visualization