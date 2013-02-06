var scr = document.head.appendChild(document.createElement('script'));
scr.src = '{abs}/socket.io/socket.io.js';
scr.onload = function() {
    var socket = io.connect('http://localhost:3001');
    socket.on('receive', function (data) {
        happen.keydown(document, {
            keyCode: (data.dir === 1) ? 39 : 37
        });
    });
};
