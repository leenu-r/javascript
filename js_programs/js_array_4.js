/*
remove all the duplicate elemnets from an array
input : [1,2,4,5,4,3,2,7]
output : [1,5,3,7]
*/

let input = [1,2,4,5,4,3,2,7]
const removeDuplicates = (input) =>{

    let newArray = input.filter(element => input.indexOf(element) === input.lastIndexOf(element))
    return newArray;
}
console.log(removeDuplicates(input))