var SerialPort = require("serialport");
var Readline = SerialPort.parsers.Readline;

const fs = require("fs");
let writeStream = fs.createWriteStream("datalog.txt");

var serialPort = new SerialPort("/dev/tty.usbmodem1421", {
  baudRate: 9600
});

var parser = new Readline();
serialPort.pipe(parser);
parser.on("data", function(data) {
  console.log("data received: " + data);
  writeStream.write(data);
});

serialPort.on("open", function() {
  console.log("Communication is on!");
});
