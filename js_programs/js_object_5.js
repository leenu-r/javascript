/*
Sorting Object Array
Given an array of objects, each containing a price property, write a function that sorts the array in ascending order based on the price property.
*/

/*
/*input:
const arr = [
  { price: 30 },
  { price: 10 },
  { price: 50 },
  { price: 20 },
];
*/
/* output:
[{ price: 10 }, { price: 20 }, { price: 30 }, { price: 50 }]
*/

let input = [
    { price: 30 },
    { price: 10 },
    { price: 50 },
    { price: 20 },
  ];
input.sort((obj1, obj2) => obj1.price - obj2.price)
console.log(input); //[ { price: 10 }, { price: 20 }, { price: 30 }, { price: 50 } ]