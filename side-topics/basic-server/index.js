
import http from "http";

const myServer = http.createServer((req, res)=>{
    if(req.url === "/favicon.ico" ) return res.end()
    console.log(new Date().toLocaleTimeString() +" - " + "new request recieved from browser On "+ " " +req.url)
    if(req.url === "/"){
        res.end("Response for your request ---Home----")
    }
    else if(req.url === "/about"){
        res.end("About Page ")
    }
    else if(req.url === "/contact"){
        res.end("contact Page ")
    }
    else if(req.url === "/testimonials"){
       res.writeHead(200, { "Content-Type": "text/html" });

res.end(`
  <html>
    <head><title>Home</title></head>
    <body>
      <h1>Hello</h1>
      <p>Backend chal raha hai</p>
    </body>
  </html>
`);
    }

    else if(req.url === "/btn"){
        res.writeHead(200, { "Content-Type": "text/html" });

res.end(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>Button Page</title>
    <style>
      body {
        margin: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f5f5f5;
        font-family: Arial, sans-serif;
      }

      button {
        padding: 12px 24px;
        font-size: 16px;
        border: none;
        border-radius: 8px;
        background-color: #4CAF50;
        color: white;
        cursor: pointer;
        transition: 0.3s;
      }

      button:hover {
        background-color: #45a049;
      }
    </style>
  </head>
  <body>
    <button onclick="alert('Button Clicked')">
      Click Me
    </button>
  </body>
  </html>
`);
    }
   
})


myServer.listen(5000, ()=> console.log("server Running succesfulli"))