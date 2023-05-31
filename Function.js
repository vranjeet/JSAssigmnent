/**
 * Create a function and retrun a value
 */
function createNewFunction(){
  return function printHelloWorld(){
      return "Hello world"; 
  }
  return printHelloWorld; 
} 
const myFunction = createNewFunction();
console.log(myFunction()); 
 
 /**
* Adding of two numbers with parameters.
*/
 function addingOfTwoNumber(){
            const num1 = 10;
            const num2 = 20;
        const sum = num1 + num2;
        console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);
        }
        addingOfTwoNumber();
/**
* Adding of two numbers with parameters.
*/
function sumOfTwoNumber(a,b){
    var c = a+b;
    console.log('The sum of ' + a + ' and ' + b + ' is: ' + c);
}
sumOfTwoNumber(4,5);
/**
 * Concatnate two variable with different data type and return the value
 */
const person = {
    firstName:"Ranjeet",
    lastName: 123,
    display: function () {
      fullName=this.firstName.concat(this.lastName);
      console.log(fullName);
    }
  } 
  person.display();