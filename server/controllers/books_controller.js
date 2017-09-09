const books = []
let id = 0

module.exports = {
  create: (req, res) => {
    const {title, author} = req.body;
    books.push( {id, title, author});
    id++;
    res.status(200).send(books);
  },

  read: (req, res) => {
    res.status(200).send(books);
  },

  update: (req, res) => {
    let book;
    let index;
    for (let i = 0; i < books.length; i++) {
      if (books[i].id == req.params.id) {
        book = books[i]
        index = i
        break;
      }
    }

    let updatedBook = {
      id: book.id,
      title: req.body.title || book.title,
      author: req.body.author || book.author
    }

    books[index] = updatedBook;
    res.status(200).send(books);
  },

  delete: (req, res) => {
    for (var i = 0; i < books.length; i++) {
      if (books[i].id == req.params.id) {
        books.splice(i, 1)
        break;
      }
    }
    res.status(200).send(books);
  }
}
