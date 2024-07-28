# Nawy Full-Stack Job Assessment

This project is a full-stack application for managing apartment listings, developed as part of the Nawy job assessment. It consists of a backend API, a web frontend, and a mobile app.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Backend API](#backend-api)
- [Web Frontend](#web-frontend)
- [Mobile App](#mobile-app)
- [Screenshots](#screenshots)

## Overview

The application allows users to view and manage apartment listings. It includes features such as:

- Listing all apartments
- Viewing individual apartment details
- Adding new apartments

## Technologies Used

- Backend:
  - Node.js
  - Express
  - MongoDB
  - Mongoose
- Web Frontend:
  - Next.js
  - Tailwind CSS
  - Ant Design UI components
- Mobile App:
  - React Native
  - Expo
- Deployment:
  - Docker

## Project Structure

The project is divided into three main components:

1. Backend API
2. Web Frontend
3. Mobile App

## Getting Started

To run the project locally:

1. Clone the repository:

   ```
   git clone https://github.com/mazen250/nawy
   ```

2. Build and start the Docker containers:

   ```
   docker-compose build
   docker-compose up
   ```

3. Access the applications:

   - Backend API: http://localhost:4000
   - Web Frontend: http://localhost:3000

   Note: If you encounter any issues on the first run of the web frontend, please refresh the browser tab.

## Backend API

The backend is built with Node.js, Express, and MongoDB. It provides RESTful API endpoints for managing apartment data.

### Seeding Data

The project includes a seed script to populate the database with initial apartment data. This is useful for testing and development purposes.

To run the seed script:

1. Ensure that the Docker containers are running:

   ```
   docker-compose up
   ```

2. Access the backend container:

   ```
   docker exec -it backend /bin/sh
   ```

3. Run the seed script:
   ```
   npm run seed
   ```

You should see output indicating that the data has been successfully seeded into the database.

The seed script is located in the backend directory and populates the database with a predefined set of apartment listings. This ensures that you have some data to work with when you first start the application.

### Adding a New Apartment

To add a new apartment, send a POST request to `http://localhost:4000/api/apartments` with the following JSON body:

```json
{
  "title": "Luxury Apartment",
  "about": "A beautiful luxury apartment in the city center.",
  "price": 5000000,
  "thumbnail": "https://prod-images.cooingestate.com/processed/property_image/image/247215/high.webp",
  "imageGallery": [
    "https://prod-images.cooingestate.com/processed/property_image/image/247210/high.webp",
    "https://prod-images.cooingestate.com/processed/property_image/image/247211/high.webp",
    "https://prod-images.cooingestate.com/processed/property_image/image/247212/high.webp"
  ],
  "residenceType": "Apartment",
  "noOfRooms": 3,
  "noOfBaths": 2,
  "size": 120,
  "startPrice": 4500000,
  "deliveryIn": "2025-01-01",
  "saleType": "Developer Sale",
  "finishing": "Fully Furnished",
  "compound": "ZED East",
  "developer": "Ora Developers",
  "locationLat": 29.978106426756277,
  "locationLong": 31.570660911709048,
  "paymentPlan": "Installments",
  "paymentDuration": 8
}
```

## Web Frontend

The web frontend is built with Next.js, Tailwind CSS, and Ant Design UI components. It provides a user interface for viewing apartment listings and individual apartment details.

## Mobile App

The mobile app is developed using React Native and Expo for rapid development. It includes a home page to display all apartments and individual apartment pages.

To run the mobile app:

1. Navigate to the mobile app directory:

   ```
   cd mobile-app
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the Expo development server:
   ```
   npm start
   ```

## Screenshots

Screenshots of the mobile app & Website can be found in the `screenshots` folder of this repository.

---

For any questions or issues, Don't hesitate to contact me on mazenfayez56@gmail.com .
