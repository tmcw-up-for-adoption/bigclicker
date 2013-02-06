var app = require('express')(),
    server = require('http').createServer(app),
    fs = require('fs'),
    io = require('socket.io').listen(server);

server.listen(3001);

var happen = fs.readFileSync(__dirname + '/happen.js', 'utf8');

function host(req) {
    return '//' + req.host + ':' + 3001;
}

app.get('/', function(req, res) {
  fs.readFile(__dirname + '/index.html', 'utf8', function(err, f) {
      res.send(f.replace('{abs}', host(req)));
  });
});

app.get('/anim.gif', function(req, res) {
    res.sendfile(__dirname + '/anim.gif');
});

io.sockets.on('connection', function(socket) {
    socket.on('send', function(data) {
        socket.broadcast.emit('receive', data);
    });
});
