/*
Problem: "Reverse Words in a String"

Given a string containing multiple words separated by spaces, write a function to reverse the order of words in the string. The reversed string should maintain the order of characters within each word.
*/

/*
const str = "Hello, world! How are you?";
console.log(reverseWords(str)); // Output: "you? are How world! Hello,"
*/

const str = "Hello, world! How are you?";
let strArray = str.split(" ");
strArray.reverse();
let newString = strArray.join(" ");
console.log(newString) // you? are How world! Hello,

/*
The time complexity of your code is determined by the operations you perform:

Splitting the string using str.split(" "): This operation has a time complexity of O(n), where n is the length of the string. It splits the string into an array of words.

Reversing the array using strArray.reverse(): This operation has a time complexity of O(n), where n is the number of elements in the array. It reverses the order of elements in the array.

Joining the array back into a string using strArray.join(" "): This operation has a time complexity of O(n), where n is the number of elements in the array. It concatenates the elements of the array into a string, separated by spaces.

Therefore, the overall time complexity of your code is O(n), where n is the length of the input string.
*/