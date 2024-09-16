[English version](#build-a-fullstack-login--sign-up-with-mern-bcrypt--jwt)

[Indonesia version](#membangun-aplikasi-fullstack-login--sign-up-dengan-mern-bcrypt-dan-jwt)

---

# Build a Fullstack Login & Sign Up with MERN, bcrypt, & JWT.

This project provides a secure authentication system for your MERN application, utilizing bcrypt for password hashing and JWT for session management.

## Getting Started

### Prerequisites

- Node.js and npm installed
- Mongodb installed and running

### Installation

1. Clone the repository:

```
git clone https://github.com/iqbalzayn01/mern-auth.git
```

or

```
git clone https://github.com/iqbalzayn01/mern-auth.git folder_name
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

### Tools Used

- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React](https://react.dev/)
- [Node.js](https://react.dev/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [JWT (JSON Web Token)](https://www.npmjs.com/package/jsonwebtoken)
- [Vite](https://vitejs.dev/)

---

---

# Membangun Aplikasi Fullstack Login & Sign Up dengan MERN, bcrypt, dan JWT.

Proyek ini adalah sistem otentikasi yang aman untuk aplikasi MERN (MongoDB, Express, React, Node.js) dengan menggunakan bcrypt untuk enkripsi password dan JWT (JSON Web Token) untuk mengelola sesi pengguna.

## Langkah Awal

### Prasyarat

- Node.js dan npm terinstall
- MongoDB sudah terinstall dan berjalan

### Instalasi

1. Klon repositori:

```
git clone https://github.com/iqbalzayn01/mern-auth.git
```

atau

```
git clone https://github.com/iqbalzayn01/mern-auth.git nama_folder
```

2. Instal dependensi untuk server dan client:

sisi server:

```
cd mern-auth
cd server-side
npm install
```

sisi client:

```
cd mern-auth
cd client-side
npm install
```

3. Buat sebuah file `.env` di direktori server dan tambahkan string koneksi MongoDB dan JWT_SECRET_KEY:

```
URL_MONGODB_DEV=mongodb://localhost:port/db_name
JWT_SECRET_KEY=key
```

4. Jalankan server dan client:

```
#di direktori 'server'
npm run dev

#pada terminal lain, di direktori 'client'
npm run dev
# buka browser dan kunjungi http://localhost:3000
```

### Alat yang Digunakan

- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React](https://react.dev/)
- [Node.js](https://react.dev/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [JWT (JSON Web Token)](https://www.npmjs.com/package/jsonwebtoken)
- [Vite](https://vitejs.dev/)
