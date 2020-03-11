//alert("Hello");
/*leets see some of our newr array methods are..*/
var myArray = ["test",3,4,6.5,true,false,"abc"];
var myValue = myArray.find( function(element){ return element>4; } );
console.log(myValue);

//find an element in an array already exists in an array.
var isMyStringInside = myArray.find(function (element) { return element === "abc"; });
console.log(isMyStringInside);

if (isMyStringInside == "abc") {
console.log("the letter is in string.");
}

var isMyStringInside = myArray.find(function (element) { return element === "def"; });
console.log(isMyStringInside); //not found prints in console, undefined

if(isMyStringInside == null){
console.log("the letter is not in string.");
}

/**
 * .findIndex()
 */
var findAnIndex = myArray.findIndex(function (element){ return element === 4; });
console.log(findAnIndex); //this time, it returns the index of value.

/**
 * .entries()
 */
var pairing = myArray.entries();
console.log(pairing);
console.log(pairing.next().value);
console.log(pairing.next().value);
console.log(pairing.next().value);
console.log(pairing.next().value);
console.log(pairing.next().value);
console.log(pairing.next().value);
console.log(pairing.next().value);
console.log(pairing.next().value); //this prints undefined .. because its out of array


var FromArray = Array.from("abcdefghijklmnopqrstuvwxyz");
console.log(FromArray);

/**
 * .filter() method
 */
var filtered = myArray.filter(function(element){return element>4; });
console.log(filtered); //all mathches returned

/**
 * .reduce() method
 * we can add on to a value, returns only a single.
 */
var reduceResult = myArray.reduce(function(accumulator,currentVal){
    return accumulator + currentVal; //because it is string ,they are getting concatinated.
});
console.log(reduceResult);

console.log([1,2,3,4,5].reduce(function (a,v){
    return a+v;
})); //beaucse we have a all numbers so it will be added mathematically.

console.log([1, 2, 3, 4, 5, "sd", 5, 6, "asd", "asfaf"].reduce(function (a, v) {
    return a + v;
})); //it adds stars num methematically untill 1 to 6 means 15 and when it touch string it concatinates with number between 5,6 as well concatinates with string

/**
 * Let and Const
 */
var x=3; // standard variable declaration//it is function scope
let y=7; // Let is block scope
const z=35; //Cont is block scoped, but reassignment is not allowed.

//z=16; not allowd!! it is const . which does not allowed to reassign
console.log(z);

y=13; //allowed var and let allows re assignment.
console.log(y);

for(var myVar = 0; myVar<10; myVar++){
    console.log("For loop iteration");
}
console.log("myVar :"+myVar); // var is global variable,

for (let myLetVar = 0; myLetVar < 10; myLetVar++) {
    console.log("For loop iteration");
    console.log("myVar :" + myLetVar);
}
//console.log("myVar :" + myLetVar); // it is not working here outside. it is outof scope just workes in function.

/**
 * Const can not be reassigned. but its inside can be manupulated
 */
const myObj = {
    name: "Soham",
    age: 30
}
console.log(myObj);
myObj.name = "Sandy";//can we update properties of an constant delcalred variable?
console.log(myObj);  

myObj.hobbies = [];
myObj.hobbies.push("Mountain Climbing");
console.log(myObj);

//myObj={} //this would be error because of const. Only insides for a const can be manipulated. this is we call it reassigning vallues which can not be happen.

//classic function declaration
/*function myFunction(a,b){
    return Number(a)+Number(b);
}
*/
//ES6 Style:
myFunction = (a,b) => Number(a) + Number(b);

console.log(myFunction(5,6));

//bigger function
myOtherFunction = (a,b) => {
    const myAnswer = Number(a+b);
    return myAnswer;
}
console.log(myOtherFunction(34,5));                                                                                                                 

/**
 * Function default parameter values
 */
//we canse t defaults to prevent errors in case nothing gets passed in fora parameter
addNums = (x=0,y=0) => x+y;
console.log(addNums()); //no arguments vut our defalut values kicks in


/**
 * Rest Parameter
 */
findHighNum = (...args) => {
    console.log(args);
    return args;
}