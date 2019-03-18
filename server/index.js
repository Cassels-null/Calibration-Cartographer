
const scribe = require('./scribe');
const parser = require('body-parser');
const express = require('express');
const app = express();
const port = 1337;

app.listen(port, () => console.log(`listening on port ${port}!`));
app.use(parser.json());

app.get('/', (req, res) => res.send('Hello World!'));

console.log(scribe);
console.log(scribe);

app.post('/', scribe.record);