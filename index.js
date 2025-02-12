const http = require("http")
const fs = require("fs")
const url = require("url")
const myServer = http.createServer((req,res)=>{
    if(req.url === "/favicon.ico")return res.end();
//console.log("req rec.")
const log = `${Date.now()}:${req.method} ${req.url}New Req Recieved!!\n`

const myUrl = url.parse(req.url,true)
//console.log(myUrl)
//console.log(req)
fs.appendFile("log.txt",log,(err,data)=>{
    switch(myUrl.pathname){
        case '/':  res.end("HomePage")
        break
        case '/about':
            const username =myUrl.query.name;
            res.end(`Hi , ${username}`);
        
        break;
    }
   
})

})
myServer.listen(8000, ()=>console.log("Server started!"))