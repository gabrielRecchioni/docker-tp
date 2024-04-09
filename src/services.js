const bookRepository = require('./repo.js');

const service = {};

service.getAllBooks = () => bookRepository.getAllBooks();

service.saveBook = (book) => bookRepository.saveBook(book);

module.exports = service;