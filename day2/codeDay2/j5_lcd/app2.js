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

    // Tell the LCD you will use these characters:
    lcd.useChar("check");
    lcd.useChar("heart");
    lcd.useChar("duck");

    // Line 1: Hi rmurphey & hgstrp!
    lcd.clear().print("Hi Class!");
    lcd.cursor(1, 0);

    // Line 2: I <3 johnny-five
    // lcd.print("I").write(7).print(" johnny-five");
    // can now be written as:
    lcd.print("I :heart: johnny-five");

    this.wait(3000, function() {
        lcd.clear().cursor(0, 0).print("I :check::heart: 2 :duck: :)");
    });


});