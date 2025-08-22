// Swap two numbers without using a temporary variable.
// let a=5
// let b=10
// a = a + b //15
// b = a - b //5
// a = a - b //10
// console.log(a,b)



// Check if a number is even or odd.

// function oddEven(num){
//     if(num%2==0){
//         console.log('even')
//     }
//     else{
//         console.log('odd')
//     }
// }
// oddEven(4)


// Write a function that checks if a string is a palindrome.

// function isPalidrome(str){
//     let reversedStr = str.split('').reverse().join('')
//     if(str===reversedStr){
//         console.log(`is palindrome`)
//     } 
//     else{
//         console.log('not palindrome')
//     }
// }
// str = 'malayalam'
// isPalidrome(str)


// Reverse a string without using any built-in reverse helper.

// let str = 'my name is abhijith'
// let str1 = str.split('')
// for(let i=0; i<Math.floor(str1.length/2);i++){
//     temp = str1[i]
//     str1[i]=str1[str1.length-1-i]
//     str1[str1.length-1-i]=temp
// }
// console.log(str1.join(''))



// Count the vowels in a string.

// let str = 'javascript'
// let count =0
// let vowels = ['a','e','i','o','u']
// for(let i=0; i<str.length; i++){
//     if(vowels.includes(str[i])){
//         count++
//     }
// }
// console.log(count)



// Show an example where hoisting changes the output.

// foo(); // ?

// function foo() {
//   console.log("I am a function declaration");
// }

// var foo = function() {
//   console.log("I am a function expression");
// };




// function foo() {
//   console.log("I am a function declaration");
// }

// var foo = function() {
//   console.log("I am a function expression");
// };

// foo(); // ?


// Compare two objects and check if they are equal in value.


// let obj = {
//     name:'Abhi'
// }
// let com ={
//     name:'ram'
// }

// console.log(obj===com)



// Write a function that returns the type of a given value

// function Type(val){
//     console.log(typeof(val))
// }
// Type(34)



// Show what happens when you compare null and undefined.

// console.log(null ==  undefined) //true type coersion

// console.log(null === undefined) //strict equality false




// Show how this behaves differently inside a normal function and an arrow function.


// let obj = {
//   name: "Abhi",
//   normalFunc: function () {
//     console.log("normalFunc this.name:", this.name);
    
//     function innerNormal() {
//       console.log("innerNormal this.name:", this.name);
//     }
//     innerNormal(); // undefined since this function doesnot have a object like obj.innerFunction()
//   }
// };

// obj.normalFunc(); // prints Abhi


//Arrow Function

// let obj = {
//   name: "Abhi",
//   arrowFunc: function () {
//     console.log("arrowFunc this.name:", this.name);
    
//     let innerArrow = () => {
//       console.log("innerArrow this.name:", this.name);
//     }
//     innerArrow(); //prints Abhi inherits from surrounding
//   }
// };

// obj.arrowFunc(); //prints Abhi




// Merge two arrays into one without duplicates.

// let arr = [1,2,3,4,5]
// let wrr = [1,2,6,7,8]
// let complete = []
// for(let i=0; i<arr.length; i++){
//     complete[i]=arr[i]
// }
// for(let j=0; j<wrr.length; j++){
//     complete[arr.length+j] = wrr[j]
// }
// console.log(complete)
// for(let i=0; i<complete.length; i++){
//     for(let j=i+1; j<complete.length; j++){
//         if(complete[i]===complete[j]){
//             complete.splice(j,1)
//            j-- 
//         }
//     }
// }
// console.log(complete)



// Transform an array of numbers into their squares.

// let arr = [1,2,3,4,5]
// let squareArr  = arr.map((elem)=>elem**2)
// console.log(squareArr)




// Flatten a deeply nested array.|


// let nested = [
//   1,
//   [2, 3, 
//     [4, 5, 
//       [6, 7, 
//         [8, 9, 
//           [10]
//         ]
//       ]
//     ]
//   ]
// ];

// console.log(nested);

// console.log(nested.flat(Infinity))



// From a list of users, return the first one older than 18.


// const users = [
//   { name: "Abhi", age: 22 },
//   { name: "Sara", age: 19 },
//   { name: "John", age: 30 },
//   { name: "Maya", age: 27 }
// ];
// const firstAdult = users.find((user)=>user.age>18)
// console.log(firstAdult)




// Check if an array has at least one negative number.


// let arr = [1,2,3,4,5]
// let negative  = false
// for(let i=0; i<arr.length; i++){
//     if(arr[i]<0){
//         negative = true
//     }
// }
// console.log(negative)



// Add an element to the beginning of an array, then remove it


// let arr = [2,3,4,5]
// arr.unshift(1)
// console.log(arr)
// arr.shift()
// console.log(arr)



// Sort an array of objects by age

// const users = [
//   { name: "Abhi", age: 22 },
//   { name: "Sara", age: 19 },
//   { name: "John", age: 30 },
//   { name: "Maya", age: 27 },
//   { name: "Leo", age: 15 },
//   { name: "Nina", age: 35 },
//   { name: "Raj", age: 28 }
// ];
// let sorted = users.sort((a,b)=>a.age-b.age)
// console.log(sorted)




// Write a function that makes a deep copy of a nested object.

// function Deep(obj){
//     let deepCopy = structuredClone(obj)
//     console.log(deepCopy)
// }

// let obj = {
//     name:'Abhi',
//     address:{place:'New York'}
// }
// Deep(obj)



// Explain why elements can be added to an array declared with const.

// const arr = [1, 2, 3];

// arr.push(4);     // ✅ Allowed
// arr[0] = 99;     // ✅ Allowed

// console.log(arr); // [99, 2, 3, 4]



// Split an array of strings into words and flatten it into a single array.

// let arr = [
//   "my name is Abhijith",
//   "I love JavaScript",
//   "arrays are fun"
// ];
// let words = arr.map((sentence)=>sentence.split(' '))
// console.log(words)




// Randomize the order of elements in an array.


// let arr = [1,2,3,4,5]
// arr.sort(()=>Math.random()-0.5)
// console.log(arr)




// Write a function that remembers how many times it has been called.
// function readCounter(){
//     let count=0
//     return function(){
//         count++
//         console.log(count)
//     }
// }
// counter = readCounter()
// counter()
// counter()




// Change the value of this inside a function to point to a specific object.

//call apply bind

// function greet(){
//     console.log(`hi my name is ${this.name}`)
// }
// greet.apply({name:'Abhi'})


// function greet(greeting,punctuations){
//     console.log(`${greeting} ${this.name} ${punctuations}`)
// }
// greet.apply({name:'abhi'},['Hi','!'])


// function greet(){
//     console.log(`Hi ${this.name}`)
// }
// let person = {name:'Abhi'}
// let bound = greet.bind(person)
// bound()


// Use a function to find the maximum number in an array by borrowing another method.

// let arr = [1,2,3,4,5]
// function findMax(arr){
//     return Math.max.apply(null,arr) //null => this 
// }
// console.log(findMax(arr))


// let arr = [1,2,3,4,5]
// function findMax(arr){
//     return Math.max.call(null,...arr) //null => this spread operator is used because call takes as argument
// }
// console.log(findMax(arr))



// Fix the value of this permanently for a function.

// function greet() {
//   console.log("Hello, my name is " + this.name);
// }

// const person = { name: "Abhi" };

// const boundGreet = greet.bind(person); // permanently binds `this` to person

// boundGreet(); // Hello, my name is Abhi





// Compare how normal functions and arrow functions handle the arguments object.



