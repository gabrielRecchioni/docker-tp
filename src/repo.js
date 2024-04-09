const bookModel = require('./book.js');

const repository = {};

repository.getAllBooks = async () => {
    const book = await bookModel.find();
    return book;
};


repository.saveBook = async (book) => {
    const bookCreated = await bookModel.create(book);
    return bookCreated;
};

module.exports = repository;