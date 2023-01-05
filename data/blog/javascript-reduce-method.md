---
title: "Javascript reduce function"
date: "Dec 24, 2022"
tags: ["javascript", "functions", "arrays", "reduce"]
exerpt: "The javascript reduce method is one of the most powerful javascript higher-order functions."
cover_image: "https://abelwanyonyi.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fstock%2Funsplash%2F6d295b44df8c30b893aa2e8fd4058056.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
---

The javascript reduce method is one of the most powerful javascript higher-order functions.
In this article, we are going to see how it works, when to use it and some examples of cool
pieces of stuff that the method can perform

### Things to know when using reduce

It is used on arrays, but cant be used in an object or a string unless converted to an array

1. returns a single value,

2. does not change the original array

3. does not execute a function for empty array elements

Here is the reduce syntax

```js
    array.reduce(function(total,currentValue,currentIndex,arr),initialValue)

```

The reduce function takes in a callback function to execute each element in the array.
The function is called with four parameters and the last two are optional.

#### total or accumulator

This is the value that results from the previous call of the callback function. If the initial value is not specified the value of the array is equal to zero

#### current value

This is the value of the current element.

#### current index

The index position of the current element

#### array

The array to be called by the reduce method

use case examples of the reduce method
Remember you don't have to return a single value, You can also reduce an array to a new array or an object

Sum up values in an array

```js
let array = [10, 10, 40];

let isReduced = array.reduce((total, currentIndex) => {
  return (total += currentIndex);
}, 0);

console.log(isReduced); //60
```

#### Sum up values in an array containing objects

```js
const prices = [{ price: 10 }, { price: 20 }, { price: 30 }];

const totalPrice = prices.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price,
  0
);

console.log(totalPrice); //60
```

#### Flatten an array

Here, The initial value is an empty array, we use the concat()
method to add the values to the initial array

```js
const isFlattened = [
  [1, 2, 3, 4],
  [5, 6, 7],
  [8, 9],
].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);

console.log(isFlattened); //[1,2,3,4,5,6,7,8,9]
```

Counting instances of values in an object
Get the number of each item in a collection

```js
const drinks = ["coke", "fanta", "pepsi", "coke", "pepsi"];

let reduced = drinks.reduce((allDrinks, currentDrink) => {
  if (!allDrinks[currentDrink]) {
    allDrinks[currentDrink] = 1;
  } else {
    allDrinks[currentDrink] = allDrinks[currentDrink] + 1;
  }

  return allDrinks;
}, {});

console.log(reduced); //{ coke: 2, fanta: 1, pepsi: 2 }
```

Remove duplicate elements from an array
There are convenient ways to do this using sets and array.from

```js
const drinks = ["coke", "fanta", "pepsi", "coke", "pepsi"];

let reduced = drinks.reduce((allDrinks, drink) => {
  if (!allDrinks.includes(drink)) {
    allDrinks.push(drink);
  }
  return allDrinks;
}, []);

console.log(reduced); //[ 'coke', 'fanta', 'pepsi' ]
```

Replace .filter().map()
Instead of using .filter().map() you can use reduce to enhance the readability of your code

```js
const nums = [-50, 10, 20, 0];

const doubledPositive = nums.reduce((accumulator, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    return [...accumulator, doubled];
  }
  return accumulator;
}, []);

console.log(doubledPositive); // [20,40]
```

### Conclusion

You can see how reduced is a powerful method, It can be used many cool stuffs. Also, there are instances where you will be required to provide an initialValue and instances in which you are not required.
