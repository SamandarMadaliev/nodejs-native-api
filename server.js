const http = require("http");
const products = require("./data/products.json");
const server = http.createServer((req, res) =>{
  if(req.url === "/api/products"){
    res.writeHead(200, {"Content-Type":"application-json"});
    res.end(JSON.stringify(products));
  }else{
    res.writeHead(404, {"Content-Type":"application-json"});
    res.end(JSON.stringify({error:"Not Found"}));
  }
});

const PORT = process.env.PORT || 7000;

server.listen(PORT, ()=>console.log(`>${PORT}`));