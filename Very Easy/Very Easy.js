//VERY EASY: Write a function named min that takes two arguments and returns their minimum.

//function called min with parameters (num1,num2)
//in the function body are conditional statements; if/else statement executes a block of code if a specified condition is true and return statements specifies a value to be returned
function min(num1,num2) {
    if (num1 < num2)
    return num1;
    else
    return num2;
}

//call out function min()
//replace parameters (num1,num2) with arguments (0,1) or (1,0)

console.log(min(0,1)); //returns 0
console.log(min(1,0)); //returns 0