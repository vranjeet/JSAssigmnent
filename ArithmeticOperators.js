function arithmeticOperator(operation,a,b)
{
    if(operation==="add"){
        return a+b;
    }
    else if(operation==="subtract"){
        return a+b;
    }
    else if(operation==="multiple"){
        return a*b;
    }
    else if(operation==="division"){
        return a/b;
    }
    else if(operation==="Module"){
        return a%b;
    }
    else if(operation==="Increment"){
        return ++a;
    }
    else if(operation==="Decrement"){
        return --b;
    }
}
console.log("Addition of Two number:" + (arithmeticOperator("add",30,20)));
console.log("Subtraction of Two number:" +(arithmeticOperator("subtract",30,20)));
console.log("Multiplcation of Two number:" +(arithmeticOperator("multiple",30,20)));
console.log("Division of Two number:"+(arithmeticOperator("division",30,20)));
console.log("Module of Two number:"+(arithmeticOperator("Module",30,20)));
console.log("Increment of a number:"+(arithmeticOperator("Increment",30,20)));
console.log("Decrement of a number:"+(arithmeticOperator("Decrement",30,20)));