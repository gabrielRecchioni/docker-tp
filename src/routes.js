const { Router } = require('express');
const bookController = require('./controllers.js');
const routes = Router();

routes.post('/books',bookController.saveBook)
routes.get('/books', bookController.getAllBooks);


module.exports = routes;