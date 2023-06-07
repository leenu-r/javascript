/* Check if an array is palindrome or not

input : [1,2,3,2,1]
output: true
*/

let input = [1,2,3,2,1];

const isPalindrome =(input) =>{
    let start = 0;
    let end = input.length-1;

    while(start<end)
    {
        if(input[start] !== input[end])
        {
            return false;
        }
        start++;
        end --;
    }

    return true;

}

console.log(isPalindrome(input)) //true