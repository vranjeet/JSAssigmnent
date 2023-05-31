/*
* program to validate the phone number
*/
function validatePhone(num) {
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;
    let result = num.match(re);
    if (result) {
        console.log('The number is valid.');
    }
    else {
        console.log('The number is invalid.');
    }
}
let number = "728-985-8958";
validatePhone(number);
/**
 * Validate Internationa number
 */
function validPhoneNumber(phonenumber) {
    let re = new RegExp(/^[+]{1}(?:[0-9\-\(\)\/\.]\s?){6, 15}[0-9]{1}$/);
    if (phonenumber == null) {
        return "false";
    }
    if (re.test(phonenumber) == true) {
        console.log('The Internationa number is valid.');
        return "True";
    }
    else {
        console.log('The Internationa number is invalid.');
        return "false";
    }
}
let InternationalNumber = "+123 123456";
validPhoneNumber(InternationalNumber);

/**
 * Email validation
 */
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/g;
    let result = re.test(email);
    if (result==true) {
        console.log('The email is valid.');
    }
    else {
        console.log('The email is Invalid.');
    }
}
let email = "ranjeetverma8826@gmail.com"
validateEmail(email);
/**
 * Validate path of file
 */
function validateFilePath(pathValue){
    var regex = new RegExp('^[a-z]:((\\\\|\/)[a-zA-Z0-9_ \-]+)+\.xml$', 'i'); 
    let path=regex.test(pathValue);
    if(path==true)
    {
        console.log("Given path is valid");
    }
    else{
        console.log("Given path is Invalid");
    }
}
var pathValue= '/Users/ranjeetverma/Desktop/JSAssignment/BooleanVariable.js';
var str2 = '/Users/ranjeetverma/Desktop/JSAssignment/BooleanVariable1.js';
validateFilePath(pathValue);