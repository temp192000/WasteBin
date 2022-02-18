const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {
    const code = `Welcome to WasteBin!\n\nUse the commands in the top right corner to create a new file and share with others.`
    res.render('code-display', {code});
});

app.get('/new', (req, res) => {
    res.render('new');
})

app.listen('4321', () => {
    console.log("Server Started on http://localhost:4321");
})