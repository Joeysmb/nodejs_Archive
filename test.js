const { clear } = require("console")
const{writeFile, createReadStream} = require("fs")

// for (var i=0; i < 2000; i++){
//     writeFile("content/streamfile.txt", "Hello we just testing out our first stream \n", {flag: "a"}, (err,data)=>{
//         if(err){
//             console.log(err)
//             return 
//         }
//     })
// } 

const stream = createReadStream("content/streamfile.txt")

stream.on("data", (data)=>{
    console.log(data)
})
