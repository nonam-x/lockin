// console.log(this);  // here this points to the globle object {}



// function ranveerOnGlobalStage() {
//   return typeof this;     // here this points to the object{}
// }
// console.log(ranveerOnGlobalStage()); //{}

// function ranveerWithNoScript() {
//   "use strict"
//   return this;             
// }
// console.log(ranveerWithNoScript());  //undefined

// const bollywoodFilm = {
//   name: "Bajirao Mastani",
//   lead: "Ranveer",

//   introduce() {  // here this points to the object bollywoodfilm
//     return `${this.lead} performs in ${this.name}`; //we can use this here
//   },
// };

// console.log(bollywoodFilm.introduce());  

// const filmDirector = {
//   name: "Sanjay Leela Bhansali",
//   cast: ["Ranveer", "Deepika", "Priyanka"],

//   announceCast() {    //  yaha normal fuction me this ka acces hoga 
//     this.cast.forEach((actor) => {  //yaha ye arrow function hai ye apna this create nhi karega outer method ka this use karga
//       console.log(`${this.name} introduces ${actor}`);  //isi liye yha bhi this acces kar sakta hai
//     });
//   },
// };

// filmDirector.announceCast();


//// Arrow function kabhi bhi apna this nhi banata but wo apne parent function ka this use kar sakta hai

////// Arrow function ka this lexical hota hai.
         ////Matlab wo apne surrounding scope se this capture karta hai, runtime pe change nahi hota.

// const filmSet = {
//   crew: "Spot boys",
//   prepareProps() { // yaha this filmset ko point karega 
//     console.log(`Outer this.crew: ${this.crew}`);

//     function arrangeChairs() { //ye function method nhi ye andar normal function hai to undefinde hoga
//       console.log(`Inner this.crew: ${this.crew}`);
//     }
//     arrangeChairs(); //undefined

//     const arrangeLights = () => {  //yaha ye arrowfunk hai to apna this nhi bana sakta lekin ye parent ke this ko use kar sakta hai jo ki hai 
//                                    // filmset
//       console.log(`Arrow this.crew: ${this.crew}`);
//     };
//     arrangeLights();// yaha pe spot boy ayga kyuki ye outer function ko point kar raha hai
//   },
// };

filmSet.prepareProps();

// Detached Methods
//

const actor = {
  name: "Ranveer",
  bow() {
    return `${this.name} takes a bow`;
  },
};
console.log(actor.bow());
const detachedBow = actor.bow;   // ye undefined ayga

console.log(detachedBow());

const myfunctionOne = function () {
  console.log(this);
};

const myfunctionTwo = () => {
  console.log(this);
};

myfunctionOne();
myfunctionTwo();
