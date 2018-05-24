const express = require('express');
const path = require('path');
const parser = require('body-parser');
const app = express();

app.use(parser.json());
app.use(express.static(path.join(__dirname, '/public')));

app.listen(1337, () => {
  console.log(path.join(__dirname, '/public'));
  console.log(`listening on port 1337`);
});

app.get('/transaction/:transactionid', (req, res) => {
  //search db for transaction & send it back to client
})


app.post('/transaction/:transactionid', (req, res) => {
  //insert transaction into db
})

app.get('/transaction', (req, res) => {
  //send back the highest transaction id to the client
})
