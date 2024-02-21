Node.js Express MongoDB JWT Authentication
This is a simple authentication project built using Node.js, Express, MongoDB, and JWT (JSON Web Tokens).

Features
User registration with email and password
User login with email and password
JWT-based authentication
Password hashing using bcrypt

Installation

Clone the repository:

Copy code
'''
git clone <repository-url>


Navigate to the project directory:

Copy code
cd node-express-mongodb-jwt-auth


Install dependencies:

Copy code
npm install


Set up environment variables:

Create a .env file in the root directory and provide the following variables:


Copy code

PORT=3000

MONGODB_URI=<your-mongodb-uri>

SECRET_KEY=<your-secret-key>


Start the server:


npm start

The server should be running on http://localhost:3000.


API Endpoints

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

Headers:

plaintext
Copy code
Authorization: Bearer <jwt-token>
Response:

json
Copy code
{
  "email": "user@example.com",
  "_id": "1234567890",
  "createdAt": "2022-02-20T12:00:00.000Z"
}

Technologies Used

Node.js

Express.js

MongoDB

JSON Web Tokens (JWT)

bcrypt


License
This project is licensed under the MIT License.

