/*
Problem: "Array Intersection"
Given two arrays, write a function that returns an array containing the intersection 
of the two arrays. The intersection is defined as the common elements that appear in both arrays, 
without any duplicates. The order of elements in the resulting array should be the same 
as the order in which they appear in the first array.
*/

/*
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];

console.log(findIntersection(arr1, arr2)); // Output: [4, 5]
*/

const arr1 = [1, 2,3,3,333, 3, 4, 5];
const arr2 = [1,4, 5, 6, 7, 8];

const findIntersection = (arr1, arr2) =>{
    let uniqueSet1 = new Set([...arr1])
    let uniqueArray1 = [...uniqueSet1];
    console.log(uniqueArray1)
 
    let intersectionElements = uniqueArray1.filter(element =>  arr2.includes(element))
    return intersectionElements;

}

console.log(findIntersection(arr1,arr2));