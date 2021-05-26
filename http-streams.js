const { clear } = require("console")
const{writeFile, createReadStream} = require("fs")
const http = require ("http")

// for (var i=0; i < 2000; i++){
//     writeFile("content/streamfile.txt", "Hello we just testing out our first stream \n", {flag: "a"}, (err,data)=>{
//         if(err){
//             console.log(err)
//             return 
//         }
//     })
// } 
http.createServer((req,res)=>{
    const stream = createReadStream("content/streamfile.txt")
    stream.on("open", ()=>{
        stream.pipe(res)
    })
    stream.on("error", (err)=>{
        res.end(err)
    })
}).listen(5000)



