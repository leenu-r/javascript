let fruits = ["apple", "banana", "mango","carrot","pineapple"];

//destrcture and get the first 2 elements

let [apple, banana] = ["apple", "banana", "mango","carrot","pineapple"];
console.log("apple:"+apple)
console.log("banana:"+banana)
/*
apple:apple
banana:banana
*/

//destrcture and get the first 2 elements and the remaining elements into an array using REST operator

let [apple1,banana1, ...rest] = ["apple", "banana", "mango","carrot","pineapple"];
console.log(apple1)
console.log(banana1)
console.log(rest)
/*
apple:apple
banana:banana
apple
banana
[ 'mango', 'carrot', 'pineapple' ]
*/

//destrcture and skip the first 3 elements and the remaining elements into an array using REST operator

let [,,, ...rest1] = ["apple", "banana", "mango","carrot","pineapple"];
console.log(rest1)
/*
[ 'carrot', 'pineapple' ]
*/

//destrcture and skip the last 2 elements and the remaining elements into an array using REST operator
/*This is not possible beacuse, A rest element must be last in a destructuring pattern.ts(2462) */

//destrcture and get the 3rd element in an array.
let [,,third] = ["apple", "banana", "mango","carrot","pineapple"];
console.log("third:"+third)
/*
third:mango
*/

/*Using spread operator with Arrays */