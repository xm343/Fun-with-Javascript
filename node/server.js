//create a server with http

// const http = require('http')
// const server = http.createServer((req, res)=>{
//     res.write('hello world')
//     res.end()
// })
// server.listen(3000,()=>{
//     console.log("listening")
// })






//wrie a file


// const fs = require('fs')
// const writeFile = fs.writeFileSync('newfile.txt','hello world')

// <---------write date--------------->

// const fs = require('fs')
// const today = new Date().toISOString()
// const writefile = fs.writeFile('date.txt',today,(error, data)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(data)
//     }
// })





//read a file 

// const fs = require('fs')
// const readFile = fs.readFile('newfile.txt','utf-8',(error,data)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log(data)
//     }
// })





// <--------event emitter-------->


// const event = require('events')
// const myEvent = new event
// myEvent.on('greet',()=>{
//     console.log('hello world');
// })
// myEvent.emit('greet')




// <---------read stream----->

// const fs = require('fs')

// const readstream = fs.createReadStream('newfile.txt','utf-8')
// readstream.on('data',(chunk)=>{
//     console.log(chunk);
    
// })


// <---------write stream--------------->


const fs = require('fs')
const readfilestream = fs.createReadStream('newfile.txt','utf-8')
readfilestream.on('data',(chunk)=>{
    console.log(chunk);
    
})