const express = require('express');
const router = express.Router();

const authRoutes = require('./auth.route');
const bookRoutes = require('./book.route');
const bookstoreRoutes = require('./bookstore.route');

function getRouter() {
  router.use('/auth', authRoutes);
  router.use('/books', bookRoutes);
  router.use('/bookstores', bookstoreRoutes);
  
  return router;
}

module.exports = getRouter;
