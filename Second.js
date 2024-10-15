const http = require("http");

const server = http.createServer((req, res) =>{
    res.writeHead(200,{"content-type":"text/html"})
    res.write("<h1> Wow this is js</h1>")
    res.write("<h1> Wow this is form server</h1>")
    res.end("ok bye bye");
})

server.listen(9898);