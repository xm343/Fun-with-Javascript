//promise


// const mypromise = new Promise((resolve , reject)=>{
//     const success = true
//     if(success){
//         resolve('operation successful')
//     }
//     else{
//         reject('operation unsuccessful')
//     }
// })
// mypromise
//     .then((result)=>{
//         console.log(result);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })



//promise all

// const promise1 = Promise.resolve('operation successful')
// const promise2 = Promise.resolve('operation successful')
// const promise3 = Promise.resolve('operation successful')
// Promise.all([promise1,promise2,promise3])
//     .then((result)=>{
//         console.log(result);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })


//promise race/any


// const promise1 = new Promise((_,reject)=>setTimeout(()=>reject('promise error'),2000))
// const promise2 = new Promise((resolve)=>setTimeout(()=>resolve('promise resolved'),1000))
// const promise3 = new Promise((resolve)=>setTimeout(()=>resolve('promise resolved'),500))
// Promise.race([promise1, promise2, promise3])
//     .then((result)=>{
//         console.log(result);
//     })
//     .catch((error)=>{
//         console.log(error);
        
//     })




//currying


// function sum(a){
//     return function (b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// const result = sum(1)(2)(3)
// console.log(result)



//call apply bind




//call

// function sayHello(){
//     console.log(`Hello , ${this.name}`);
// }
// sayHello.call({name:"Abhi"})





//apply

// const person = {
//     name:'Abhi',
//     greet:function(greeting, punctuation){
//         console.log(`${greeting} i am ${this.name} ${punctuation}`);
//     }
// }
// const anotherPerson = {name : 'Alex'}
// person.greet.apply(anotherPerson,['Hello','!'])




//bind

// function sayHello(){
//     console.log(`Hi ${this.name}`);
// }
// const bound = sayHello.bind({name:"Abhi"})
// bound()





//do while multiple of 5

// let num = 5
// let limit = 50
// do{
//     console.log(num);
//     num+=5
    
// }while(num<limit)


//while multiple of 5

// let num = 5
// while(num<50){
//     console.log(num);
//     num+=5
// }




//callback


// function greet (name, callback){
//     console.log(`hi ${name}`);
//     callback()
// }
// function sayGoodbye(){
//     console.log(`goodbye`);
// }
// greet("Abhi", sayGoodbye)



//pass by value

// let a=10
// let b=a
// a=5
// console.log(a);//5
// console.log(b)//10


//pass by reference

// let a = [1, 2, 3];        // Original array

// let b = a;                // b references the same array in memory (not a new copy)

// b.push(4);                // Modify the array using b

// console.log("a:", a);     // Output: [1, 2, 3, 4] → affected because a and b share the same array
// console.log("b:", b);     // Output: [1, 2, 3, 4]




//print the duplicate elements

// let arr = [1,1,2,3,4,2,1,3,5,6.7,7,7]
// let duplicates = []
// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]==arr[j] && !duplicates.includes(arr[i])){
//             duplicates.push(arr[i])
//         }
//     }
// }
// console.log(duplicates);





//multiply each element by 2

// let arr = [1,2,3,4,5,6]
// let arr1 = arr.map(element=>element*2)
// console.log(arr1);





//capitalise last letter

// let str = "Alex"
// let letter = str.charAt(3).toUpperCase('')
// let str1 = str.slice(0,3)+letter
// console.log(str1);




 
