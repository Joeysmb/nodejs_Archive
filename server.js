const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url === '/') {
    console.log("Just received a request")
    res.end("Hello people")
    //console.log("not sure if the flow reaches here")
    }
})

server.listen(5000, ()=>{
    console.log("Server is listening on port 5000")
})