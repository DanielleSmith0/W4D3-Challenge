// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
//find out how many open paranthesis there are in a string.

let stack = []

const balancePar = sample => {
    // let leftCount = (sample.match(//g))
    let stack = [];
    for(let i = 0; i < sample.length; i++){
        let x = sample[i];
        if (sample[i] === '('){
            stack.push(sample[i]);
        } 
        if (stack.length === 0)
            return false;
              
        switch (x){
        case ')':
        stack.pop();
    }
    return (stack.length === 0);
    }
}

if (balancePar(sample3)){
    console.log("Balanced")
}else {
    console.log("Not Balanced")};

// Didn't work

//Answer Walkthrough:

//this function will check a string for two things:
/*
    1. that there are an equal amount of open and closed parens
    2. ())(
        In other words, as I encounter each closing paren, there needs to be an available open paren
*/

function isBalanced(str) {
    let openCount = 0;
    let closedCount = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] === "(") {
            openCount++
        }else if(str[i] === ")") {
            closedCount++
        }

        if(closedCount > openCount) {
            return false
        }
    }

    if (openCount !== closedCount) {
        return false
    }

    return true
}

console.log(isBalanced(sample1));
console.log(isBalanced(sample2));
console.log(isBalanced(sample3));
console.log(isBalanced(sample4));

//This is more similar to how you originally planned. Try running something before second-guessing yourself.

//OR

// const balanced = (str) => {
//     let open = 0;
//     let close = 0;
  
//     str.split("").forEach(ltr => {
//       if(close > open) return false;
//       if(ltr === "(") open++;
//       else if(ltr === ")") close++;
//     });
  
//     return open === close;
//   };
  
//   console.log(balanced("(hello)"))