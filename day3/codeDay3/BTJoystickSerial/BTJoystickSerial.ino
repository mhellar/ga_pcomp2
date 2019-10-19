
#include <SoftwareSerial.h>// import the serial library
SoftwareSerial bleSerial(2, 3); // RX, TX

// These constants won't change.  They're used to give names
// to the pins used:
const int analogInPinx = A0;  // Analog input pin that the potentiometer is attached to
const int analogInPiny = A1;  // Analog input pin that the potentiometer is attached to
const int triggerPin = 7;  // Digital input pin that the button is attached to

int sensorValuex = 0;        // value read from the pot x
int sensorValuey = 0;        // value read from the pot y
int trigger = 0;        // value read from the pot y

void setup() {
  // initialize serial communications at 9600 bps:
  bleSerial.begin(9600);
  pinMode(7, INPUT_PULLUP);
}

void loop() {
  // read the analog in value:
  sensorValuex = analogRead(analogInPinx);
  delay(10);
  sensorValuey = analogRead(analogInPiny);
  trigger = digitalRead(triggerPin);

  // print the results to the serial monitor:
  bleSerial.print("xval,");
  bleSerial.print(sensorValuex);
  bleSerial.print(",yval,");
  bleSerial.print(sensorValuey);
  bleSerial.print(",trigger,");
  bleSerial.println(trigger);
  
  // wait 2 milliseconds before the next loop
  // for the analog-to-digital converter to settle
  // after the last reading:
  delay(10);
}


