---
title: "Javascript Higher Order functions"
date: "Dec 24, 2022"
tags: ["javascript", "functions", "arrays"]
exerpt: "these are functions that take other functions as arguments or returns a function as a value. The function passed as an argument is called callback"
cover_image: "https://abelwanyonyi.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Funsplash%2Fvw3Ahg4x1tY%2Fupload%2Fv1645082136668%2FaBB_W-O1t.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
---

These are functions that take other functions as arguments or returns a function as a value. The function passed as an argument is called callback. The latest version of JavaScript introduced lots of built in in methods which can help us solve complicated problems which regular loops could not solve easily. In this article we will focus on forEach, map, filter, reduce and sort

### forEach

We use forEach only with Arrays. It takes a callback function with elements, index and Array itself as parameters. Index and Array are optional function is being called for every single item in the array example usage

```js
const numbers = [10, 20, 30, 40, 50];

numbers.forEach((num, index) => {
  console.log(num); // [10,20,30,40,50]
  console.log(index); // [0,1,2,3,4]
});
```

### Map

Iterates an array and modifies all of its elements then it returns a new array. It takes a callback function with element,index and array as parameters

```js
const numbers = [1, 2, 3, 4, 5];

const multiplyByTwo = numbers.map((number) => number * 2);

//[2,4,6,8,10]
```

you can return any data type that you want using the map metthod Here we return an object

```js
const numbers = [1, 2, 3, 4, 5];

const multiplyByTwoObj = numbers.map((number) => ({ value: number * 2 }));
//[{value: 2},{value: 4},{value: 6},{value: 8},{value: 10}]
```

### Filter

The filter Method on Arrays filters out items that satisfy the conditions given and returns a new array. It does not mutate the array on which it is called

```js
const numbers = [2, 3, -6, -5, 4];

const positiveNumbers = numbers.filter((number) => number > 0);

//[2,3,4]
```

```js
const numbers = [2, 3, -6, -5, 4];

const negativeNumbers = numbers.filter((number) => number < 0);

//[-6,-5]
```

### Reduce

The reduce method takes a callback function. The callback function takes current and optional initial value as parameters and returns a single value. An initial value is declared for the accumulator and if it is not declared, by default the accumulator will take the first value of the array and if the array is empty JavaScript throws an error

```js
arr.reduce((acc, cur) => {
  //your code
  return;
}, initialValue);
```

```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
//15
```

### Sort

The sort method arranges an array either in ascending or descending order. It sorts values as string thus this works well for string arrays and not number array. To avoid this we use a compare callback inside the sort method, which return a negative, zero or positive

```js
const names = ["Abel", "Ken", "John"];
names.sort(); //['Abel','John','Ken']

const numbers = [1, 3, 2, 5, 7, 4];

numbers.sort((a, b) => {
  return a - b;
}); //[1,2,3,4,5,7]
```

```js
numbers.sort((a, b) => {
  return b - a;
}); //[7,5,4,3,2,1]
```

### Conclusion

There are still more JavaScript higher order function that I haven't mentioned like Some, Every and so on. These higher order functions helps to solve complex problems which it would have been hard to implement using regular loops.

### References

MDN
