
const routes = (app) => {
    app.route('/').get((req, res) => {
        res.send(200).send({ title: 'NodeJS course' });
    });
};