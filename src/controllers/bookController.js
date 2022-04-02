import books from '../models/Book.js';

class BookController {

    static list = (req, res) => {
        books.find()
            .populate('author', ['name'])
            .exec((err, books) => {
                res.status(200).json(books);
            });
    }

    static listByPublisher = (req, res) => {
        const publisher = req.query.publisher;
        books.find({ 'publisher': publisher }, {})
            .populate('author', ['name'])
            .exec((err, books) => {
                res.status(200).json(books);
            });
    }

    static findById = (req, res) => {
        const { id } = req.params;
        books.findById(id)
            .populate('author', ['name'])
            .exec((err, books) => {
                if (err || !books) {
                    res.status(404).send({ message: `There is no book with the given id!` });
                    return;
                }

                res.status(200).send(books);
            });
    }

    static register = (req, res) => {
        const book = new books(req.body);
        book.save((err) => {
            if (err) {
                res.status(500).send({ message: `Failed to register book: ${err.message}` });
                return;
            }

            res.status(201).send(book.toJSON());
        });
    }

    static update = (req, res) => {
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

    static delete = (req, res) => {
        const { id } = req.params;
        books.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(404).send({ message: 'There is no book with the given id!' })
                return;
            }

            res.status(200).send({ message: 'Book successfully deleted.' });
        });
    }

}

export default BookController;