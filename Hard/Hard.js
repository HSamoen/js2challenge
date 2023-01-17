//HARD: Given the information below for Tom and Jerry. 
//Tom - 	height:  9in   	mass: 8 g
//Jerry - 	height: 10in 	mass: 45 g

//Compare the BMI (Body Mass Index) of Tom & Jerry using a standard 
//BMI formula: BMI = weight(kg) / [height (m)]^2



//--------------------------------------------------
//1. Store Tom & Jerry’s mass and height as variables.
let tomHeight= 0.2286; //converted 9in to meter
let tomMass= 0.008; //converted 8g to kg
let jerryHeight= 0.254; //converted 10in to meter
let jerryMass= 0.045; //converted 45g to kg

//---------------------------------------------------
//2. Calculate both their BMI’s. 

//calculated BMI using function
function bmi(height,mass){
        return mass/(height*height);
    }
tomBMI= bmi(tomHeight,tomMass);
// console.log(bmi(tomHeight,tomMass));

jerryBMI= bmi(jerryHeight,jerryMass);
// console.log(bmi(jerryHeight,jerryMass));

//---------------------------------------------------
//3. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry.
//4. Print a string to the console with the variable ( e.g. Is Tom’s BMI higher than Jerry’s? false).

  if(tomBMI > jerryBMI){
    result = 'True';
    console.log(`Is Tom's BMI higher than Jerry's? ${result}`);
  }
  else {
    result ='false'
    console.log(`Is Tom's BMI higher than Jerry's? ${result}`);
  }