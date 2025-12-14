# Medical Emergency Response System (MediCare)

A comprehensive MERN Stack application for handling medical emergencies with real-time location tracking and alerts.

## 📋 Prerequisites

Before running this project, ensure you have the following installed on your machine:

1.  **Node.js & npm** (Download from [nodejs.org](https://nodejs.org/))
    *   Verify installation: `node -v` and `npm -v`
2.  **MongoDB** (Community Server)
    *   Download from [mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
    *   Ensure the MongoDB Service is running.
3.  **MongoDB Compass** (Optional but recommended for viewing database data)
    *   Download from [mongodb.com/products/tools/compass](https://www.mongodb.com/products/tools/compass)

---

## 🛠️ Project Setup & Installation

The project is divided into two parts: `server` (Backend) and `client` (Frontend). You can install dependecies for both with a single command or manually.

### Option 1: Automated Installation (Recommended)

Open your terminal in the main project folder (`Medical`) and run:

```bash
npm run install-all
```

*(Note: If this command fails on Windows PowerShell, use Option 2)*

### Option 2: Manual Installation

1.  **Install Root Dependencies:**
    ```bash
    npm install
    ```

2.  **Install Backend Dependencies:**
    ```bash
    cd server
    npm install
    ```

3.  **Install Frontend Dependencies:**
    ```bash
    cd ../client
    npm install
    ```

---

## ⚙️ Configuration

The project comes with a pre-configured `.env` file in the `server` directory for local development.

**Server Environment (`server/.env`):**
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/medicare
JWT_SECRET=supersecretkey_medicare_2025
```

*Note: Ensure your local MongoDB is running on port 27017 (default).*

---

## 🚀 Running the Application

You can run both the frontend and backend with a single command from the **root directory**.

1.  Open your terminal in the `Medical` folder.
2.  Run the following command:

```bash
npm start
```

This will concurrently start:
*   **Backend Server** at `http://localhost:5000`
*   **Frontend Client** at `http://localhost:5173`

The application should automatically open in your browser. If not, visit [http://localhost:5173](http://localhost:5173).

---

## 🧪 Running Tests (Optional)

This project includes automated tests for both backend and frontend.

**To run all backend tests:**
```bash
cd server
npm test
```

**To run frontend component tests:**
```bash
cd client
npm test
```

---

## 📱 Features & Usage

*   **Home Page:** View details about services, first aid, and hospitals.
*   **Emergency Services:** Click to call ambulance, police, or fire department.
*   **First Aid Guide:** Detailed step-by-step guides for common emergencies.
*   **Nearby Hospitals:** View a list of hospitals in Phagwara/Punjab with location sorting.
*   **Login/Register:** Create an account to access advanced features like the SOS button.
*   **SOS Button:** (Requires Login) Sends an immediate alert to registered ambulances with your live location.

---

## ⚠️ Troubleshooting

*   **"MongoNetworkError"**: Ensure your MongoDB service is running locally. Open Task Manager -> Services -> MongoDB to check.
*   **"EADDRINUSE"**: If port 5000 or 5173 is busy, close other node processes or change the port in `.env` (server) or `vite.config.js` (client).
*   **"Vite not found"**: Ensure you ran `npm install` inside the `client` directory.

---

**Developed for University Viva/Project Submission.**
