// // // Differnt types of array

// let array = [12, 3, 4]; //normal array
// console.log(array);

// let arrayCons = Array(12, 3, 4); // same normal array

// let emptyArray = []; //complete empty arr
// console.log(emptyArray); //[]

// let emptySlot = Array(3); // array with empty items
// console.log(emptySlot); //<empty item>

// let itemKaArray = Array.of(3); // array where 3 is a item
// console.log(itemKaArray); //[3]

// let itemSeArray = Array.from("isse array"); // it creates a array with this item
// console.log(itemSeArray)  //["i", "s", "s", "e", " ", "a", "r", "r", "a", "y"];

// console.log(typeof array)  //it gives the type object

// console.log(Array.isArray(array)) //prefer is array to check the type of an array

// console.log(array[4])   //if u try the to get the inde value wich is not abailable in array then it will give undefind as output not error

//Objects

const obj = {
  name: "ramu",
  name2: "ramu surname",
  age: 21,
};

// console.log(obj.name)
// console.log(obj["name2"])

console.log("undefined" in obj);
console.log("toString" in obj); // it will true because it has some hidder pre defined properties

console.log(obj.hasOwnProperty("toString")); //so we chech the properties with hasown method it gave false
console.log(obj.hasOwnProperty("name")); //

//// converting obj to array

let arr = Object.entries(obj);
console.log(arr); //it will convert the obj in array of array

//// converting array to object

const arrayToConvert = [
  ["name", "ramu"],
  ["name2", "ramu surname"],
  ["age", 21],
];


const convertedObj = Object.fromEntries(arrayToConvert)
console.log(convertedObj)  // it will convert the array of aray into key value pair obj
