/*Given a nested object data, 
write a function that counts the number of occurrences of each value in the object. 
The function should return an object where the keys are the unique values in the data object, 
and the values are the corresponding counts.*/

/*input: 
const data = {
    key1: 'apple',
    key2: 'banana',
    key3: 'apple',
    key4: {
      key5: 'orange',
      key6: 'apple',
      key7: 'banana'
    },
    key8: 'melon'
  };

 output:  
 {
    apple: 3,
    banana: 2,
    orange: 1,
    melon: 1
  } */

const data = {
  key1: "apple",
  key2: "banana",
  key3: "apple",
  key4: {
    key5: "orange",
    key6: "apple",
    key7: "banana",
  },
  key8: "melon",
};

const getUniqueValueCount = (data) => {
  let result = {};
  const traverseObject = (innerObject) => {
    for (const key in innerObject) {
      if (typeof innerObject[key] === "object") {
        traverseObject(innerObject[key]);
      } else {
        if (result[innerObject[key]]) {
          result[innerObject[key]] = result[innerObject[key]] + 1;
        } else {
          result[innerObject[key]] = 1;
        }
      }
    }
  };
  traverseObject(data);
  return result;
};

let countObject = getUniqueValueCount(data);
console.log(countObject) //{ apple: 3, banana: 2, orange: 1, melon: 1 }