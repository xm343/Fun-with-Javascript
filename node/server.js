//create a server with http

console.log('hello')

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


// const fs = require('fs')
// const writestream = fs.createWriteStream('context.txt')
// writestream.write('hello')
// writestream.write('world')
// writestream.end()
// console.log('data written successful');





// <-------------duplex stream->>>>
/// pipe\\\


// const fs = require('fs')
// const readstream = fs.createReadStream('newfile.txt')
// const writestream = fs.createWriteStream('output.txt')
// readstream.pipe(writestream)
// console.log('finished');





// const fs = require('fs')
// fs.writeFileSync('promise.txt','hello world')
// setTimeout(()=>{
//     let promise = new Promise((resolve,reject)=>{
//         const success = true
//         if(success){
//             resolve('write')
//         }
//         else{
//             reject(error)
//         }
//     })
//     promise
//         .then((result)=>console.log(result))
// },3000)



//<-----------with promise find if array includes a number ------------->

// const fs = require('fs')
// let promise = new Promise((resolve, reject)=>{
//     const arr = [1,2,3,4,5,6]
//     const num =6
//     if(arr.includes(num)){
//         resolve('successful')
//     }
//     else{
//         reject('failure')
//     }
// })
// promise
//     .then((result)=>console.log(result))
//     .catch((error)=>console.log(error))




//<-----write and readfile with promise if arr includes num------>

// const fs = require('fs')
// let promise = new Promise((resolve, reject)=>{
//     let arr = [1,2,3,4,5,6]
//     let num = 6
//     if(arr.includes(num)){
//         let write = fs.writeFileSync('new.txt',`${arr}`)
//         let read = fs.readFileSync('new.txt','utf-8')
//         resolve(read)
//     }
// })
// promise
//     .then((result)=>console.log(result))
//     .catch((error)=>console.log(error))



// <-----------------using promise to find the secsmallest and write and read the file---------->

// let fs = require('fs')
// let promise = new Promise((resolve,reject)=>{
//     let arr = [1,2,3,4,5,6]
//     let secslargest=arr.sort((a,b)=>b-a)[1]
//     if(secslargest){
//         let write = fs.writeFileSync('second.txt',`${secslargest}`)
//         let read = fs.readFileSync('second.txt','utf-8')
//         resolve(read)
//     }
//     else{
//         reject('error')
//     }
// })
// promise
//     .then((result)=>console.log(result))
//     .catch((error)=>console.log(error))




// <-----------using promise to read  a file and count the words---------------->

// let fs = require('fs')
// let count = 0
// let promise = new Promise((resolve, reject)=>{
//     let read = fs.readFileSync('newfile.txt','utf-8')
//     let arr = read.split(' ')
//     for(let i=0; i<arr.length; i++){
//         count++
//     }
//     if(count){
//         resolve(count)
//     }
//     else{
//         reject('error')
//     }
// })
// promise
//     .then((result)=>console.log(result))
//     .catch((error)=>console.log(error))





// <------------------is palindrome------------------>


// let fs =  require('fs')
// let promise =  new Promise((resolve ,reject)=>{
//     let read = fs.readFileSync('newfile.txt','utf-8')
//     let palin = read.split('').reverse().join('')
//     if(palin===read){
//         resolve('this is palindrome')
//     } 
//     else{
//         reject('not a palindrome')
//     }
// })
// promise
//     .then((result)=>console.log(result))
//     .catch((error)=>console.log(error))




// <------------------------------------------------------------->

// reverse a file 


// let fs = require('fs')
// let promise = new Promise((resolve,reject)=>{
//     let read = fs.readFileSync('newfile.txt','utf-8')
//     let rev = read.split('').reverse().join('')
//     if(rev){
//         resolve(rev)
//     }
//     else{
//         reject(error)
//     }
// })
// promise
//     .then((result)=>console.log(result))
//     .catch((error)=>console.log(error))


//application middleware


// const express = require('express')
// const app = express()

// app.use((req,res,next)=>{
//     console.log('incoming request')
//     next()
// })
// app.get('/',(req,res)=>{
//     res.send('application created')
// })
// app.listen(3000,()=>{
//     console.log('created')
// })




//router middleware

// const express = require('express')
// const app = express()
// const router = express.Router()

// router.use((req,res,next)=>{
//     console.log('hello ')
// })

// const routers = (req,res)=>{
//     res.send("hello from me")
// }
// app.use('/api',routers)  
// // Attach router to the app


// app.listen(3000,()=>{
//     console.log('listening')
// })






//query params

// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/sum', (req, res) => {
//     // Get query parameters a and b
//     const a = Number(req.query.a);
//     const b = Number(req.query.b);

    

//     const sum = a + b;

//     res.send(`The sum of ${a} and ${b} is ${sum}`);
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });