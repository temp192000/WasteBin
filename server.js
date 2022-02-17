const express = require('express');
const app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('code-display');
});

app.listen('4321', () => {
    console.log("Server Started on http://localhost:4321")
})