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

let arr = [1,2,3,4,5]
let wrr = [1,2,6,7,8]
let complete = []
for(let i=0; i<arr.length; i++){
    complete[i]=arr[i]
}
for(let j=0; j<wrr.length; j++){
    complete[arr.length-1+j] = wrr[j]
}
console.log(complete)