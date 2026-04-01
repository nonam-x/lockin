// promis stats pending , done(fullfill, resolve), nope(not,reject)
/*
const promiseWithoutResolver  = new Promise()
console.log(promiseWithoutResolver)        //yaha promise bina resolver ke run nhi hog resolver ek functionn
                            
                                 //Resolver
const byDefaultPromis = new Promise(()=>{})
console.log(byDefaultPromis)    //iski satate pending hogi kyuuki promise ki default value pendinng hoti hai
 

const promise = new Promise((resolve, reject)=>{
    resolve("resolve ho gya")    // yaha dono me se ek ho sakta hai
    reject("resolve ho nhi hua")  //ya to resolve hoga ya reject isiliye response ke bases ke coditonaly run karenge 
})
console.log(promise)   //it will run the promis

const promise2 = new Promise((resolve, reject)=>{  //promise future me resolve hoga kuch samay baad ho to delay introduce karne ke liye settimout ka use karenge
          //   kya karwana hai   kitne time baad karwana hai 
    setTimeout( () => {},         2000);
   
})
console.log(promise)   //it will run the promis
*/

const promise2 = new Promise((resolve, reject)=>{  
         
    setTimeout( () => {
     resolve("resolved after 2 sec")
     reject("Rejected after 2 sec")
     },2000);
   
})

console.log(promise2)  // iska output pending rahega kyuki apne 2 secon baad koi code chalaya hi nhi // ye clg to settimout se pehle ka hai

// setTimeout(() => {   //yaha settimout ke baad code chalane ke liye humne 3 second ka ek aur settimout lagaya hau
//     console.log(promise2) // yaha to hume pata tha ki hume 2 sec baad milega agar hume pata hi na ho to problem hogi isiliye ye syntax use nhi karte hai hum
// }, 3000);


//           val =  resolve("resolved after 2 sec")   
promise2.then((val)=>{    // yaha tehn ke andar reslove se value ati hai
    console.log(val)    //then ke andar hume milta hai ek call back jo bhi value hume resolve se milti hai hume use as it is then ke callback me insert kar dete hai 
})


promise2.then(console.log) //ye bhi work karega kyuki clg ek fnction refference hai yaha then me hume kisi bhi function ka reference de sakte hai aur use function then data insert kardega 