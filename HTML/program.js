// Number -> Any value numerical from Positive, Negative, Fractional, Decimal

// Syntax To create a Variable (Temp Storage)
// var variable_name = value;

// variable_name -> Any valid text, it should contains a-z, A-Z, 0-9, _, $

var score = 400;
console.log(score);

// String -> Any text value which is typed inside '' or ""

var email = "karthick@gmail.com";
console.log(email);

// Boolean -> Either true or false

var result_status = true;
console.log(result_status);

var future_value;
console.log(future_value);

// Object -> It is collection of Key and Values

// var variable_name = {
//   key1 : value,
//   key2 : value
// }

// key -> Similar to variable_name -> it should contains a-z, A-Z, 0-9, _, $
// value -> Number, String, Boolean, Object, Array, Function

var studentInfo = {
  first_name : "Karthick",
  last_name : "kumar",
  father_name : "Xyz",
  age : 27,
  status : true
}

console.log(studentInfo);

// Object -> 4 operation = read value, insert new value, edit exisiting value, delete existing value. 

// To Read a Value -> object_variable_name.key;

console.log(studentInfo.first_name);
console.log(studentInfo.age);

// To Insert a new Value -> object_variable_name.newKey = value;

studentInfo.blood_group = "A +ve";

// To Edit/Updated an exisiting value -> object_variable_name.existing_key = new_value;

studentInfo.father_name = "Velraj";

// To delete a existing Record -> delete object_variable_name.key
delete studentInfo.status;

// Array -> It is a collection of List data (List of Data)
//Syntax of creating an Array
//var variable_name = [ value_1, value_2, ... , Value_n ];

// value -> Number, String, Boolean, Object, Array, Function

var list_of_mark = [70, 64, 94, 88, 45];

var name_list = ["asdfsadf", "reer", "dfbdf", "rtyrh"];

var studentList = [
  { name : "Karthick", age : 24},
  {name : "Ak", age : 20},
  { name : "Yuvi", age : 25}
];

// Operation in Array -> 4 Operation = Insert a new value, Read the Value, Edit the exiting value, Delete the value

// Insert a new value into Array

// push() - Insert a new value at the end of array record
// array_variable_name.push(value_1, value_2, ... , value_n);

studentList.push({name: "Kumar", age: 28}, {name: "YK", age: 27});

// unshift() -> Insert a new value at the start of array record
// array_variable_name.unshift(value_1, value_2, ... , value_n);

studentList.unshift({name : "Zyan", age : 29});

// To Read value from Array
// array_variable_name[index]

console.log(studentList[1].name);

// To edit a existing value from Array
// array_variable_name[index] = value;

studentList[2].name = "Dinesh";

//To delete an value 
// array_variable_name.splice(index, deleteCount);

studentList.splice(2, 1);


// Function -> Block of Code 

// Syntax for Creating a Function (Function Definition)

function function_name(){
  // coding
} 

//function_name -> It should be a Proper text value -> a-z, A-Z, 0-9, $, _

//Syntax for Executing/Running the Function (Function Invocation)

function_name();

function onSubmitForm(){
  var output = "The form has been submitted successfully";
  console.log(output);
};

function onLogin(){
  var result = "You have loggin to the application";
  console.log(result);
}

// Operators
// 1. Arithmetic Operator -> +, -, *, /, %, ++, --
// 2. Assignment Operator -> =
// 3. Comparision Operator -> <, <=, >, >=, ==, ===, !=, !== 
// 4. Logical Operator -> &&, ||, !

//&& - AND
// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false

//|| - OR
// true || true -> true
// false || true -> true
// true || false -> true
// false || false -> false

//! - NOT
// ! true -> false
// ! false -> true

//Syntax - if else conditon
/*
  if(conditon) {
    // code block will execute if the condition is Truthy.
  }
  else{
    // code block will execute if the condition is Falsy.
  }
*/

/*
Problem Statement
1. We need to provide age(Number - Data type) as input for a program 
2. If the given age is greater than or equal to 18 -> Output - The user is eligible for Vote
3. If the given age is less then 18 -> Output - The user is not eligible for vote
*/

function check_voting_status(){
  var age = prompt("Enter your user Age");
  if(age >= 18){
    console.log("The user is eligible for Vote");
  }
  else{
    console.log("The user is Not eligible for vote")
  }
}

//Syntax - Multipe if else conditon
/*
  if(conditon) {
    // code block will execute if the condition is Truthy.
  }
  else if(condition){
   // code block will execute if the condition is Truthy
  }
  else{
    // code block will execute if the condition is Falsy.
  }
*/

/*
1. To give person age as input -> Number
2. idenfity -> less then 18 -> The person is Minor
2. idenfity -> greater then or equal to 18 and less than 60 -> The person is Major
3. idenfity -> greater then or equal to 60 -> The person is Super Citizen
*/

function check_person_category(){
  var age = prompt("Enter person Age");
  if(age < 18){
    console.log("The person is Minor")
  }
  else if(age >= 18 && age < 60){
    console.log("The person is Major")
  }
  else{
    console.log("The person is Super Citizen")
  }
}

/* 
Syntax - for (loop)
for(initialization;  condition; increment/decrement){ 
  //code block
}
*/

for(var count = 1; count <= 10; count++){
  console.log("Loop is running on count ", count);
}

/*
Find even number for given N number of limit.
Solution: 
1. Get number (Nth number limit) value from user while running the code.
2. Logic for finding even number -> Number % 2 => 0
3. Repeat this logic till n number
*/

