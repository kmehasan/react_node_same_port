const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 7011

// app.use(bodyParser.json());
app.use(bodyParser.json());
app.get('/server1', (req, res) => res.send(`Hello World! from ${port}`));
app.post('/server1/data', (req, res) => {
    console.log(req.body)
    res.send(`Hello World! from ${port} ${req.body['test']}`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));