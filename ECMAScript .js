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

/*
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
*/

//Higer Order Arrow Function 
/*
// Not same function
// 2nd function works well
// value set to 1 as a default if the value is not given
const increment =() => {
    return function increment (number,value=1){
        return number + value ;
    };
};

const increment_2 = (function(){
    return function increment (number,value=1){
        return number + value;
    };
})();

console.log(increment(3,2));
console.log(increment(3));
*/

// Rest Operator with Function Parameters
/*
// Both functions same
// 2nd function useful because number of elements increases as dynamically
const sum=(function(){
    return function sum(x,y,z){
        const args = [x,y,z];
        return args.reduce((a,b)=>a+b,0); //sum of all elements
    };
})();

const sum_2=(function(){
    return function sum_2(...args){
        return args.reduce((a,b)=>a+b,0); 
    };
})();

console.log(sum(1,2,3));
console.log(sum_2(1,2,3,4));
*/

//Destruction

var voxel ={
    x:3.6,
    y:1.2,
    z:4.2
};
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const {x:a, y:b, z:c} = voxel ;  // a=3.6 b=1.2 c=4.2 
console.log(a);


var AVG_TEMP = {
    today:34,
    tomorrow:30
};

function getTempForTomorrow(avgTemp){
    const {today:tempOfToday, tomorrow:tempOfTomorrow } = avgTemp;
    return tempOfTomorrow;
}

console.log(getTempForTomorrow(AVG_TEMP));

const LocalForecast={
    today: {min:20, max:34},
    tomorrow : {min :24, max:31}
};

function getMaxTempForTomorrow(forecast){
    const{max:maxTomorrow}=forecast.tomorrow;
    //const {tomorrow : {max : maxTomorrow}} = forecast;
    return maxTomorrow;
}

console.log(getMaxTempForTomorrow(LocalForecast));





