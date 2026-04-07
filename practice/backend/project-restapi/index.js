import express from "express";
import users from "./MOCK_DATA.json" with { type: "json" };
import fs from "fs";
import { json } from "stream/consumers";


const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
app.use(express.urlencoded({extended:false}))

app.get("/users", (req, res) => {
  const html = ` <ul>${users.map((u) => `<h2>${u.first_name + " " + u.last_name}</h2> <p>${u.email}</p> <p>${u.gender} <hr>`).join("")} </ul>`;
  return res.send(html);
});

// REST API

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.route("/api/users/:id")  // :id = dynamic route parameter→ user/2 ye 2 id me ayga
.get((req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);
  return res.json(user);
})
.patch((req,res)=>{})
.delete((req,res)=>{})

app.post("/api/users", (req,res)=>{
 try {
   const body = req.body
  users.push({...body , id: users.length + 1}
  )
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data =>{
    return res.json({status:"success"})
  }))

 } catch (error) {
  throw new error
 }
})

app.listen(PORT, () => console.log("server is runing...."));
