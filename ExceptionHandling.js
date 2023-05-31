/**
 * Logical error
 */
function First() {
  let a = 123;
  let b = 0;
  try {
      if (b == 0) {
          throw "Do not divide by zero";
      }
  }
  catch (e) {
    console.log("Error: " + e.description);
  }
  finally {
  console.log("Finally block will always execute!");
  }
} 
First(); 
/**
 * Syntax Errors 
 */
let mySyntaxErro=new SyntaxError('How are you');
try{
  throw mySyntaxError;
}
catch(e)
{
  console.log(e.message);
}
/**
 * RunTime Exception
 */
function myFunc() {
    try
		{
			 var result  =  Sum(10, 20);
		}
		catch(ex)
		{
      console.log("Error: " + ex.message);
		}
		finally{
      console.log("finally block executed");
		}
}
myFunc();

