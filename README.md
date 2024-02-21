# Node.js Express MongoDB JWT Authentication

This is a simple authentication project built using Node.js, Express, MongoDB, and JWT (JSON Web Tokens).

# Features
User registration with email and password
User login with email and password
JWT-based authentication
Password hashing using bcrypt

# Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>


2. Navigate to the project directory:

    ```bash
     cd node-express-mongodb-jwt-auth


3. Install dependencies:

    ```bash
    npm install


# Set up environment variables:

 1. Create a .env file in the root directory and provide the following variables:


    ```bash 

    PORT=3000

    MONGODB_URI=<your-mongodb-uri>

    SECRET_KEY=<your-secret-key>


2.  Start the server:

    ```bash    
    npm start

The server should be running on http://localhost:3000.


# API Endpoints

Register User

URL: /api/users/register

Method: POST

Request Body:

json
Copy code
{
  "email": "user@example.com",
  "password": "password"
}
Response:

json
Copy code
{
  "message": "User registered successfully"
}
Login User
URL: /api/users/login

Method: POST

Request Body:

json
Copy code
{
  "email": "user@example.com",
  "password": "password"
}
Response:

json
Copy code
{
  "token": "<jwt-token>"
}
Profile (Protected Route)
URL: /api/users/profile

Method: GET

# Headers:

Authorization: Bearer <jwt-token>

Response:

json
Copy code
{
  "email": "user@example.com",
  "_id": "1234567890",
  "createdAt": "2022-02-20T12:00:00.000Z"
}

# Technologies Used

Node.js

Express.js

MongoDB

JSON Web Tokens (JWT)

bcrypt


# License
This project is licensed under the MIT License.

