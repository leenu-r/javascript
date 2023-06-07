/*Given an array of objects, each containing a name property, 
write a function that filters the array to return a new array containing only
the objects with names starting with a specific letter.
*/

/*input:
const arr = [
  { name: 'Apple' },
  { name: 'Banana' },
  { name: 'Orange' },
  { name: 'Melon' },
];
filterObjectArray(arr, 'A')
*/

/*output:
[{ name: 'Apple' }]
*/

let input = [
    { name: 'Apple' },
    { name: 'Banana' },
    { name: 'Orange' },
    { name: 'Melon' },
  ];

  const filteredArray1 = input.filter((obj) => "A" === (obj.name).substring(0,1));
  console.log(filteredArray1) //[ { name: 'Apple' } ]

  /*approach 2 */
  const filteredArray = input.filter((obj) => obj.name.startsWith("A"));
  console.log(filteredArray)