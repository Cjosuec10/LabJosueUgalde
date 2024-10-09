// npm install para descargar los paquetes...

// librerias
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

// root: presentar html
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// escuchar una conexion por socket
io.on('connection', function(socket){
  // si se escucha "chat message"
  socket.on('Evento-Mensaje-Server', function(msg){

    // validar  mensaje. cambiado para apuntar a carpeta unalib
    var validMsg = require('./unalib/index').validateMessage(msg);
    
    // volvemos a emitir el mensaje validado
    io.emit('Evento-Mensaje-Server', validMsg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
