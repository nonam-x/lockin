import express from 'express'
// import http from "http"  // express automaticaly internally http call kar leta hai



const app = express()  // ab ye app ek handler function hai jo hum creatserver me pass karte hai 


app.get("/", (req, res)=>{  //yahah hume ek handler milta hai jo ek particular rout aru methode ke liye hotahai
    console.log(req.url + " " + "New Req")
    return res.send(`Hallo ${req.query.name} ✌🏻`)
})
app.get("/about", (req, res)=>{  //yahah hume ek handler milta hai jo ek particular rout aru methode ke liye hotahai
    console.log(req.url + " " + "New Req")
    return res.send("Server Res With express Page About")
})
app.get("/Contact", (req, res)=>{  //yahah hume ek handler milta hai jo ek particular rout aru methode ke liye hotahai
    console.log(req.url + " " + "New Req")
    return res.send("Server Res With express Page Contact")
})

app.listen(6000, ()=>console.log("server listining without http create server"))



// const server = http.createServer(app) //express ke sath inki bhi jarurat nhi 

// server.listen(2000, ()=>console.log("surver is running"))