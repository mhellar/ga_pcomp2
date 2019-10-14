//import serialport module
var SerialPort = require("serialport");
var Readline = SerialPort.parsers.Readline;

//set parameters for the serialport
var serialPort = new SerialPort("/dev/tty.usbmodem1421", {
  baudRate: 9600
});

//the readline parser will delimit the data on a newline
var parser = new Readline();
serialPort.pipe(parser);

//send a message when the serialport connects successfully
serialPort.on("open", function() {
  console.log("Communication is on!");
});

//when data is recieved log it to the console
parser.on("data", function(data) {
  console.log("data received: " + data);
});
