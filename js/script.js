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

