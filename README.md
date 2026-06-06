<h1 align="center">🌱 AgroVision AI - Satellite-Powered Crop Disease Detection & Early Warning System</h1>
<p align="center">
  <img src="./assets/agrovisionai_logo.png" alt="AgroVision AI Logo" width="700" height="250"/>
</p>

An AI-powered agriculture intelligence platform that combines satellite imagery, machine learning, GIS analytics, weather intelligence, and outbreak forecasting to help monitor crop health and agricultural risks.

---

## Overview

AgroVision AI provides:

- Satellite-based vegetation monitoring
- NDVI, EVI, and NDWI analytics
- Crop disease risk prediction
- District-level agricultural intelligence
- GIS visualization dashboards
- Weather analytics
- Real-time alerting system
- AI-powered forecasting

The platform follows a microservice architecture consisting of:

```text
Frontend (React)
        ↓
Backend API (Node.js + Express)
        ↓
ML Service (FastAPI)
        ↓
Satellite Processing & AI Models
```

---

## Features

### Satellite Intelligence

- Sentinel-2 imagery support
- GeoTIFF processing
- NDVI generation
- EVI generation
- NDWI generation
- Heatmap generation

### Artificial Intelligence

- Disease risk prediction
- District risk scoring
- Crop health analytics
- Forecast generation

### GIS Analytics

- Interactive maps
- District overlays
- GeoJSON support
- Heatmap visualization
- Risk monitoring

### Weather Intelligence

- Temperature monitoring
- Rainfall analytics
- Humidity tracking
- Forecast integration

### Alert System

- Disease outbreak alerts
- Weather alerts
- Vegetation stress alerts
- Real-time notifications

### Reporting

- PDF reports
- CSV exports
- Analytics summaries

---

# Technology Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Axios
- Recharts
- React Leaflet
- Socket.IO Client

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Socket.IO

## ML Service

- FastAPI
- XGBoost
- Scikit-learn
- NumPy
- Pandas
- Rasterio
- GeoPandas

---


# Project Structure

```text
AgroVision-AI/
│
├── frontend/
│
├── backend/
│
├── ml-service/
│
├── .gitignore
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/your-username/agrovision-ai.git

cd agrovision-ai
```

---

## Backend Setup

```bash
cd backend

npm install

npm run dev
```

---

## ML Service Setup

```bash
cd ml-service

python -m venv venv
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# Workflow

```text
Satellite Image
        ↓
GeoTIFF Processing
        ↓
NDVI / EVI / NDWI
        ↓
AI Analysis
        ↓
Risk Prediction
        ↓
GIS Visualization
        ↓
Alerts & Reports
```

---

# Sample Outputs

- NDVI heatmaps
- District risk maps
- Disease outbreak forecasts
- Weather intelligence dashboards
- PDF reports

---

# Future Enhancements

- Multi-state support
- Mobile application
- Drone imagery integration
- Real-time satellite streaming
- Deep learning crop disease detection
- Government agriculture dashboard

---

# ⭐ Support
If you found this project helpful, consider giving it a star ⭐ on GitHub!