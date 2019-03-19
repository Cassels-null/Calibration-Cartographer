
const scribe = require('./scribe');
const parser = require('body-parser');
const express = require('express');
const app = express();
const port = 1337;

app.listen(port, () => console.log(`listening on port ${port}!`));
app.use(parser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => res.send('Hello World!'));

console.log(scribe);
console.log(scribe);


app.get('/read', scribe.read);

app.post('/make', scribe.record);

app.post('/score', scribe.record);