const fs = require("fs")
//fs.writeFileSync("./test.txt","Hey There")
fs.writeFile("./test.txt","this is async",(err)=>{})

const os = require("os")
console.log(os.cpus().length);

//read file
//------read file sync -----------

//  const res = fs.readFileSync("./contacts.txt","utf-8")
// console.log(res)

//-------------------read file async----------it doesn't pass direct value in result var.rather than it take a callback fun

// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
// if(err){
//     console.log("error",err)
// }
// else{
//     console.log(result)
// }
// });

//******if we amke a file as non-blocking(Async) then it dont block any execution as you can see by running below code 


console.log("1")
fs.readFile("./contacts.txt","utf-8",(err,result)=>{
    if(err){
        console.log("error",err)
    }
    else{
        console.log(result)
    }
    });
    console.log("2")
    console.log("3")
    console.log("4")

    //***** dyDefault ThreadPool size = 4
    // we can incre. size by the core of CPU  */