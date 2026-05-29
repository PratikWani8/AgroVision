# Base Image
FROM node:20

# App Directory
WORKDIR /app

# Copy Package Files
COPY package*.json ./

# Install Dependencies
RUN npm install

# Copy Project Files
COPY . .

# Expose Port
EXPOSE 5000

# Start Application
CMD ["npm", "run", "dev"]