const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
    console.log("In product page")
    res.send('<h1>Products!</h1>')
});

app.use('/', (req, res, next) => {
    console.log("In the middleware 2")
    res.send('<h1>Hello!</h1>')
});

app.listen(3000);