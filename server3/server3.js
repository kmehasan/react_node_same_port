const express = require('express');
const app = express();
const port = 7013

app.get('/server3', (req, res) => res.send(`Hello World! from ${port}`));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));