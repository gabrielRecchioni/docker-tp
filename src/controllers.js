const Book = require('./book.js');
const service = require('./services.js');

const controller = {};

controller.saveBook = (req, res, next) =>
  service.saveBook(
                new Book({
                title: req.body.title,
                author: req.body.author
              }))
        .then((data) => res.status(201).send(data))
        .catch(next);
        
controller.getAllBooks = (req, res, next) =>
    service
        .getAllBooks()
        .then((data) => res.status(200).send(data))
        .catch(next);

module.exports = controller;