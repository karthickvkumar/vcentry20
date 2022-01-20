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
