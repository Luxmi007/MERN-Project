# VACATION RENTALS - Project built using MERN Stack

A full-stack web application built using the MERN stack: **MongoDB, Express.js, React, and Node.js**.

## Features

- RESTful API backend with Express and Node.js
- MongoDB for data storage
- React frontend for an interactive user experience
- User authentication and authorization
- CRUD operations for core resources
- Modern development workflow with npm scripts

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Luxmi007/MERN-Project.git
   cd MERN-Project
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure environment variables:**
   - Create a `.env` file in the `backend` directory.
   - Add your MongoDB connection string and any other required configuration.

5. **Start the backend server:**
   ```bash
   npm run dev
   ```

6. **Start the frontend client:**
   ```bash
   cd ../frontend
   npm start
   ```

## Project Structure

```
MERN-Project/
│
├── backend/      # Express and Node.js backend code
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── ...
│
├── frontend/     # React frontend code
│   ├── src/
│   ├── public/
│   └── ...
│
└── README.md
```

## Scripts

### Backend

- `npm run dev` - Start backend in development mode with nodemon

### Frontend

- `npm start` - Start the React development server

## Contributing

Contributions are welcome! Please open issues and submit pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.

---

> **Built with ❤️ using the MERN stack**
