// strings are imutable
// array orderd collection
// object key value pair

//string
let string = " Ramu  ";

console.log(string.length)  //properties
console.log(string.toLocaleLowerCase())  //method
console.log(string.toUpperCase())
console.log(string.trim())  // for rmoving whitespaces / used in form validations
console.log(string.includes("R"))   // to search the presence of
console.log(string.includes("r"))  // its case sentativ
console.log(string.slice(1,3)) // to slice the string here it includes the value of index 1 and exclude index 3
console.log(string.split(""))  // it will split the string in as a array
console.log(typeof string.split(""))  // the is object but its an array
console.log(string.replace("R","P")) // with this we can replace the part of string

let array = [1, 4, 3, true, "ramu", 8, [1, 2, 3, 5, 6]];
let array2 = [5, 5, 5];

// Mutating Methods
console.log(array) //print the array
array.shift()
console.log(array) //remove element from start
array.pop()
console.log(array) //remove the element from end
array.unshift("addedByUnshift")
console.log(array)  //added to the start
array.push("addedByPush")
array.splice(1,3)
console.log(array)
console.log(array)  //added to the end

// Imutating Methods

console.log(array.concat(array2)); // cobine two arrays
console.log(array.slice(1, 4)); // a sliced copy
console.log(array.flat(1)); // flate the sub arrayss

// // Searching Methods

array.sort(); //short the array in a aasending
console.log(array);
console.log(array.includes("ramu")); //to check if it is in array

// Non Mutating Advanc Methods

const products = [
  {
    name: "Wireless Mouse",
    category: "Electronics",
    price: 0,
    inStock: true,
    qty: 4,
  },
  {
    name: "Bluetooth Headphones",
    category: "Electronics",
    price: 20,
    inStock: false,
    qty: 2,
  },
  {
    name: "Running Shoes",
    category: "Footwear",
    price: 10,
    inStock: false,
    qty: 5,
  },
  {
    name: "Coffee Mug",
    category: "Home",
    price: 30,
    inStock: true,
    qty: 1,
  },
  {
    name: "Grider",
    category: "Home",
    price: 20,
    inStock: true,
    qty: 1,
  },
  {
    name: "Smart Watch",
    category: "Electronics",
    price: 30,
    inStock: false,
    qty: 2,
  },
];

// forEach
products.forEach((p, index)=>{
  console.log(`${index+1} Product Name: ${p.name}, Price: ${p.price}`)
})

let list = products.forEach((p, index)=>{
  console.log(`${index+1} Product Name: ${p.name}, Price: ${p.price}`)
})

console.log(list)  //output will be undefined because forearch never return anything

// Map

products.map(p => `${p.name} Price: ${p.price} x ${p.qty} = ${p.price*p.qty}`)

let bill = products.map(p => `${p.name} Price:  ${p.price} x ${p.qty} = ${p.price*p.qty}`)
console.log(bill)  //map always returns a new array

// filter

products.filter((products)=>{
  products.inStock
})

let filter = products.filter((products)=>{
  return products.inStock
  return products.name.startsWith("Sm")  // return the value which matches the condition
  return products.name.includes("es")
})

console.log(filter)

// Reduce

let Revenue = products.reduce((sum, product)=>{
  return sum + (product.qty * product.price)
}, 0)

console.log(Revenue)


const inGroup = products.reduce((acc, product) => {
    const category = product.inStock ? "inStock" : "outOfStock";
    acc[category].push(product.name);
    return acc; },
    { inStock: [], outOfStock: [] },
);

console.log(inGroup);


const groupByCat = products.reduce((acc, product)=>{
  const cat = product.category == "Home" ? "Home" : "Electronics"

  acc[cat].push(product.name)
return acc

},{Electronics:[], Home:[]})

console.log(groupByCat)

const groupByCat = products.reduce((acc, product)=>{
  const cat = product.category 
  acc[cat] = acc[cat] || []
  acc[cat].push(product.name, "$"+product.price)
  return acc
 
},{})

console.log(groupByCat)

const groupByCategory = products.reduce((acc, product) => {
  const cat = product.category;
  acc[cat] = acc[cat] || [];
  acc[cat].push(product);
  return acc;
}, {});


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
console.log(Object.keys(object)); //all the keys as an array
console.log(Object.values(object)); //all the values as an array
console.log(Object.entries(object)); // array of key value pairs
