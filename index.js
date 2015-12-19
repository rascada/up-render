'use strict';

let path = require('path');
let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
let fRender = require('front-render/render');

server.listen(7070, function() {
  fRender.log(`front-render v${fRender.version}`);
  fRender.log(`Serwer uruchomiony localhost:${server.address().port}`);
});

app.use(express.static('dist'));

io.on('connection', function(socket) {
  fRender.log(`nawiązano połączenie ${socket.id}`);
});
