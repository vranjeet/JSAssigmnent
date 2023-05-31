function compressionOperator(operation){
if(operation)
{
    return true;
}
else{
    return false;
}
}
let a=20,b=30,c="20"
console.log(compressionOperator(a==c));
console.log(compressionOperator(a===c));
console.log(compressionOperator(a=!b));
console.log(compressionOperator(a>b));
console.log(compressionOperator(a<b));
console.log(compressionOperator(a>=b));
console.log(compressionOperator(a<=b));
console.log(compressionOperator((a != b) && (a < b)));
console.log(compressionOperator((a > b) || (a == b)));
console.log(compressionOperator((a < b) || (a == b)));
console.log(compressionOperator(!(a < b)));
console.log(compressionOperator(!(a > b)));
console.log(1 && 2 && null && 3 ); //null
console.log(1 && 0 && null && 3 ); //0
console.log(1 && 3 && 4 && 3 ); //3
console.log(1 && 3);//3
console.log(1 || 0 ); // 1
console.log(null || 1 ); // 1 
console.log(null || 0 || 1 ); // 1
console.log(undefined || null || 0 );//0  