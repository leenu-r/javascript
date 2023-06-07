/*Summing Object Array Values
Given an array of objects, each containing a numeric value property, 
write a function that returns the sum of all the value properties in the array. */

/*input :
const arr = [
  { value: 10 },
  { value: 20 },
  { value: 30 },
];
*/

/*output:

60
*/

let input = [
    { value: 10 },
    { value: 20 },
    { value: 30 },
  ];

  const sum = input.reduce( (accumulator, obj) => accumulator+obj.value ,0)
  console.log(sum)

  /* please refer this: 
  https://reqbin.com/code/javascript/m81eb1ms/javascript-sum-array-example#:~:text=To%20find%20the%20sum%20of%20array%20elements%20in%20JavaScript%2C%20you,removed%20or%20missing%20array%20elements.
  */