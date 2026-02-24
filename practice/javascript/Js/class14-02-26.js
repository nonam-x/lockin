// data types
console.log(typeof "new"); //string
console.log(typeof 2); //number
console.log(typeof 2n); //Bigint
console.log(typeof 2.5); //number
console.log(typeof true); //Boolean
console.log(typeof false); // Boolean
console.log(typeof NaN); // nuber
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof Symbol()); // symbol
console.log(typeof {}); // odject
console.log(typeof []); // object
console.log(typeof function () {}); //function  (hota object hi hai)

//variables

var a = 10
var a = 20

//var
if (true) {
  var kahiBhiJayga = 10;
}

console.log(kahiBhiJayga); // we can still use this now it make ab ye kisi bhi function loop me ja sakta use kar sakte hai

for (var kahiBhiJayga2 = 5; kahiBhiJayga2 < 6; kahiBhiJayga2++) {
  console.log(kahiBhiJayga2);
}

console.log("yaha bhi use kar sakte hai", kahiBhiJayga2);

//Usability

const num = 10;
num = 20; // we cant change or reasin this

const obj = {
  num: 10,
};

const obj = {
    num:20    //we cant reasign the complet obj/array but
}            // here reference is contant but the internal data is mutable

obj.num = 30  //but we can change the internal data

console.log(obj.num)

copy

primitiv copy by value

let a = 10;
let b = a;
b = 20;
console.log(b); // 20 b different copy
console.log(a); // 10 a different copy

// non primitivs copy by referece

let obj = { name: "ramu" };

let cloneObj = obj;
cloneObj.name = "krish";
console.log(cloneObj); //krish refrence of same obj
console.log(obj); // yaha bhi change ho jyga


//shallow copy


let shallowObj = { name: "ramu",
    devices : {
        phone: "android",  // in shaloow copy we cannot copy the nested obj
        laptop: "Windows"
    }
 };

let cloneShallowObj = {...shallowObj};
cloneShallowObj.name = "krish";
console.log(cloneShallowObj); //krish copy of  shallowObj
console.log(shallowObj); //still Ramu 

//Deep copy

let deepObj = {
    age:26,
    name : {
        fname:"ramu",   // in deep clone we can clone the nested obj too
        lname:"musk"
    }
}

let cloneDeepCopy = structuredClone(deepObj)

cloneDeepCopy.name.fname = "elone"
console.log(cloneDeepCopy)  
console.log(deepObj)