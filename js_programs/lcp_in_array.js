/* Find the longest common Prefix in an array od strings*/
let input =["geeksforgeeks","geeks", "geek","geezer"];

function longestCommonPrefix(input){

    input.sort(); //[ 'geek', 'geeks', 'geeksforgeeks', 'geezer' ]
    let firstWord = input[0]; //geek
    let lastWord = input[input.length -1] //geezer
    console.log(firstWord)
    console.log(lastWord)

    //Find the minium length from first and last string
    let minLength = Math.min(firstWord.length,lastWord.length) // 4

    let i=0;
    while(i< minLength && firstWord[i] ===  lastWord[i] )
    {
        i++;
    }
   console.log(i) // i =3

  let prefix = firstWord.substring(0,i)
  return prefix;
}

let prefix = longestCommonPrefix(input)
console.log(prefix) // gee