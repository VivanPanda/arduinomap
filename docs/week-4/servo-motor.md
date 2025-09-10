---
sidebar_position: 4
difficulty: beginner
time: 30m
prereqs: ['Using Potentiometers']
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import LessonMeta from '@site/src/components/LessonMeta';

# Understanding Servo Motors

<LessonMeta {...frontMatter} />

A servo motor is a type of motor which can be used to introduce motion into our projects. They allow us to produce precise movements and hence control the position of objects.

## How it works

Servo motors usually have an arm which can turn between 0 and 180 degress. We can program our servo using the Arduino IDE to make it turn to a specified angle. 

Servos are "all in one", which means they contain the motor, motor driver, etc all in one. This means that we do not need to connect additional hardware to them.

## Constructing your circuit

Components required:
- 1x 5V Servo motor
- Arduino board
- Jumper wires

:::info[Try it yourself]
<Tabs>
  <TabItem value="problem" label="Problem">
    Search up your servo motor's datasheet online. Datasheets will be your friend when learning about new components since they provide all the necessary information you will need to construct your circuit. Try building your circuit using this schematic:
    
    <div class="img-center">![Servo schematic](img/servo-schematic.png)</div>
    <br></br>
  </TabItem>
  <TabItem value="solution" label="Solution">
    Below is the equivalent circuit diagram for this schematic. Did you hook up your components correctly?

    <div class="img-center">![Servo wiring diagram](img/servo-wiring-diagram.png)</div>
    <br></br>
  </TabItem>
</Tabs>
:::

## Programming your servo motor

To program your servo motor to start moving, we need to learn how to include a library. To include the Servo motor library, we use:

```cpp
#include <Servo.h>
```

This inclusion allows us to use the library's functions in our sketch. We can then program our servo to move using these functions:

```cpp
#include <Servo.h>

Servo myServo; // Creates a servo object called myServo

void setup() {
  myServo.attach(9); // Connects servo to pin 9
}

void loop() {
  myServo.write(90); // Moves servo to 90 degrees
  delay(1000);       // Waits for 1 second
  myServo.write(0);  // Moves back to 0 degrees
}
```

:::info[Try it yourself]
<Tabs>
  <TabItem value="problem" label="Problem">
    Try modifying your code to make your servo motor ***sweep***. This means, to make your servo move back and forth smoothly from 0 to 180 degrees. 
  </TabItem>
  <TabItem value="solution" label="Solution">
    ```cpp
    #include <Servo.h>

    Servo myServo;

    void setup() {
      myServo.attach(9);
    }

    void loop() {
      // Move from 0° to 180°
      for (int pos = 0; pos <= 180; pos++) {
        myServo.write(pos);
        delay(15);
      }

      // Move from 180° back to 0°
      for (int pos = 180; pos >= 0; pos--) {
        myServo.write(pos);
        delay(15);
      }
    }
    ```
  </TabItem>
</Tabs>
:::

## Assignment 

:::info Your Turn
1. Connect a potentiometer and a servo motor to your Arduino. Use the potentiometer to control the angle of your servo motor. You can do this by *reading* the potentiometer's values and then using the `map()` function we used earlier. Feel free to take a look back at previous lessons if you've forgotten how a component works. 
:::

## Next Steps

This section includes links to help you dive deeper into the topics from this lesson. It's optional, so don't worry if you choose to skip it.

- [Servo Motor Basics](https://docs.arduino.cc/learn/electronics/servo-motors/) from the Arduino Docs is a great read.
