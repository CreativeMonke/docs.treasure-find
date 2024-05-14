# Configuration Guide

This section outlines the configuration options for both user and admin settings within the Treasure Hunt app.

## General Settings

### User Settings:

- **Language (en/ro):** Users can choose their preferred language from the top of the sidebar menu.
- **Theme (dark/light):** The theme adapts automatically based on the user's device settings.

### Admin Settings:

- **Manage Hunt Timings:** Set global start and end times for the treasure hunt, ensuring everyone participates within the designated timeframe.
- **Show/Hide Answer Page:** Control whether the page revealing correct answers is accessible to all users.
- **Location Management (Create/Edit/Delete):** Admins can manage Points of Interest (POIs) within the hunt. This includes adding new locations, editing existing ones, and removing them entirely.
- **User Management (Role/Delete):** Admins have the ability to edit user roles (e.g., player, admin) and delete user accounts.

# Integration Setup

## Database Setup

### Prerequisites (Cloud Deployment):

- A MongoDB cloud account like MongoDB Atlas ([https://www.mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register)) is required.

### Deployment Steps:

1. **Create a MongoDB Database:**

   - Log in to your MongoDB cloud account.
   - Create a new database with a descriptive name like `treasure-find-db`.

2. **Create Collections:**
   Within your newly created database, establish three collections with the following names:
   - **users:** Stores user information (username, email, hashed password, etc.).
   - **pois:** Stores point of interest (POI) details (name, description, geolocation, etc.).
   - **responses:** Stores user responses (user ID, POI ID, answer, timestamp, etc.).

### MongoDB Database Connection

**Important Note:** The `.env` file is needed only for local installations. For Render deployments, you should set environment variables through the Render dashboard. Here are the steps:

1. **Login to Render:** Log in to your Render account.
2. **Select Your Service:** Navigate to the service where you want to set environment variables.
3. **Go to Environment Tab:** Click on the "Environment" tab in the service settings.
4. **Add Environment Variables:** Add the required environment variables and their corresponding values:
    - `URI_USER`
    - `URI_POI`
    - `URI_RESPONSES`
    - `SECRET_ACCESS_TOKEN`
    - `HUGGING_FACE_TOKEN`
5. **Save Changes:** Click "Save" or "Deploy" to apply the changes to your Render service.

### .env

```plaintext
# MongoDB Database Connection
URI_USER="mongodb+srv://myDatabaseUser:myPassword@cluster0.example.mongodb.net/Users?retryWrites=true&w=majority"
URI_POI="mongodb+srv://myDatabaseUser:myPassword@cluster0.example.mongodb.net/pois?retryWrites=true&w=majority"
URI_RESPONSES="mongodb+srv://myDatabaseUser:myPassword@cluster0.example.mongodb.net/responses?retryWrites=true&w=majority"

# Server Port
PORT=5005

# JWT Secret Access Token
SECRET_ACCESS_TOKEN="<jwt-secret-access-key>"
# Hugging Face API Token
HUGGING_FACE_TOKEN="<hugging-face-api-token>"
```

## Server Port

The server operates on port `PORT=5005` by default.

## Environmental Variables

- **SECRET_ACCESS_TOKEN="<jwt-secret-access-key>":** This secret key is crucial for generating JSON Web Tokens (JWT) used for user authentication within the app.
- **HUGGING_FACE_TOKEN="<hugging-face-api-token>":** This token grants access to the Hugging Face API, which empowers the app with AI-powered features like automated response evaluation.

## Why HuggingFace?

The Treasure Hunt app leverages Hugging Face, a leading platform for natural language processing (NLP). By integrating with Hugging Face's API, the app can implement AI-powered auto-evaluation of user responses. This functionality analyzes user answers and compares them against pre-defined answers, reducing the need for manual evaluation by admins.
