/* Split an array into chunks of given size 
input : [1,2,3,4,5,6,7,8,9], 2
output : [[1,2],[3,4],[5,6],[7,8],[9]]
*/

const splitArrayintoChunks = (input, size) =>{
let newArray = [];
let start =0;

while(start < input.length)
{
    let subArray = input.slice(start,start+size);
    newArray.push(subArray);
    start = start+size;
}
return newArray

}

let inputArray = [1,2,3,4,5,6,7,8,9]
let size = 4;

let splittedArray = splitArrayintoChunks(inputArray, size)
console.log(splittedArray) [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9 ] ]

/*
The time complexity of the splitArrayIntoChunks function is O(n), 
where n is the length of the input array.

In the while loop, we iterate over the input array and slice it into subarrays of size "size". 
The number of iterations in the loop is determined by the length of the input array divided by 
the chunk size (n/size). Since the loop runs in proportion to the number of elements in the input 
array, the time complexity is linear, or O(n).

Note that the time complexity may vary depending on the implementation and specific operations used. 
In this case, the slice method has a time complexity of O(k), where k is the number of elements 
in the subarray. However, since the size of the subarray is fixed (equal to size), we can consider 
it as a constant factor. Therefore, the dominant factor in the time complexity is the iteration over 
the input array, resulting in O(n) overall.
*/