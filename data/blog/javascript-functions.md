---
title: "Javascript Functions"
date: "May 4, 2022"
rTime: "3 min"
publishedAt: "https://abelwanyonyi.hashnode.dev/"
tags: ["javascript", "functions"]
exerpt: "Functions are one of building blocks of javascript.
In this article we will discuss what are functions and how to use them in your code"
cover_image: "https://abelwanyonyi.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Funsplash%2Fm_HRfLhgABo%2Fupload%2Fv1651663228478%2FlbFWGdyGu.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
---

Functions are one of building blocks of javascript.
In this article we will discuss what are functions and how to use them in your code

lets go!

### what are functions

A function is reusable block of code that performs a particular task. A function is declared by function keyword , name the a parenthesis. The parenthesis can take values known as parameters. A function must always return a value or else its value is undefined. To get the value of a function we invoke the function

### Function Declaration

A javascript function can be declared in the following ways,

    1. declaration function,
    2. expression function,
    3. anonymous function,
    4. arrow function

Here is an example of how a function is declared

```js
function fnName() {
  // code
}
fnName(); //invoking the fuction
```

Here is a function returning a value

```js
function addTwoNumbers() {
  let a = 10;
  let b = 12;

  return a + b;
}

addTwoNumbers();
```

In a function we can pass different data types as parameters, a parameter is like an additional information given to a function

```js
function multiply(a, b) {
  return a * b;
}

multiply(5, 2); // 10
```

#### default values

To provide a default value to a function, we set it the same way we set a value to a variable

```js
function Greeting(name, greeting = ‘hello’){}

```

When calling the function, we then can decide if we want to set the value for the situation

```js
Greeting(“Christopher”)  or  Greeting(“Christopher”, hi)
```

#### function as parameters

Parameters are values that you pass to a function during declaration Mostly happens when we don’t know when something is going to occur or complete but we have to perform an operation in response. Consider setTimeout

```js
function good(){
console.log(“good boy”)
}
setTimeout(good,3000)
```

#### anonymous function

Here is an example of an anonymous function

```js
setTimeout(function add() {
  let a = 10;
  let b = 12;

  return a + b;
}, 1000);
```

#### arrow function

They use a special indicator of => which looks like an arrow. By using => we avoid the function keyword

```js
setTimeout(() => {
  let a = 10;
  let b = 12;

  return a + b;
}, 1000);
```

#### when to use each strategy

If you are using a function more than once, create it as normal. If you will be using it for one location it’s generally best to use anonymous function.

#### conclusion

This article shows how to use functions as a beginner in javascript and all the ways of creating them

If you want to further your knowledge in functions you can do more practice on them. Thank you for reading that's all.
