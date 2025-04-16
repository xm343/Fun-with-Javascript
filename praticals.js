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



//remove even numbers from an array

// let arr = [1,2,3,4,5,6,7,8]
// let arr1 = arr.filter((num)=>num%2!=0)
// console.log(arr1);



//remove even numbers from object

// let obj = {
//     a:1,
//     b:2,
//     c:3,
//     d:4
// }
// for(let key in obj){
//     if(obj[key]%2==0){
//         delete obj[key]
//     }
// }
// console.log(obj);




//print from 10 to 0 with set time out

// let i=10
// setTimeout(()=>{
    
//     while(i>=0){
//         console.log(i)
//         i--
//     }
// },1000)



//print from 10 to 0 without set time out


// for(let i=10; i>=0; i--){
//     console.log(i);
    
// }


//convert +ve into -ve and -ve to positive

// let arr = [1,-2,3,-4,5]
// let arr1 = arr.map((element)=>element*-1)
// console.log(arr1);




//print all others otherthan numbers

// let arr = [32, 323, 42, () => {}, 485, 366, null, undefined];
// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i]!=="number"){
//         console.log(String(arr[i]));
        
//     }
// }

//delete duplicate elements

// let arr = [1,1,2,3,3,4,4,5,5,6]
// let duplicates= []

// //loop
// for(let i=0; i<arr.length; i++){
//     for(j=i+1; j<arr.length; j++){
//         if(arr[i]==arr[j] && !duplicates.includes(arr[i])){
//             duplicates.push(arr[i])
//         }
//     }
// }
// console.log(duplicates);




// let arr = [1,1,2,3,3,4,4,5,5,6]
// //set
// let arr1 = new Set([...arr])
// console.log(arr1);



//filter


// let arr = [1, 1, 2, 3, 3, 4, 4, 5, 5, 6];
// let duplicates = arr.filter((element, index, array) => 
//     array.indexOf(element) !== index && array.lastIndexOf(element) === index
// );
// console.log(duplicates);




//object destructuring

// const obj = {
//     name:"Alex",
//     address:"yellow street",
//     city:"new york"
// }
// const {name, address, city} = obj //destructing
// console.log(name)
// console.log(address)
// console.log(city)



//check array of numbers is in ascending order or not


// let arr = [1,2,3,4,5,6,7]
// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]<arr[j]){
//             console.log(true);
//         }
//         else{
//             console.log(false);
            
//         }
//     }
// }

// let a = {a:[1,2,3,4,5]}
// const total = a.a.reduce((sum , num)=>sum+num,0)
// console.log(total);










 


 