function check_even_numbers(){
  var Nth_number = prompt("Enter the number limit");
  for(var count = 1; count <= Nth_number; count++){
    if(count % 2 === 0){
      console.log(count, " is a Even Number");
    }
  }
}

/*Syntax - for in (loop) - Used to iterate Object properties
for(var key in object_variable_name){
 // coding
}
*/

function iterateForLoop(){
  var employee = {
    first_name : "Karthick",
    last_name : "kumar",
    father_name : "Xyz",
    age : 27,
    status : true
  }

  for(var key in employee){
    // console.log(key);
    console.log(employee[key])
  }
}

/*
Syntax - for of (loop) - Used to iterate list of Array
for(var value of array_variable_name){
 // coding
}
*/

function iterateArray(){
  var studentList = [
    { name : "Karthick", age : 24},
    {name : "Ak", age : 20},
    { name : "Yuvi", age : 25}
  ];

  for(var value of studentList){
    console.log(value.name)
  }

}

/*Syntax - While (loop) - Entry level check
while(condition){
 // loop code block
}
*/

function whileLoop(){
  var count = 0;
  while(count <= 5){
    console.log("The count is ", count);
    count = count + 1;
  }
}

/*
Syntax - While (loop) - Exit Level Check
do{
 // code block      
}while(condition)
*/

function doWhileLoop(){
  var count = 6;
  do{
    console.log("The count is ", count);
    count = count + 1;
  }while(count <= 5);
}

/*Syntax - Switch Case
switch(expression){
  case value :
    // code block
    break;
  case value :
    // code block
    break;
  default:
    //code block
}
*/

function findDay(){
  var day = prompt("Enter a number from 0 to 6");
  switch(day){
    case "0":
      console.log("Sunday");
      break;
    case "1":
      console.log("Monday");
      break;
    case "2":
      console.log("Tuesday");
      break;
    default:
      console.log("Out of Range");
  }
}

function display(){
  // Local Scope - Defning a Variable inside a Function 
  //Accessibilty - With in the Function
  var name = "Karthick Kumar";
  console.log(name);
  //Global Scope - Defining a variable Outside a Function 
  //Accessibility - Inside any Funtion
  console.log(email);
  // Automatic Global Scope - Defining a variable declaration outside a funciton, but assgning value inside a function
  //Accessibility - Inside any Funtion
  future_value = "Generated result";
}

function printName(){
  console.log(name) // Does not print value
  console.log(email); // print value
  console.log(future_value);  //print value
}

//Error Handling
function calculate(){
  try{
    var value_1 = prompt("Enter number value 1");
    var number_1 = parseInt(value_1);

    var value_2 = prompt("Enter number value 2");
    var number_2 = parseInt(value_2);
    
    var symbol = prompt("Enter any math operator");

    switch(symbol){
      case "+":
        console.log(number_1 + number_3);
        break;
      case "-":
        console.log(number_1 - number_2);
        break;
      case "*":
        console.log(number_1 * number_2);
        break;
      case "/":
        console.log(number_1 / number_2);
        break;
      default: 
        console.log("You have entered an wrong math operator");
    }
  }
  catch(error){
    console.log(error);
    alert("Server down, pls try again later");
  }

}

// Local Storage -> Set a new value, Read a value, Delete particular value, n
// syntax -> Set a new value
// localStorage.setItem("key", "value")
localStorage.setItem("username", "Karthick@gmail.com")

// syntax -> Read a value
// localStorage.getItem("key");
localStorage.getItem("username")

//syntax - Remove a particular value
//localStorage.removeItem(key);
localStorage.removeItem("username");

//syntax - To clear all values
localStorage.clear();

//To convert an Object or Array to String Value
//JSON.stringify(Object or Array Value);

//To convert an String Format Object or Array to Actual Value
//JSON.parse(stringObject)

// Session Storage -> Set a new value, Read a value, Delete particular value, n
// syntax -> Set a new value
// sessionStorage.setItem("key", "value")
sessionStorage.setItem("username", "Karthick@gmail.com")

// syntax -> Read a value
// sessionStorage.getItem("key");
sessionStorage.getItem("username")

//syntax - Remove a particular value
//sessionStorage.removeItem(key);
sessionStorage.removeItem("username");

//syntax - To clear all values
sessionStorage.clear();

//Timers
/*
setTimeout - Its used to delay the code excution
syntax:
setTimeout(function(){
  code to time delay
}, time_millisecond);

1000 ms -> 1 second
*/

var homePageTimeout = setTimeout(function(){
  alert("Welcome to Home Page");
}, 1000 * 5);


// clearTimeout -> It will stop the setTimeout
// clearTimeout(setTimeoutID);

function clearSetTimeout(){
  clearTimeout(homePageTimeout);
}

/*
setInterval -> It is used to run a code on the given time interval
syntax:
setInterval(function(){
  // code to be excuted on a time interval
}, time_millisecond);
*/

var homePageTimeInterval = setInterval(function(){
 alert("It will call continiously for every 4 second")
}, 4000);

// clearInterval -> It will stop the time interval
// clearInterval(setIntervalID);

function clearTimeInterval(){
  clearInterval(homePageTimeInterval);
}

class Authentication{
  login(){
   console.log("This is login code")
  }

 register(){
  console.log("This is a Register code")
 }

}

var auth = new Authentication()
auth.login();

class HomePage extends Authentication{

}

var home = new HomePage();
home.login();