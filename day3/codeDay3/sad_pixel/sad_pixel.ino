#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
  #include <avr/power.h>
#endif

const int PIN = 9;

// How many NeoPixels are attached to the Arduino?
const int NUMPIXELS = 36;

Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

int delayval = 500; // delay for half a second

void setup() {
  pixels.begin(); // This initializes the NeoPixel library.
}

void loop() {
    pixels.setPixelColor(3, pixels.Color(0,150,0)); // Moderately bright green color on pixel 3
    pixels.show(); // This sends the updated pixel color to the hardware.
}
