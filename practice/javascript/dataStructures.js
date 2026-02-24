const arr = [1,2,3,5,6,6]

forEach((inarg)=>
    console.log(inarg)
)

function forEach(givenFunc){
   for(let i=0;i<arr.length;i++){
    givenFunc(arr[i])
   }
}





// arr.forEach((el)=>{
//     console.log(el+2)
// })

// function print(element){
//   console.log(element)
// }


// arr.forEach(print)



// arr.forEach((element)=>
//  console.log(element)
// )