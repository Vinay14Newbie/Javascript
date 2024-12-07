// Custom Error objects

// Create a custom error class that extends the built-in-error class. Throw an instance of this custom error in a function and hanlde it using a try-catch block

// Define the custom error class
class customError extends Error {
  constructor(msg, errorCode) {
    // 'super' function in js is used to call the constructor of the parent class. When you use 'super' in a subclass, it invokes the constructor of the parent class('Error' in this case) and allows you to pass arguments to it
    super(msg); //pass the msg to the base Error class
    this.name = "CustomError"; //Set the name property to the custom error class name
    this.msg = msg;
    this.errorCode = errorCode; //add a custom property for the error code
  }
}
// function that throws an instance of the custom error
function riskyFun() {
  const isError = true;
  if (isError) {
    throw new customError("Something went wrong in riskyFun", 1001);
  }
}
// Handling the custom error using try-catch block
try {
  riskyFun();
} catch (error) {
  if (error instanceof customError) {
    console.log(error);

    console.error(`Custom Error caught: ${error.msg}`);
    console.error(`Error code: ${error.errorCode}`);
    console.log(`Error name: ${error.name}`);
  } else {
    console.error(`An unexpencted error occured: ${error.msg}`);
  }
}

// Write a function that validates user input (e.g. checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
class ValidationError extends Error {
  constructor(msg, errorCode) {
    super(msg);
    this.name = "ValidationError";
    this.errorCode = errorCode;
  }
}
function validateInput(input) {
  if (typeof input !== "string" || input.trim() === "") {
    throw new ValidationError("input must be non-empty string", 1001);
  }
  console.log("input is valid");
}
try {
  validateInput("vinay");
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(`ValidationError caught : ${error.message}`);
    console.error(`Error Code : ${error.errorCode}`);
  } else {
    console.error(`An unexpected error occured: ${error.msg}`);
  }
}
