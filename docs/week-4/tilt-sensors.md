---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tilt Sensors

Tilt sensors, or tilt switches, are simple components that detect tilt or orientation. They are simpler to use as compared to accelerometers, which makes them a quick and easy addition to our Arduino projects.

## How it works

Tilt sensors usually have a tiny metal ball inside which moves around. When the sensor is level, the ball rests in a position where there is no connection between the internal contacts. When the sensor is tilted past a certain angle, the ball rolls and connects the contacts, closing the circuit.

This ON/OFF behavior lets the sensor act like a simple switch. 

## Constructing your circuit

Components required:
- 1x Tilt switch
- Breadboard
- Your Arduino board
- Jumper wires

:::info[Try it yourself]
<Tabs>
  <TabItem value="problem" label="Problem">
    Search up your tilt sensor's datasheet online. Datasheets will be your friend when learning about new components since they provide all the necessary information you will need to construct your circuit. Try building your circuit using this schematic:
    
    <div class="img-center">![Tilt switch schematic](img/tilt-switch-schematic.png)</div>
    <br></br>
  </TabItem>
  <TabItem value="solution" label="Solution">
    Below is the equivalent circuit diagram for this schematic. Did you hook up your components correctly?

    <div class="img-center">![Tilt switch wiring diagram](img/tilt-switch-wiring-diagram.png)</div>
    <br></br>
  </TabItem>
</Tabs>
:::

## Programming your tilt sensor

Just like with the push button, we can use Arduino's internal pull-up resistor to keep the input `HIGH` when the sensor is not tilted. We can program our tilt sensor to read the value using `digitalRead()` as shown below:

```cpp
int tiltPin = 12;

void setup() {
  pinMode(tiltPin, INPUT_PULLUP);  // Enable internal pull-up resistor
  Serial.begin(9600);
}

void loop() {
  int tiltState = digitalRead(tiltPin);

  if (tiltState == LOW) {
    Serial.println("Tilt detected!");
  } else {
    Serial.println("No tilt");
  }
  delay(200);
}
```

:::tip
The sensor output is `LOW` when tilted because we have used a pull-up resistor. This means that the pressing connects the pin to `GND`.
:::

## Assignment 

:::info Your Turn
1. Wire up a circuit that contains a tilt sensor and a buzzer of your choice. Use the Arduino's in-built pull-up resistor and program your components to sound the buzzer when the tilt sensor detects a tilt. This can be useful in a chair-tilt detection system. For instance, you can place your circuit underneath a chair (within an enclosure), and you will be warned if you tilt your chair whilst sitting. 
:::

## Next Steps

This section includes links to help you dive deeper into the topics from this lesson. It's optional, so don't worry if you choose to skip it.

- You can watch [this video](https://www.youtube.com/watch?v=QZWmrRkvHJk) to learn more about how tilt switches work.  