//create new johnny-five object and board
var five = require("johnny-five"),
    board, lcd;
board = new five.Board();

//When the board is ready
board.on("ready", function() {

    //create a new LCD object
    lcd = new five.LCD({
        // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
        // Arduino pin # 12  11   5   4   3   2
        pins: [12, 11, 5, 4, 3, 2],
        backlight: 6,
        rows: 2,
        cols: 16
    });

    lcd.print("Bleep bloop");

});