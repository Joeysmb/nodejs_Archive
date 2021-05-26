const {readFile, writeFile} = require("fs")
//console.log(readFileSync)
readFile("./content/first.txt", "utf8",(err, result1)=>{
    if(err){
        return
    }

    // writeFile("./content/async-result.txt", result1, {flag: "a"})
    writeFile("./content/async-result.txt", result1, (err, result1)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(result1)
    })
    //console.log(result1)
    
    readFile("./content/second.txt", "utf8", (err, result2)=>{
        if(err){
            return
        }
        writeFile("./content/async-result.txt", result2, {flag: "a"}, (err, result2)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result2)
        })
        
    })
})