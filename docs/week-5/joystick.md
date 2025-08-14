---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# The Joystick

A joystick module allows us to create interactive projects. Joysticks can provide input in the horizontal (x) and vertical (y) direction as well - just like a joystick on a games console. 

## How it works

A joystick essentially uses two potentiometers placed at right angles to each other.
- One measures movement along the x-axis.
- One measures movement along the y-axis.

Alongside this, a joystick usually has an integrated push button which we can use to take input from the user. When we move the joystick knob around, the potentiometers change their resistance, and this change in voltage is read by the Arduino's analog pins. 

## Constructing your circuit

Components required:
- 1x Joystick module
- Jumper wires
- Arduino board

:::info[Try it yourself]
<Tabs>
  <TabItem value="problem" label="Problem">
    Search up your joystick's datasheet (pinout) online. Then, try to build your circuit on the breadboard. You can use this pin layout to help:

    - VCC → 5V
    - GND → GND
    - VRx → X-axis analog output (connect to A0)
    - VRy → Y-axis analog output (connect to A1)
    - SW → Push button digital output (connect to D2) 
  </TabItem>
  <TabItem value="solution" label="Solution">
    Below is the equivalent circuit diagram for connecting a joystick to your Arduino board. Did you hook up your components correctly?

    <div class="img-center">![Joystick wiring diagram](img/joystick-wiring.png)</div>
    <br></br>
  </TabItem>
</Tabs>
:::

## Programming your joystick



## Assignment 

:::info Your Turn
1. 
:::

## Next Steps

This section includes links to help you dive deeper into the topics from this lesson. It's optional, so don't worry if you choose to skip it.

- 