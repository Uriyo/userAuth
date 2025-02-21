# Express MongoDB API 

This project is a simple Express.js application demonstrating user authentication and user management (CRUD operations) using MongoDB for data storage and Swagger UI for interactive API documentation.


## Features

- **User Signup:** Create new user accounts with hashed passwords.
- **User Login:** Authenticate existing users and return JWT tokens.
- **Protected Routes:** Secure routes for user management operations (list, get by ID, update, delete).
- **Role-Based Access:** Admin-only route for deleting users.
- **Swagger UI:** Interactive API documentation for testing endpoints.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (Local or cloud instance)

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo

2. **Install Dependencies:**
  
   ```bash
    npm install
3. **Setup Environment Variables:**
  
   ```bash
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/your-database-name
    JWT_SECRET=your_jwt_secret_here
4. **Install Dependencies:**
  
   ```bash
    npm install
## Usage

   ```bash
      npm start
   ```
Open your browser and navigate to http://localhost:3000/api-docs to view the interactive Swagger UI documentation.

## Project Structure
 ```bash
    your-repo/
├── controllers/
│   ├── authController.js       # User authentication logic
│   └── userController.js       # User management logic
├── middleware/
│   ├── auth.js                 # JWT authentication & role checking
│   └── validate.js             # Request validation logic
├── models/
│   └── User.js                 # Mongoose model for User
├── routes/
│   ├── authRoutes.js           # Routes for authentication (signup/login)
│   └── userRoutes.js           # Routes for user management (CRUD operations)
├── openapi.yaml                # Swagger API documentation
├── .env                      # Environment variables
├── app.js                      # Main Express app file
├── package.json
└── README.md
```
