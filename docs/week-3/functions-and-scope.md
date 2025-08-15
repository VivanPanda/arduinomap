---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Functions and Scope

Functions are reusable blocks of code which are fundamental for making your sketches more maintainable and readable. Essentially, a function is a block of code which performs a specific task. 

:::tip
You have been using functions all along! The `setup()` and `loop()` commands are functions as well.

```cpp
void setup() {
  // This runs once at the beginning
}

void loop() {
  // This repeats forever
}
```
:::

## Using functions

We can use functions by defining them using a specific syntax and then calling them as required.  

### Defining a function

```cpp
returnType functionName(parameter1Type parameter1Name, parameter2Type parameter2Name, ...) {
    // Code to be executed
    return value; // Optional, if returnType is not void
}
```

In the syntax above, `returnType` refers to the data type of the value which is to be returned by the function. If no value is to be returned, the `returnType` is `void`. For instance, we can program our own function to turn on an LED:

```cpp
void turnOnLED() {
  digitalWrite(2, HIGH);
}
```

### Calling a function

We can then call a function using the following syntax:

```cpp
functionName(argument1, argument2);

turnOnLED(); // calls the turnOnLED() function
```

## Scope

All the variables we create have a property known as the **scope**. This means that there are two different types of scopes for variables:

- *Global* variables are declared outside all functions and can be used anywhere in your program
- *Local* variables are delcared inside functions, and these variables can only be used within that function. 

For instance, consider this sketch:

```cpp
int ledPin = 13; // Global variable

void setup() {
    pinMode(ledPin, OUTPUT);
}

void loop() {
  int delayTime = 500; // Local variable
  digitalWrite(ledPin, HIGH);
  delay(delayTime);
  digitalWrite(ledPin, LOW);
  delay(delayTime);
}
```

## Assignment 

:::info Your Turn
1. Create two functions:
    - `dotBlink()` - turns an LED on for 200ms, then off for 200ms.
    - `dashBlink()` - turns an LED on for 600ms, then off for 200ms.
2. Use these functions blink out your name in Morse code using an LED. For example, if your name is `John`, convert each letter to Morse code using [this chart](https://rsgb.org/main/files/2012/10/Morse_Code_Sheet_01.pdf) and blink it out using combinations of the functions you created. 
::: 

## Next Steps

This section includes links to help you dive deeper into the topics from this lesson. It's optional, so don't worry if you choose to skip it.

- [Check out the official documentation on functions](https://docs.arduino.cc/learn/programming/functions/). 