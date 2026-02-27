// // call


function intro(work, stack){
    
    return `${this.name} working at ${work} as a ${stack} Dev`
}

const person1 = {name:"ramu"}
const person2 = {name:"Krish"}



// console.log(intro("Policy Bazar", "Js")) //aise call karenge to undefind output ayga 

// console.log(intro.call(person1,"Policy Bazar", "Js" )) //here because of call this points to the person1
// console.log(intro.call(person2,"Origin", "Python" )) //here because of call this points to the person2


const args = ["Origin", "Python"]
// console.log(intro.call(person2, args)) //here we cannot pass the args a an array
// console.log(intro.apply(person2, args)) //so we use apply


const newFunCall = intro.call(person1,"Policy Bazar", "Js" )

console.log(newFunCall()) //here it does not return a new function

// call aplly new function return nhi karte isilye bind ka use karte hai

const newFuncBind = intro.bind(person1,"Policy Bazar", "Js" )

console.log(newFuncBind()) // here we can call the new function








