const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');
const { setupWebSocket } = require('./websocket')
const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://ryanlemos:ryanlucaslemos6@cluster0-e5d48.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//entender requisições que tenham formato json
app.use(cors());

app.use(express.json());
app.use(routes);

server.listen(3333);