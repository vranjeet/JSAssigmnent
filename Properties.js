const student = {
    _Name:"",
    _Address: "",
    _DateofBirth:"",
    _PassportNumber:"",

get name(){
    return this._Name;
}, 
set name(value)
{
    this._Name=value;
},
get address(){
    return this._Address;
}, 
set address(value)
{
    this._Address=value;
},
get dateofBirth(){
    return this._dateofBirth;
}, 
set dateofBirth(value)
{ 
    this._dateofBirth=value;
},
get passportNumber(){
    return this._passportNumber;
}, 
set passportNumber(value)
{ 
    this._passportNumber=value;
},
};

export {student}


  