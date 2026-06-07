# AgroVision - ML Service

Production-grade geospatial ML microservice for:

- crop disease detection
- NDVI analytics
- outbreak forecasting
- district risk scoring
- GIS intelligence
- satellite raster processing

Built using:

- FastAPI
- XGBoost
- Rasterio
- GeoPandas
- NumPy
- Scikit-learn

---

# Features

- NDVI Calculation
- NDWI Calculation
- EVI Calculation
- Satellite Raster Processing
- GeoTIFF Support
- GIS District Clipping
- ML Based Disease Prediction
- District Risk Engine
- Outbreak Analytics
- Heatmap Generation

---

# Folder Structure

```text
ml-service/
│
├── app/
├── datasets/
├── district_shapes/
├── models/
├── satellite_data/
├── requirements.txt
├── Dockerfile
├── .env.example
├── .gitignore
├── run.py
└── README.md
```

---

# Setup

## 1. Create Virtual Environment

```bash
python -m venv venv
```

---

## 2. Activate Virtual Environment

### Windows

```bash
venv\Scripts\activate
```

### Linux/Mac

```bash
source venv/bin/activate
```

---

## 3. Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 4. Create `.env`

Copy:

```bash
cp .env.example .env
```

Fill credentials.

---

# Run Application

```bash
python run.py
```

Server:

```text
http://localhost:8000
```

Swagger Docs:

```text
http://localhost:8000/docs
```

---

# API Endpoints

| Endpoint | Method |
|---|---|
| `/health` | GET |
| `/predict` | POST |
| `/train` | POST |
| `/district-risk` | POST |
| `/satellite/process` | POST |

---

# Training Model

Run:

```bash
POST /api/v1/train
```

This generates:

```text
models/xgboost_model.pkl
```

---

# Prediction API Example

```json
{
  "ndvi": 0.72,
  "ndwi": 0.41,
  "rainfall": 120,
  "humidity": 78,
  "temperature": 31,
  "soilMoisture": 45
}
```

---

# Satellite Processing Workflow

```text
GeoTIFF
   ↓
Raster Loader
   ↓
Band Extraction
   ↓
NDVI/EVI/NDWI
   ↓
District Clipping
   ↓
ML Prediction
   ↓
GIS Heatmaps
```

---

# Recommended Data Sources

- Sentinel Hub
- Google Earth Engine
- Kaggle GeoTIFF datasets
- NASA EarthData

---

# Production Features

- modular architecture
- scalable pipelines
- GIS processing
- ML analytics
- Docker support
- FastAPI microservice
- real raster processing

---

# Tech Stack

- FastAPI
- Rasterio
- GeoPandas
- XGBoost
- NumPy
- Scikit-learn
- OpenCV
- GDAL