import authors from '../models/Author.js';

class AuthorController {

    static listAuthors = (req, res) => {
        authors.find((err, authors) => {
            res.status(200).json(authors);
        });
    }

    static findAuthorById = (req, res) => {
        const { id } = req.params;
        authors.findById(id, (err, authors) => {
            if (err || !authors) {
                res.status(404).send({ message: `There is no author with the given id!` });
                return;
            }

            res.status(200).send(authors);
        })
    }

    static registerAuthor = (req, res) => {
        const author = new authors(req.body);
        author.save((err) => {
            if (err) {
                res.status(500).send({ message: `Failed to register author: ${err.message}` });
                return;
            }

            res.status(201).send(author.toJSON());
        });
    }

    static updateAuthor = (req, res) => {
        const { id } = req.params;
        authors.findByIdAndUpdate(id, {
            $set: req.body
        }, (err) => {
            if (err) {
                res.status(500).send({ message: `Failed to update author: ${err.message}` });
                return;
            }

            res.status(200).send({ message: "Author successfully updated!" });
        });
    }

    static deleteAuthor = (req, res) => {
        const { id } = req.params;
        authors.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(404).send({ message: 'There is no author with the given id!' })
                return;
            }

            res.status(200).send({ message: 'Author successfully deleted.' });
        });
    }

}

export default AuthorController;