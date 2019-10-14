// Import serial port and parser module
var com = require("serialport");
var app = require('express')();

//Run express server on port 3000
var server = app.listen(3000);
var io = require('socket.io')(server);

//Set up serial port and parser modules
const SerialPort = require("serialport");
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort("/dev/cu.SLAB_USBtoUART", {
    baudRate: 9600
});

//Serve index.html when some make a request of the server
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

//Parser delimits data on newline 
const parser = port.pipe(new Readline({
    delimiter: "\r\n"
}));

//Log new data to console and emit as websocket
parser.on("data", function (data) {
    console.log(data);
    io.sockets.emit('data', data);
});

//Process incoming messages
io.on('connection', function (socket) {
    socket.on('data', function (msg) {
        console.log(msg.val);
        if (msg.val === 'red') {
            portWrite('R')
        }
        if (msg.val === 'green') {
            portWrite('G')
        }
        if (msg.val === 'blue') {
            portWrite('B')
        }
    });
});

//Pass messages to serial port
function portWrite(msg) {
    port.write(msg, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message)
        }
        console.log(msg + ' written')
    })
}

// Open errors will be emitted as an error event
port.on('error', function (err) {
    console.log('Error: ', err.message)
})