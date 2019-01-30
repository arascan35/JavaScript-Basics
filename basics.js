/*
//Data Types
var myName="Can";
myName=8;
let fullName="CanAras"
const pi = 3.14
var c = "I am a"
c = c +"String";
console.log(c);
*/

/*
//Function with return

function minusSeven(num){
    return num-7;
}

console.log(minusSeven(7));
*/

/*
//Stand in Line

function nextInLine(arr,item){
    arr.push(item);
    return arr.shift();
}

var arr = [1,2,3,4,5];
console.log("Before : "+JSON.stringify(arr));
console.log(nextInLine(arr,6));
console.log("After: "+JSON.stringify(arr));
*/

/*
//IF Statement
//Not accaptable for Overloading
function trueOrFalse(isItTrue){
    if(isItTrue){
        return "Yes it is true "
    }
    return "No it is false "
}

function trueOrFalse(isItTrue,num){
    if(isItTrue){
        return "Yes it is True "+num
    }
    return "No it is False "+num
}
//Not accaptable
console.log(trueOrFalse(true))
console.log(trueOrFalse(true,1))
*/

/*
//Strict Comparasion 
// a === b should be comes first 
function strictComparasion(a,b){
    if(a === b){
        return "it is equal"
    }
    if(a == b){
        return "it is equal as a strict"
    }
}

console.log(strictComparasion(10,10));
console.log(strictComparasion(10,"10"));

*/

//Object Operations
/*
var ourCat = {
    "name":"Mia",
    "legs": 4,
    "tails":1,
    "friends":["everything"]
};

var catName = ourCat.name;
var cat_Name = ourCat["name"];
console.log(catName==cat_Name); //true
// Add property
ourCat.meow="meow";
console.log(ourCat);
//Delete property
delete ourCat.meow;
console.log(ourCat);
*/
/*
//Manipulation Complex Object
var Music= [
    {
        "artist":"Billy",
        "title":"piona man",
        "year":1973,
        "formats": [
            "cd",
            "lp"
        ],
        "gold":true
    },
    {
        "artist" : "Carnes",
        "title": "cereal man",
        "year":1980,
        "format" : [
            "youtube videos"
        ]
    }
];
console.log(Music[1]);
*/

//While and For loop
/*
var arr=[];
var i =0;
while(i<5){
    arr.push(i);
    i++;
}
for(i=0;i<5;i++){
    arr.push(i);
}
*/


// let ws var
/*
function checkScope(){
    "use strict";
   //let i = "function scope";
    if(true){
        var i = "block scope";
        console.log("Block scope is : ",i);
    }
    console.log("Function scope is : ",i);
    return i;
}

checkScope();
*/

//Arrow Function
/*
//All of the same
var magic = function(){
    return new Date;
}
var magic_2 = () => {
    return new Date;
}
const magic_3 = () => new Date;
*/
//Arrow Function with Parameters
/*
var myConcat= function(arr1,arr2){
    return arr1.concat(arr2);
}
const  myConcat_2 = (arr1,arr2) => arr1.concat(arr2);

console.log(myConcat([1,2],[3,4,5]));
console.log(myConcat_2([1,2],[3,4,5]));
*/

//Higher Order Arrow Function

// Squared number of int and positive 
// arr.filter()  -> Each element of array as num
// map() -> Stored each x element as x*x  
const realNumberArray=[4,3.2,12,32.2,-8.4];

const squareList = (arr) => {
    const squaredInt = arr.filter(num => Number.isInteger(num) && num>0).map(x => x*x);
    return squaredInt;
    
};
console.log(squareList(realNumberArray));