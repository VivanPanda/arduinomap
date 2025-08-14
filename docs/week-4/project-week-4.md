---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Project: Reaction Speed Game

Projects are intended to consolidate the knowledge you have absorbed in previous lessons. This one will help you apply what you've learned about push buttons, servo motors and LEDs. 

In this project, you will create a two-player reaction speed game. The game will test who is faster at pressing a button when an LED turns on. A servo motor points in the winner's direction.

Requirements: 
- Build a circuit with a servo motor, two buttons and an LED. 
- Program your LED to make it turn on after a random delay using the `random()` function. This is to eliminate any bias in the reaction speed test.
- The first player to press their button after the LED turns on wins. The servo motor has to be programmed to point to them.  
- Ensure that the servo sweeps back to the neutral position before each new round. 

## Assignment 

:::info Project

**Step 1: Planning**

1. Think about the components you will need for this project and start planning how these components will fit together in a circuit. 
2. Draw up a schematic using a tool like [`Fritzing`](https://fritzing.org/) or by hand, if you prefer. 

**Step 2: Building your circuit**

1. Gather all the components you will need for this project. 
2. Build the circuit using your breadboard, jumper wires and the components you would have prepared earlier. 

**Step 3: Programming**

1. Declare all the variables you will need to use in this program. Try to use variables whenever it's possible. 
2. Write your program using the requirements above. Remember to use the `Servo` library and use the `random()` function. 
3. Upload your code, debug, and repeat until you have a working program!

**Challenge**

1. Keep a score for both players and display it on the serial monitor. 
2. Add a buzzer that plays a melody for the winning player. 
:::

## Stuck?

If you get stuck, don't worry! There are a few helpful ways to troubleshoot and understand the problem. 

- Use your serial monitor to debug - it's a very helpful tool!
- Refer to official documentation or guides such as the [Arduino Docs](https://docs.arduino.cc/).
- Search the problem online. If your console reports an error, simply copy paste it online. It's likely someone else had the same issue as you. 
- Ask in forums and online communities. Good places to ask for help are:
    - [Arduino Forum](https://forum.arduino.cc/)
    - [Arduino Discord Server](https://support.arduino.cc/hc/en-us/articles/4405329164178-Join-the-official-Arduino-Discord-server)