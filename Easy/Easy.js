//EASY: Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name, last name and age of the 2nd student. 

//an array of objects (students) with their property names and values (ex: firstName: 'HSamoen')
//an index contains the students first name, last name and age.
//students are determined by the following index; 
//index [0] = student 1 
//index [1] = student 2
//index [2] = student 3
let students = [
    {
        firstName: 'HSamoen',
        lastName: 'Eban',
        age: 23,
    },
    {
        firstName: 'Justin',
        lastName: 'Eban',
        age: 14,
    },
    {
        firstName: 'Dylan',
        lastName: 'Eban',
        age: 12,
    }

]

//template literals are used for string interpolation to create strings by doing substitution of placeholders
//console.log with combination of backticks (`), string and ${object[index].propertyName}
//returns a combination of string with the returned property value from the array

console.log(`Hello, my name is ${students[1].firstName} ${students[1].lastName} and I'm ${students[1].age} years old.`);

//returns Hello, my name is Justin Eban and I'm 14 years old.