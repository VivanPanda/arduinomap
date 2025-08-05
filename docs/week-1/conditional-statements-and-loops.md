---
sidebar_position: 1
---

# Conditional Statements and Loops

This lesson will introduce you to more programming structures which are essential to learn about.

## Conditional statements

Conditional statements allow us to perform different actions depending on whether a specific condition is true or false (a Boolean value). They allow our projects to involve decision-making and follow different paths of execution depending on a condition. For example, we can use conditional statements to turn an LED off **if** it's dark. We'll explore this later when we learn about the LDR.

There are a few main types of conditional statements we can use.

### `if` statements

[`if`](https://docs.arduino.cc/language-reference/en/structure/control-structure/if/) statements are used to execute some code if a certain condition is true:

```cpp
if (condition) {
    // Do something
}
```

### `if...else` statements

[`if...else`](https://docs.arduino.cc/language-reference/en/structure/control-structure/else/) statements allow us to execute an alternate block of code if a condition is false:

```cpp
if (condition) {
    // Do something
} else {
    // Do something else
}
```

### `if...else...if` statements

[`if...else...if`](https://docs.arduino.cc/language-reference/en/structure/control-structure/else/) statements allow us to check through multiple conditions.

```cpp
if (condition1) {
    // Do something
} else if (condition2) {
    // Do something else
} else {
    // Do something else if both condition1 and condition2 are false
}
```

## Loops

Loops can be used to execute certain blocks of code multiple times. Each cycle of a loop is known as an iteration. 

## `for` loops

A [`for`](https://docs.arduino.cc/language-reference/en/structure/control-structure/for/) loop is used when the number of iterations are known. This makes a `for` loop a *count-controlled loop*, since it will execute a block of code for a specific number of times. 

```cpp
for (initialization; condition; increment) {
      // statement(s);
}

for (int i = 0; i < 10; i++) {
    // Do something 10 times
}
```

:::tip Example
Blink an LED 5 times.

```cpp
for (int i = 0; i < 5; i++) {
  digitalWrite(2, HIGH);
  delay(300);
  digitalWrite(2, LOW);
  delay(300);
}
```
:::

## `while` loops

A [`while`](https://docs.arduino.cc/language-reference/en/structure/control-structure/while/) loop is a *pre-condition loop*. This means it checks for a condition before iterating, and the number of iterations is unknown beforehand. 

```cpp
while (condition) {
    // Do something
}
```

:::tip
Be careful! If the condition being checked is always true, the loop will run forever. For example:

```cpp
int blink = 1;

while (blink == 1) {
  digitalWrite(2, HIGH);
  delay(500);
  digitalWrite(2, LOW);
  delay(500);
}
```
:::

## Assignment 

:::info Your Turn
1. Read [this article](https://www.circuitbasics.com/how-to-use-conditional-statements-in-arduino-programming/) to familiarse yourself with using conditional statements.
2. Watch [this video](https://www.youtube.com/watch?v=HXO6pZ9Hih4) to understand loops better.
::: 

## Next Steps

This section includes links to help you dive deeper into the topics from this lesson. It's optional, so don't worry if you choose to skip it.

- [This article](https://ihechikara.com/posts/how-to-use-loops-in-arduino/#how-to-use-a-do-while-loop-in-arduino) covers the `do...while` looping structure.