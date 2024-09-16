[English version](#Build a Fullstack Login & Sign Up with MERN, bcrypt, & JWT.)

# Build a Fullstack Login & Sign Up with MERN, bcrypt, & JWT.

This project demonstrates how to build a secure authentication system for your MERN (MongoDB, Express, React, Node.js) application using bcrypt for password hashing and JWT (JSON Web Token) for managing user sessions.

### Getting Started

Prerequisites

- Node.js and npm installed
- Mongodb installed and running

Installation

1. Clone the repository:

```
git clone https://github.com/iqbalzayn01/mern-auth.git
```

2. Install dependencies for both the server and client:
   server side:

```
cd mern-auth
cd server-side
npm install
```

client side:

```
cd mern-auth
cd client-side
npm install
```

3. Create a `.env` file in the server directory and add your MongoDB connection string and JWT secret:

```
URL_MONGODB_DEV=mongodb://localhost:port/db_name
JWT_SECRET_KEY=key
```

4. Start the server and client:

```
#in the 'server' directory
npm run dev

#in another terminal, in the 'client' directory
npm run dev
# open your browser and visit http://localhost:3000
```

Tools used:

- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React](https://react.dev/)
- [Node.js](https://react.dev/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [JWT (JSON Web Token)](https://www.npmjs.com/package/jsonwebtoken)
- [Vite](https://vitejs.dev/)
