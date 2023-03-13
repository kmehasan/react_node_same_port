const express = require('express');
const app = express();
const port = 7012

app.get('/server2', (req, res) => res.send(`Hello World! from ${port}`));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));