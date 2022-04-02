import books from '../models/Book.js';

class BookController {

    static listBooks = (req, res) => {
        books.find((err, books) => {
            res.status(200).json(books);
        });
    }

    static findBookById = (req, res) => {
        const { id } = req.params;
        books.findById(id, (err, books) => {
            if (err) {
                res.status(404).send(`There is no book with the given id!`);
                return;
            }

            res.status(200).send(books);
        })
    }

    static registerBook = (req, res) => {
        const book = new books(req.body);
        book.save((err) => {
            if (err) {
                res.status(500).send({ message: `Failed to register book: ${err.message}` });
                return;
            }

            res.status(201).send(book.toJSON());
        });
    }

    static updateBook = (req, res) => {
        const { id } = req.params;
        books.findByIdAndUpdate(id, {
            $set: req.body
        }, (err) => {
            if (err) {
                res.status(500).send({ message: `Failed to update book: ${err.message}` });
                return;
            }

            res.status(200).send({ message: "Book successfully updated!" });
        });
    }

}

export default BookController;