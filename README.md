# Asset Management Dashboard

The Asset Management Dashboard is a web application designed for managing and visualizing various types of assets, including commodities, currencies, rials, and stocks. The application has a React frontend and a FastAPI backend, providing a modern and efficient user experience for asset management.

## Project Structure

- **frontend/**: Contains the React application for the user interface.
- **backend/**: Contains the FastAPI application for handling API requests and authentication.

## Features

- **Frontend**:
  - Manage and view different types of assets.
  - User authentication (login and registration).
  - Responsive and modern UI with navigation and asset management pages.

- **Backend**:
  - User authentication endpoints for login and registration.
  - Basic asset management endpoints.
  - Runs on FastAPI and can be extended for additional functionality.

## Setup

### Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/MohammadH-Shirvani/Asset-management-dashboard.git
   cd asset-management-dashboard
   ```
2. **Build and Run the Application**

   ```bash
   docker-compose up --build
   ```
3. **Access the Application**
   - Frontend: Open http://localhost:5000 in your web browser.
   - Backend: Open http://localhost:8000 to access the FastAPI backend (API endpoints).
