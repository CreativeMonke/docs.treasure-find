# Deployment Guide

##### This guide provides instructions for deploying both the frontend and backend components of the Treasure Find application. It includes steps for deploying the frontend to Vercel and the backend to Render, along with setting up the necessary database and environment configurations.

## Frontend Deployment

### Vercel Deployment

#### Prerequisites

- Vercel account

#### Steps

1. Fork the repository on GitHub:

   - Visit the [GitHub repository page](https://github.com/CreativeMonke/treasure-find-frontend).
   - Click on the "Fork" button in the upper-right corner to fork the repository to your own GitHub account.

2. Login to Vercel and create a new project.

3. Connect the GitHub repository to Vercel.

4. Configure project settings (e.g., environment variables, custom domains).

5. Add the `REACT_APP_API_BASE_URL` environment variable with the appropriate backend API URL.

6. Deploy the frontend application.

## Backend Deployment

### Local Deployment (Not Recommended)

#### Prerequisites

- Node.js installed
- Git installed

#### Steps

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/CreativeMonke/treasure-find-backend.git
   ```

2. Navigate to the backend directory:

   ```bash
   cd treasure-find-backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Refer to the [configuration](/configuration) section for `MongoDB` , `JWT` and `HuggingFace` setup.

5. Run the backend application:
   ```bash
   npm start
   ```

### Render Deployment

#### Prerequisites

- Render account

#### Steps

1. Fork the repository on GitHub:

   - Visit the [GitHub repository page](https://github.com/CreativeMonke/treasure-find-api).
   - Click on the "Fork" button in the upper-right corner to fork the repository to your own GitHub account.

2. Login to Render and create a new service.

3. Connect the GitHub repository to Render.

4. Configure the service settings:

   - Specify the start command, e.g., `npm start`.
   - Refer to the [configuration](/configuration) section for `MongoDB` , `JWT` and `HuggingFace` setup.

5. Deploy the backend application.

---
