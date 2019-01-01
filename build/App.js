"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
var port = 80;
app.use(express_1.default.static('.\\'));
app.set('view engine', 'pug');
app.set('views', 'views');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.get('/', function (request, response) {
    response.render('index', { name: "Colby" });
});
app.get('/foo', function (request, response) {
    response.render('foo');
});
app.post('/search', function (req, res) {
    res.render('search', { search: req.body.searchText });
});
app.post('/login', function (req, res) {
    res.render('search', { search: req.body.email + ":" + req.body.password });
});
app.listen(port, function () { console.log("Listening on " + port); });
//# sourceMappingURL=App.js.map