/*

Sure! Here's a medium complexity problem for you:

Problem: "Valid Parentheses"

Given a string containing only parentheses characters ((, ), {, }, [, ]), write a function to determine if the input string is valid. The string is considered valid if it satisfies the following criteria:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
An empty string is also considered valid.
*/

/*
isValidParentheses("()"); // Output: true
isValidParentheses("()[]{}"); // Output: true
isValidParentheses("([{}])"); // Output: true
isValidParentheses("({[}])"); // Output: false
isValidParentheses("({[})"); // Output: false
isValidParentheses(""); // Output: true
*/

const isValidParentheses = (input) => {
  let inputStack = [];
  for (let i = 0; i < input.length; i++) {
    // console.log("input i ", input[i]);
    if (input[i] === "[" || input[i] === "(" || input[i] === "{") {
      inputStack.push(input[i]);
    } else {
      if (inputStack.length === 0) return false;
      let top = inputStack.pop();
    //   console.log("top", top);
      if (
        (input[i] === "]" && top !== "[") ||
        (input[i] === "}" && top !== "{") ||
        (input[i] === ")" && top !== "(")
      ) {
        return false;
      }
    }
  }
  return inputStack.length === 0;

};

let result = isValidParentheses("({[})");
console.log(result);

/*

The time complexity of the isValidParentheses function is O(n), where n is the length of the input string.

In the function, we iterate through each character of the input string exactly once. Within each iteration, the operations performed are constant time operations, such as pushing or popping from the stack, and checking conditions. Therefore, the overall time complexity is linear in terms of the input size.
*/
