// strings are imutable
// array orderd collection
// object key value pair

//string
let string = " Ramu  ";

// console.log(string.length)  //properties
// console.log(string.toLocaleLowerCase())  //method
// console.log(string.toUpperCase())
// console.log(string.trim())  // for rmoving whitespaces / used in form validations
// console.log(string.includes("R"))   // to search the presence of
// console.log(string.includes("r"))  // its case sentativ
// console.log(string.slice(1,3)) // to slice the string here it includes the value of index 1 and exclude index 3
// console.log(string.split(""))  // it will split the string in as a array
// console.log(typeof string.split(""))  // the is object but its an array
// console.log(string.replace("R","P")) // with this we can replace the part of string

let array = [1, 4, 3, true, "ramu", 8 ,[1,2,3,5,6]];
let array2 = [5,5,5]

// // Mutating Methods
// console.log(array) //print the array
// array.shift()
// console.log(array) //remove element from start
// array.pop()
// console.log(array) //remove the element from end
// array.unshift("addedByUnshift")
// console.log(array)  //added to the start
// array.push("addedByPush")
// array.splice(1,3)
// console.log(array)
// console.log(array)  //added to the end

// // Imutating Methods

console.log(array.concat(array2)) // cobine two arrays
console.log(array.slice(1,4))  // a sliced copy
console.log(array.flat(1))   // flate the sub arrayss







array.sort() //short the array in a aasending
console.log(array)
console.log(array.includes("ramu")) //to check if it is in array




let object = {
  name: "ramu",
  age: 26,
  marks: {
    english: 102,
    hindi: 98,
    maths: 400,
  },
};


// Object. way to use the methods
console.log(Object.keys(object))  //all the keys as an array 
console.log(Object.values(object)) //all the values as an array
console.log(Object.entries(object))  // array of key value pairs