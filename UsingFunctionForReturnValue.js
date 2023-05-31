function createNewFunction(){
    return function printHelloWorld(){
        return "Hello world"; 
    }
    return printHelloWorld; 
  } 
  const myFunction = createNewFunction();
  console.log(myFunction()); 