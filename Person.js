import { student } from "./Properties.js";
student.name="Ranjeet";
student.address="Noida"
student.dateofBirth="03/12/2000";
student.passportNumber="2345672345"
console.log(student.name);
console.log(student.address);
console.log(student.dateofBirth);
console.log(student.passportNumber); 
var dob = new Date("03/12/2000");   
var month_diff = Date.now() - dob.getTime();    
var age_dt = new Date(month_diff);        
var year = age_dt.getUTCFullYear();   
var age = Math.abs(year - 1970);  
console.log("Get Current after entered date of birth: " + age + " years");  


