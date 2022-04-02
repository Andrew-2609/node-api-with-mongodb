# Node.js API with Express and MongoDB

This project was made based on one of [Alura](https://www.alura.com.br)'s courses.

## What is it about?

This is a simple API with a basic CRUD of Books and Authors, utilizing [Express](https://expressjs.com/) and [MongoDB](https://www.mongodb.com/).

This is my first project with a [NoSQL](https://en.wikipedia.org/wiki/NoSQL) database, and you can see in the models that the complexity to create and map entities is quite low (at least for a project of this size). Books are related to Authors, and you can check an example of the payload for a Book down below: 

```json
[
    {
        "_id": "6248b154c17e9a544443ebfc",
        "title": "Jurassic Park",
        "author": {
            "_id": "6248bcaf3f55df4f09647a7a",
            "name": "Michael Crichton"
        },
        "publisher": "Aleph",
        "printLength": 564,
        "__v": 0
    }
]
```

## How is it structured?

This project was made following (kinda) the [MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC) (Model-View-Controller) pattern, along with files with specific **responsibilities**.

You'll probably understand it better taking a look at the project *tree* below:

```bash
├── package.json
├── package-lock.json
├── README.md
├── server.js
└── src
    ├── app.js
    ├── config
    │   ├── dbConnect.js
    │   └── dbConnectSample.js
    ├── controllers
    │   ├── authorController.js
    │   └── bookController.js
    ├── models
    │   ├── Author.js
    │   └── Book.js
    └── routes
        ├── authorRoutes.js
        ├── bookRoutes.js
        └── index.js

5 directories, 14 files

# generated with "tree -I 'node_modules'"
```

You're able to see how to make a simple connection with your MongoDB database in ``dbConnectSample.js``.

Thanks for reading 'till here, I wish you a wonderful day!
