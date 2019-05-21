// import dependencies
const express = require('express');
const parser = require('body-parser');
const path = require('path');
const app = express();

// define constants
const PORT = 30000;
const PUBLIC_DIR = path.join(__dirname + '/../public');

// set default server settings
app.use(express.static(PUBLIC_DIR));
app.use(parser.json());

// define REST methods
app.get('/error', (req, res) => {
    throw new Error('Error!');
});

app.post('/email', (request, response) => {
    let { name, email, message } = request.body;
    mailManager.sendMail(name, email, message)
        .then(() => {
            response.end('Data sent!');
        })
        .catch((err) => {
            console.log(err);
            response.end('Error!');
        });
});

app.listen(PORT);
console.log(`Listening on port ${PORT}`);