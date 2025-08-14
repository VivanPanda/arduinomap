---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Arrays, Strings and Random Numbers

Arrays, strings and generating random numbers are all programming concepts which will be handy to learn about and implement in our projects. 

## Arrays

An [array](https://docs.arduino.cc/language-reference/en/variables/data-types/array/) is essentially a collection of variables stored under one name. Arrays allow us to store multiple values of the same datatype without having to create a separate variable for each value. 

### Declaring arrays

We can declare an array using the following syntax:

```cpp
int myNums[4] = {15, 39, 23, 47}
```

- `int` - the members of the array are of data type `int`. 
- `myNums` - the name of the array.
- `[4]` - the array will have a length of `4`.
- `{15, 39, 23, 47}` - the values that are stored in the array. 

### Accessing arrays

We can access and manipulate values in an array by using its index (position in the array). When programming in Arduino, we must understand that arrays start counting from `0` - they are zero indexed. Therefore:

```cpp
Serial.println(myNums[0]); // Prints the first value: 15
Serial.println(myNums[3]); // Prints the fourth value: 47
```

:::tip
If we try and access an index that doesn't exist in the array, for example, `myNums[4]`, we will be faced with errors. 
:::

### Looping through an array

We can use a `for` loop to iterate through an array - a useful skill when working with arrays. 

```cpp
for (int i = 0; i < 4; i++) {
  Serial.println(myNums[i]); // prints each value in the array one by one
}
```

## Strings

A string is simply a sequence of characters. In fact, a string is an array of **characters**. We can work with strings to store and manipulate text. 

```cpp
String myGreeting = "Hello World";

char firstChar = myGreeting[0]; // 'H'
myGreeting[6] = 'w'; // changes 'W' to 'w'
```

### String functions

Strings have built-in functions to manipulate text. You can learn about many string functions [here](https://docs.arduino.cc/language-reference/en/variables/data-types/stringObject/). For instance:

```cpp
myGreeting.toUpperCase(); // converts to uppercase
myGreeting.toLowerCase(); // converts to lowercase
Serial.println(myGreeting.length()); // prints number of characters
```

## Random numbers

Random numbers allow us to bring variation into our projects by generating, well, *random numbers*. We can generate a random number within a given range using [`random()`](https://docs.arduino.cc/language-reference/en/functions/random-numbers/random/):

```cpp
int num = random(5, 15); // Returns 5-14
```

Unfortunately, it isn't that easy. By default, Arduino generates the same random numbers each time. To avoid this, we *seed* the generator using [`randomSeed()`](https://docs.arduino.cc/language-reference/en/functions/random-numbers/randomSeed/), making it generate a random number every time.

`randomSeed()` works by specifying a floating pin in order to return a fluctuating, unpredictable value.

```cpp
randomSeed(analogRead(A0));
```

:::tip Example
Therefore, we can write a simple program to print out a random number between 0 and 99. 

```cpp
void setup() {
  randomSeed(analogRead(A0));  // Use floating pin A0
}

void loop() {
  Serial.println(random(100)); // Prints a random number from 0–99
  delay(500);
}
```
:::

## Assignment 

:::info Your Turn
1. Create an array with 5 integers. Loop through this array to work out the mean / average of these integers. Print this to the serial monitor. 
:::

## Next Steps

This section includes links to help you dive deeper into the topics from this lesson. It's optional, so don't worry if you choose to skip it.

- [This is a great article to learn more about the string object.](https://www.tutorialspoint.com/arduino/arduino_string_object.htm)