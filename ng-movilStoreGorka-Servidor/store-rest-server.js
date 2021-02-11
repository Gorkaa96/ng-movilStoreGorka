"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Product = /** @class */ (function () {
    function Product(id, name, company, price, inches, colors, image) {
        this.id = id;
        this.name = name;
        this.company = company;
        this.price = price;
        this.inches = inches;
        this.colors = colors;
        this.image = image;
    }
    return Product;
}());
var products = [
    new Product(1, "Mi 10", "Xiaomi", 324.03, 6.57, ["White", "Black"], "https://thumb.pccomponentes.com/w-530-530/articles/30/300205/1390-xiaomi-mi-10-lite-5g-6-64gb-blanco-libre.jpg"),
    new Product(2, "K51S", "LG", 148.99, 6.55, ["Blue", "Black"], "https://thumb.pccomponentes.com/w-530-530/articles/29/298691/lg-k51s-3-64gb-dual-sim-titan-libre.jpg"),
    new Product(3, "Galaxi S21", "Samsung", 1309, 6.8, ["White", "Black"], "https://thumb.pccomponentes.com/w-530-530/articles/34/348326/1623-samsung-galaxy-s21-ultra-5g-256gb-plata-libre.jpg"),
    new Product(4, "iPhone 12", "Apple", 959, 6.1, ["Red", "Black"], "https://thumb.pccomponentes.com/w-530-530/articles/32/328931/1319-apple-iphone-12-128gb-product-rojo-libre.jpg"),
    new Product(5, "Poco X3", "Xiaomi", 229, 6.67, ["Grey", "Black"], "https://thumb.pccomponentes.com/w-530-530/articles/32/321341/1317-xiaomi-poco-x3-nfc-6-128gb-gris-sombra-libre.jpg"),
    new Product(6, "7 Pro", "Realme", 299, 6.4, ["Blue", "Black"], "https://thumb.pccomponentes.com/w-530-530/articles/32/323047/1210-realme-7-pro-8-128gb-azul-libre.jpg")
];
function getProducts() {
    return products;
}
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.post('/products', bodyParser.json(), function (req, res) {
    var pNew = new Product(products.length + 1, req.body.name, req.body.company, req.body.price, req.body.inches, req.body.colors, req.body.image);
    products.push(pNew);
    res.status(200).send({
        id: pNew.id,
        title: pNew.name,
        company: pNew.company,
        price: pNew.price,
        inches: pNew.inches,
        colors: pNew.colors,
        image: pNew.image
    });
});
app.get('/', function (req, res) {
    res.send('The URL of products is http://localhost:8000/products');
});
app.get('/products', function (req, res) {
    res.json(getProducts());
});
function getProductsById(productId) {
    var p;
    p = products.find(function (p) { return p.id == productId; });
    return p;
}
app.get('/products/:id', function (req, res) {
    res.json(getProductsById(parseInt(req.params.id)));
});
function updateProductsById(req, productId) {
    var p;
    p = products.find(function (p) { return p.id == productId; });
    var index = products.indexOf(p);
    p.name = req.body.name,
        p.company = req.body.company,
        p.price = req.body.price,
        p.inches = req.body.inches,
        p.colors = req.body.colors,
        p.image = req.body.image;
    products[index] = p;
    return p;
}
app.put('/products/:id', function (req, res) {
    res.json(updateProductsById(req, parseInt(req.params.id)));
    res.send('Got a UPDATE request at /user');
});
function deleteProductsById(productId) {
    var p;
    p = products.find(function (p) { return p.id == productId; });
    var index = products.indexOf(p);
    delete products[index];
    return p;
}
app.delete('/products/:id', function (req, res) {
    res.json(deleteProductsById(parseInt(req.params.id)));
    res.send('Got a DELETE request at /user');
});
var server = app.listen(8000, "localhost", function () {
    var _a = server.address(), address = _a.address, port = _a.port;
    console.log('Listening on %s %s', address, port);
});
