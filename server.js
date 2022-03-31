const http = require('http');

const port = 3000;

const routes = {
    '/': 'NodeJS course',
    '/books': 'Welcome to the Books page',
    '/authors': 'Welcome to the Authors page'
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(routes[req.url] || 'Not Found, buddy :/');
});

server.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
});