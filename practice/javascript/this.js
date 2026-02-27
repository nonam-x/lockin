// ================= GLOBAL SCOPE =================

// Browser me global object = window
// Isliye yaha this -> window object
console.log(this);  
// Output: window (browser me)


// ================= NORMAL FUNCTION (NON-STRICT) =================

function ranveerOnGlobalStage() {
  // Normal function direct call ho raha hai
  // Non-strict mode me this -> global object (window)
  return typeof this;  
}

console.log(ranveerOnGlobalStage());
// Output: "object"  (kyuki window ek object hai)


// ================= STRICT MODE FUNCTION =================

function ranveerWithNoScript() {
  "use strict";
  // Strict mode me normal function direct call hogi
  // To this -> undefined
  return this;
}

console.log(ranveerWithNoScript());
// Output: undefined


// ================= OBJECT METHOD =================

const bollywoodFilm = {
  name: "Bajirao Mastani",
  lead: "Ranveer",

  introduce() {
    // Ye method object ke through call ho raha hai
    // bollywoodFilm.introduce()
    // Isliye yaha this -> bollywoodFilm object
    return `${this.lead} performs in ${this.name}`;
  },
};

console.log(bollywoodFilm.introduce());
// Output: Ranveer performs in Bajirao Mastani


// ================= OBJECT + ARROW FUNCTION INSIDE =================

const filmDirector = {
  name: "Sanjay Leela Bhansali",
  cast: ["Ranveer", "Deepika", "Priyanka"],

  announceCast() {
    // Yaha this -> filmDirector object
    // Kyuki method object ke through call hua

    this.cast.forEach((actor) => {
      // Arrow function apna this create nahi karta
      // Ye outer scope ka this use karega
      // Outer scope me this -> filmDirector

      console.log(`${this.name} introduces ${actor}`);
    });
  },
};

filmDirector.announceCast();

// Output:
// Sanjay Leela Bhansali introduces Ranveer
// Sanjay Leela Bhansali introduces Deepika
// Sanjay Leela Bhansali introduces Priyanka


// ================= NORMAL FUNCTION INSIDE METHOD =================

const filmSet = {
  crew: "Spot boys",

  prepareProps() {
    // Yaha this -> filmSet object
    console.log(`Outer this.crew: ${this.crew}`);
    // Output: Spot boys

    function arrangeChairs() {
      // Ye normal function hai
      // Direct call ho raha hai
      // Strict mode nahi hai to this -> window
      // window.crew undefined hoga

      console.log(`Inner this.crew: ${this.crew}`);
    }

    arrangeChairs();
    // Output: undefined

    const arrangeLights = () => {
      // Arrow function apna this nahi banata
      // Ye outer prepareProps ka this use karega
      // Outer this -> filmSet

      console.log(`Arrow this.crew: ${this.crew}`);
    };

    arrangeLights();
    // Output: Spot boys
  },
};

filmSet.prepareProps();


// ================= DETACHED METHOD =================

const actor = {
  name: "Ranveer",

  bow() {
    // Normally this -> actor
    return `${this.name} takes a bow`;
  },
};

console.log(actor.bow());
// Output: Ranveer takes a bow


const detachedBow = actor.bow;

// Yaha method ko object se alag kar diya
// Ab ye direct function call ho gaya
// Non-strict mode me this -> window
// window.name usually undefined

console.log(detachedBow());
// Output: undefined takes a bow


// ================= NORMAL FUNCTION vs ARROW FUNCTION =================

const myfunctionOne = function () {
  // Normal function direct call
  // Non-strict mode me this -> window
  console.log(this);
};

const myfunctionTwo = () => {
  // Arrow function apna this nahi banata
  // Ye outer (global scope) ka this lega
  // Browser me global this -> window
  console.log(this);
};

myfunctionOne(); 
// Output: window

myfunctionTwo(); 
// Output: window