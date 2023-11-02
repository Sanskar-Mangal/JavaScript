let score="33"
let score2="33abc" //NaN output
let score3=null //0 output ayega
let score4=undefined //NaN output
let score5=true //1 output ayega , false hoga toh 0


//2 types se likh skh the hai type pta krne ke liye
console.log(score);
console.log(typeof score);
console.log(typeof (score));

console.log("covert string to number");

let intnumbervalue= Number(score)
console.log(intnumbervalue);
console.log(typeof intnumbervalue);


//Not convert number+string hoga toh NaN ayega 
let intnumbervalue2= Number(score2)
console.log(intnumbervalue2);
console.log(typeof intnumbervalue2);

let intnumbervalue3= Number(score3)
console.log(intnumbervalue3);
console.log(typeof intnumbervalue3);

let intnumbervalue4= Number(score4)
console.log(intnumbervalue4);
console.log(typeof intnumbervalue4);

let intnumbervalue5= Number(score5)
console.log(intnumbervalue5);
console.log(typeof intnumbervalue5);

//Boolean conversion
let a=1
let a2=""
let a3="Sanskar"


let boolean=Boolean(a)
let boolean2=Boolean(a2)
let boolean3=Boolean(a3)
console.log(boolean);
console.log(boolean2);
console.log(boolean3);

//NUMBER TO STRING CONVERSION

let b=33
let stringNumber=String(b)
console.log(stringNumber);
console.log(typeof stringNumber);



