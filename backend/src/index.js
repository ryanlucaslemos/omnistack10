const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://ryanlemos:ryanlucaslemos6@cluster0-e5d48.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//entender requisições que tenham formato json
app.use(express.json());

app.use(routes);

app.listen(3333);