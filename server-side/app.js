const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// Middleware to handle CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(204).send();
  }

  next();
});

const v1 = '/api/v1';
// Router
const authCMSRouter = require('./app/api/v1/auth/router');
const usersRouter = require('./app/api/v1/users/router');
const userRefreshTokenRouter = require('./app/api/v1/userRefreshToken/router');

// Middlewares
const notFoundMiddleware = require('./app/middlewares/not-found');
const handleErrorMiddleware = require('./app/middlewares/handler-error');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.status(200).json({
//     message: `Welcome to API MERN AUTH`,
//   });
// });

app.get('/', (req, res) => res.send('Welcome to API MERN AUTH'));

// App Router
app.use(`${v1}/cms`, authCMSRouter);
app.use(`${v1}/cms`, usersRouter);
app.use(`${v1}/cms`, userRefreshTokenRouter);

// App Middlewares
app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

module.exports = app;
