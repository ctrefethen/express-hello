import express from 'express';
import bodyParser from 'body-parser';

let app = express();
let port = 80;

app.use(express.static('.\\'));
app.set('view engine', 'pug');
app.set('views', 'views');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.render('index', { name: "Colby" });
});

app.get('/foo', (request, response) => {
    response.render('foo');
});

app.post('/search', (req, res) => {
    res.render('search', { search: req.body.searchText });
});

app.post('/login', (req, res) => {
    res.render('search', { search: `${req.body.email}:${req.body.password}` });
});

app.listen(port, () => { console.log(`Listening on ${port}`); });