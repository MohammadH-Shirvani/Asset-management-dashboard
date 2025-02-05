# Asset Management Dashboard

The Asset Management Dashboard is a web application designed for managing and visualizing various types of assets, including commodities, currencies, rials, and stocks. The application has a React frontend and a FastAPI backend, providing a modern and efficient user experience for asset management.

<p align="center">
 <img src="WebShot.png" alt="web screenshot" width="600" height="300">
</p>


## Project Structure

- **asset-management-dashboard/**: Contains the React application for the user interface.
- **fastapi-backend/**: Contains the FastAPI application for handling API requests and authentication.

## Setup

### Prerequisites

- [Docker](https://www.docker.com/get-started)

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
