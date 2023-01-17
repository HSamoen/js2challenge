//MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

//prompt users to "Enter a number from 1-12"
const input = prompt('Enter a number from 1-12'); 

//the output is determind by the following function:
//in the function body is an argument(using if/else if statements) to corresponds the values 1-12 with the name of the months
//if the user puts in a value not in the range of 1-12// "else" statement will alert the user that the value is 'less than 1 or greater than 12'
function getMonthName(month) {
    if (month ==1) {
    		return "January";
        } else if (month==2) {
    		return "February";
        } else if (month==3) {
    		return "March";
        } else if (month==4) {
    		return "April";
        } else if (month==5) {
    		return "May";
        } else if (month==6) {
            return "June";
        } else if (month==7) {
    		return "July";
        } else if (month==8) { 
    		return "August";
        } else if (month==9) {
    		return "September";
        } else if (month==10) {
    		return "October";
        } else if (month==11) {
    		return "November";
        } else if (month==12) {
    		return "December";
        } else  {
            alert ("less than 1 or greater than 12");
        } 
} 

//for an output: call out the function using console.log
//the argument used for the function would be the input value when users are prompted to 'Enter a number from 1-12'
  console.log(getMonthName(input));


//Additonal notes:
//Example: if a user puts in the value of "5" on the pop-up box
//Name of the month associated with the value of "5" will be logged in the console 
//"May" ; would be logged into the console

//But if the user inserts a value of "13"
//the user will get an alert that says "less than 1 or greater than 12" in the alertbox and "undefined" in the console since there is no value associated with that number