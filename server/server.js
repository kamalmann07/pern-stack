require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT;

app.use((req, res, next) => {
    console.log("Our Middleware ran");
    next();
});

app.get('/api/v1/getRestrauants', (req, res) => {
    res.json({'test messahe': 1});
});

// get all restrauants
app.get('/api/v1/getRestrauants/:id', (req, res) => {
    console.log(req);
})

// create a restraunat
app.post('/api/v1/restrauants', (req, res) => {
    res.json({'test messahe': 1});
});

// get a restrauant
app.listen(port, () => {
    console.log('app is running.. at ' + port);
});