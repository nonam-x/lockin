import express, { json } from "express";

function basicServer(){
    return new Promise((resolve=>{
    const app = express()
    app.use(express.json())

    app.get("/", (req,res)=>{
      return res.json({constr:["main","basiServer","Game"]})
    })
    app.get("/not-found", (req,res)=>{
     res.status(404).send("badte rh0")  //404 page ke liye 
    })

    app.get("/err",(req,res)=>{
        res.redirect(302, "/not-found")  //agar kisi aur url pe redirect karna hai to
    })

    app.get("/search", (req,res)=>{   //Query parameters optional data ke liye
        const {n , a} = req.query     // ye params optional hote hai
        return res.json({             // filtering search 
            name: n,
            age:a
        })
    })

    app.get("/product/:id",(req,res)=>{ //route parameter URL ka part hote hai
         const {id} = req.params     // mostly required hote hai
         return res.json({          // specific resource ke liye
            ID: id,
            Product: "keyboard"
         })

    })

    app.post("/order",(req,res)=>{
        const order = req.body
       res.status(200).json({
            status: "Order Recieved",
            order:order
        })
    })


    const PORT = 3000

    app.listen(PORT,()=>{
        console.log("server")
    })


    
//     const server = app.listen(PORT, async ()=>{
//         console.log("server is running On Port" , PORT)


//         try {
//           const DetailsRes = await fetch("http://localhost:3000")
//           const DataRes = await DetailsRes.json()
//           console.log("Details Response is" , JSON.stringify(DataRes))
//           console.log("--------------------------------------------------")

//           const SearchRes = await fetch("http://localhost:3000/search?a=ramu&a=36")
//           const SearchData = await SearchRes.json()
//           console.log("Search Response is" , JSON.stringify(SearchData))
//           console.log("--------------------------------------------------")

//           const ProductRes = await fetch("http://localhost:3000/product/2")
//           const ProductData = await ProductRes.json()
//           console.log("Product Response is" , JSON.stringify(ProductData))
//           console.log("--------------------------------------------------")

//           const OrderReq = await fetch("http://localhost:3000/order", {
//             method: "POST",
//             headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     Product: "Keyboard",
//     Price: 4000
//   })
//           })
//           const OrderData = await OrderReq.json()
//            console.log("Product Request is" , JSON.stringify(OrderData))
//           console.log("--------------------------------------------------")


            
//         } catch (error) {
//             console.log(error)

//         }

//         server.close(()=>{
//             console.log("this Server is serverd")
//             resolve()
//         })
//     })

//     const server = app.listen(PORT, async () => {
//   console.log("server is running On Port", PORT);

//   try {
//     const DetailsRes = await fetch("http://localhost:3000");
//     const DataRes = await DetailsRes.json();
//     console.log("Details Response is", DataRes);

//     const SearchRes = await fetch("http://localhost:3000/search?name=ramu&age=36");
//     const SearchData = await SearchRes.json();
//     console.log("Search Response is", SearchData);

//     const ProductRes = await fetch("http://localhost:3000/product/2");
//     const ProductData = await ProductRes.json();
//     console.log("Product Response is", ProductData);

//     const OrderReq = await fetch("http://localhost:3000/order", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         Product: "Keyboard",
//         Price: 4000
//       })
//     });

//     const OrderData = await OrderReq.json();
//     console.log("Order Response is", OrderData);

//   } catch (error) {
//     console.log(error);
//   }

//   server.close(() => {
//     console.log("Server closed");
//   });
// });

        
    }))
}

// function resServer(){

// }

async function main() {
    await basicServer()
    // await resServer()
    process.exit(100)
}


main()