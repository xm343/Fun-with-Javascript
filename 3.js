// //promise


// const myPromise = new Promise((resolve, reject)=>{
//     const success = true
//     if(success){
//         resolve('operation successful')
//     }
//     else{
//         reject('operation unsuccesful')
//     }
// })
// myPromise 
//     .then(result=>{
//         console.log(result)
//     })
//     .catch(error=>{
//         console.log(error)
//     })


//if a num is included in array resolve the array

// const myPromise = new Promise((reject, resolve)=>{
//     const arr = [1,2,3,4,4,5,6,7,8,8]
//     const num = 3
//     if(arr.includes(num)){
//         resolve('operation successful')
//     }
//     else{
//         reject('operation unsuccessful')
//     }
// })
// myPromise   
//     .then((result)=>{
//         console.log(result);        
//     })
//     .catch((error)=>{
//         console.log(error);
        
//     })




// //promise.all

// const promise1 = Promise.resolve('promise resolved')
// const promise2 = Promise.resolve('promise resolved')
// const promise3 = Promise.resolve('promise resolved')
// Promise.all([promise1, promise2, promise3])
//     .then(result=>{
//         console.log(result)
//     })
//     .catch(error=>{
//         console.error(error)
//     })



// //promise.allSettled

// const promise1 = Promise.resolve('promise resolved')
// const promise2 = Promise.resolve('promise resolved')
// const promise3 = Promise.resolve('promise resolved')
// Promise.allSettled([promise1, promise2, promise3])
//     .then(result=>{
//         console.log(result)
//     })
//     .catch(error=>{
//         console.error(error)
//     })




// //async await

// const sayHello = ()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('hello world')
//         },1000)
//     })
// }
// const greet = async ()=>{
//     console.log('wating to resolve')
//     const message = await sayHello()
//     console.log(message);
// }
// greet()


// // remove 5 from array (log arr not arr1)

// const arr = [1,2,3,4,5,6]
// const arr1 = arr.splice(4,1)
// console.log(arr)






// //add 10 to existing array after 5

// const arr = [1,2,3,4,5,6]
// arr.splice(5,0,10)
// console.log(arr)





// //remove 5 and add 10

// const arr = [1,2,3,4,5,6]
// arr.splice(4,1,10)
// console.log(arr);


// //slice will print from 3 to 5

// const arr = [1,2,3,4,5]
// const sliced = arr.slice(2)
// console.log(sliced);





// //shallow copy && deepcopy

// // shallow copy
// const original = {
//     name:'alice',
//     address:{city:'New York'}
// }
// const shallowCopy = {...original}
// shallowCopy.address.city = "Los Angeles"
// console.log(original.address.city);






// //deep copy

// const original = {
//     name:"alice",
//     address:{city:'New York'}
// }

// const deepCopy = structuredClone(original)
// deepCopy.address.city = "Los Angeles"
// console.log(original.address.city)


// //closure

// function createCounter(){
//     let count = 0
//     return function(){
//         count++
//         console.log(count);
//     }
// }
// const counter = createCounter()
// counter()
// counter()



// //TEMPORAL DEAD ZONE

// console.log(myVariable); // ReferenceError: Cannot access 'myVariable' before initialization

// let myVariable = "Hello, Temporal Dead Zone!";
// console.log(myVariable); // Output: Hello, Temporal Dead Zone!




// //currying

// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// const result = sum(1)(2)(3)
// console.log(result);


// //optional chaining

// const obj = {
//     name:"abhijith",
//     address:{
//         place:"ambalappuzha",
//         zip:"688005"
//     }
// }
// console.log(obj.address?.place)
// console.log(obj.address?.car)



// //call apply bind

// //call
// function sayHello() {
//     console.log(`Hello, ${this.name}!`);
// }

// sayHello.call({ name: "Pc" }); // Output: "Hello, Pc!"



// //apply

// function sayHello() {
//     console.log(`Hello, ${this.name}!`);
// }

// sayHello.apply({ name: "Pc" }); // Output: "Hello, Pc!"



//apply

// const person = {
//     name :'Pc',
//     greet:function(greeting, punctuations){
//         console.log(`${greeting}, I am ${this.name}${punctuations}`);
        
//     }
// }
// const anotherPerson = {name:"Alex"}
// person.greet.apply(anotherPerson,["hello", "!"])


// //bind

// function sayHello() {
//     console.log(`Hello, ${this.name}!`);
// }

// const boundSayHello = sayHello.bind({ name: "Pc" });
// boundSayHello(); // Output: "Hello, Pc!"



// //call apply bind


// // const person = {
// //     firstName: 'Abhijith',
// //     lastName: 'Sivadas'
// // };

// // function greet(greeting, punctuations) {
// //     return `${greeting}, ${this.firstName} ${this.lastName}${punctuations}`;
// // }

// // // call()
// // console.log(greet.call(person, "Hi", "!"));

// //apply

// // console.log(greet.apply(person, ['Hi',"."]));

// //bind

// // const boundGreet = greet.bind(person, "Hey", "!");
// // console.log(boundGreet());




// //generator function


// function* numberGenerator(){
//     yield 1
//     yield 2
// }
// const generator = numberGenerator()

// console.log(generator.next())

// console.log(generator.next())

// console.log(generator.next())



// //nullish coalescing operator

// const name = null
// const defaultName = "Gireesh"

// const displayName = name ?? defaultName
// console.log(displayName);





// //impure function

// let total = 0
// function totalValue(value){
//     total+=value
//     return total
// }

// console.log(totalValue(5));
// console.log(totalValue(5));


// // generator fn


// function* generator(){
//     let i=10
//     while(i<=10){
//         if(i%2==1){
//             yield i
//         }
//         i--
//     }
// }
// const gen = generator()
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);




//generator function to display all elements 

// function* generator(){
//     let i=10
//     while(i>=0){
//         if(i%2==0){
//             yield i
//         }
//         i--
//     }
// }
// const gen = generator()
// const values = [...gen]
// values.forEach(element => {
//     console.log(element)
// });



// function* generator() {
//     for (let i = 1; i <= 10; i++) { 
//         yield i 
//     }
// }
// let gen = generator()
// for(let i=1; i<=10; i++){
//     console.log(gen.next().value);
// }



