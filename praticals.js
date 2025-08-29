
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



//non repeating numbers

// let arr  = [1,2,3,4,5,1,2,3]
// let frequency = {}
// for(let i=0; i<arr.length; i++){
//     if(frequency[arr[i]]){
//         frequency[arr[i]]++
//     }
//     else{
//         frequency[arr[i]] = 1
//     }
// }
// for(let num in frequency){
//     if(frequency[num]===1){
//         console.log(Number(num))
//     }
// }
  



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


// let i = 10;
// function countdown() {
//     if (i >= 0) {
//         console.log(i);
//         i--;
//         setTimeout(countdown, 1000); // Call itself after 1 second
//     }
// }
// countdown();


// let i = 10;
// let intervalId = setInterval(() => {
//     console.log(i);
//     i--;
//     if (i < 0) {
//         clearInterval(intervalId); // Stop the interval when i reaches -1
//     }
// }, 1000);




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

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let isAscending = true;

// for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] >= arr[i + 1]) {
//         isAscending = false;
//         break; // No need to check further
//     }
// }

// console.log(isAscending); // true


// let a = {a:[1,2,3,4,5]}
// const total = a.a.reduce((sum , num)=>sum+num,0)
// console.log(total);



//finding the largest string

// let str = "mathematics is a good subject"
// let arr = str.split(' ')
// let largest = 0
// for(let i=0; i<arr.length; i++){
//     if(arr[i].length>largest){
//         largest = arr[i].length
//     }
//     if(largest === arr[i].length){
//         console.log(arr[i]);
        
//     }
// }



//find the sum --------------------------------->


// let a = {
//     a: 2,
//     pk: [ { c: 23 } ]
//   };

// let sum = 0

// sum+=a.a

// a.pk.forEach(item=>{
//     sum+=item.c
// })
// console.log(sum);




// let a = {
//     a: 2,
//     pk: [ { c: 23 , d:20} ]
//   };
// let sum  = 0
// sum+= a.a
// a.pk.forEach((obj)=>{
//     for(let key in obj){
//         sum+=obj[key]
//     }
// })
// console.log(sum)



//find first and second largest number in an array

// let array = [1, 2, 3, 4, 5, 6, 4, 3, 2, 2];

// let first = -Infinity;
// let second = -Infinity;

// for (let num of array) {
//     if (num > first) {
//         second = first;
//         first = num;
//     } else if (num > second && num !== first) {
//         second = num;
//     }
// }

// console.log("First largest:", first);
// console.log("Second largest:", second);



//duplicate from array

// let array = [1,2,7,3,3,4,1,2,3]
// let duplicate = []
// for(let i=0; i<array.length; i++){
//     for(let j=i+1; j<array.length; j++){
//         if(array[i]===array[j] && !duplicate.includes(array[i])){
//             duplicate.push(array[i])
//         }
//     }
// }
// console.log(duplicate);



// add . to a word
// let str = "javascript"
// let s = str.split('')
// for(let i=0; i<s.length; i++){
//     if(s[i]!='.'){
//         s.push('.')
//         break
//     }
// }
// console.log(s.join(''));



//sum of key values in obj

// let obj = {
//     a:10,
//     b:20,
//     c:30
// }
// let sum = 0
// for(let key in obj){
//     sum+=obj[key]
// }
// console.log(sum);


//largest second largest

// let arr =[1,2,3,435,5,64,4,122,141,2,4]
// let result = arr.reduce(([largest , secondLargest],num)=>{
//     return[
//         num > largest ? num : largest,
//         num > largest ? largest : (num>secondLargest ? num  : secondLargest)
//     ]
// },[-Infinity,-Infinity])
// console.log(result[0])
// console.log(result[1]);


//sort without methods


// let arr =[1,2,3,435,5,64,4,122,141,2,4]
// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]>arr[j]){
//             let temp = arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }
// console.log(arr);



// <----------reverse a array using while loop-------->

// let array = [1,2,3,4,5]
// let i=0
// while(i<array.length/2){
//     let temp = array[i]
//     array[i]=array[array.length-1-i]
//     array[array.length-1-i]=temp
//     i++
// }
// console.log(array);


//closure

// function createCounter(){
//     let count =0
//     return function(){
//         count++
//         console.log(count);        
//     }
// }
// const counter = createCounter()
// counter()
// counter()


//remove even numbers from array

// let arr = [1,12,3,4,5,68,7,88,9,10];
// let arr1 = arr.filter((num)=>{
//     return num%2!==0
// })
// console.log(arr1);



// remove the even keys in Obj

// let obj = {
//     a:1,
//     b:2,
//     c:3,
//     d:4,
//     e:5,
//     f:6,
//     g:7,
//     h:8,
//     i:9,
//     j:10
// }
// for(let key in obj){
//     if(obj[key]%2==0){
//         delete obj[key]
//     }
// }
// console.log(obj);



//find frequency of numbers


// let arr = [1,1,2,2,3,4,4,5,6,7,8]


// let frequency = {}
// for(let i=0; i<arr.length; i++){
//     if(frequency[arr[i]]){
//         frequency[arr[i]]++
//     }
//     else{
//         frequency[arr[i]]=1
//     }
// }
// console.log(frequency);


// count 10 to 0 without settimeout


// let count = 10
// let counter = setInterval(()=>{
//     console.log(count)
//     count--
//     if(count===0){
//         clearInterval(counter)
//     }
// },1000)



//+ve num to -ve and -ve num to +ve


// let arr = [-1,2,-3,4];
// let  arr1 = arr.map((num)=>num*-1)
// console.log(arr1);



//object destructing

// const obj = {
//     name:"Abhi",
//     place:"kerala",
//     phone:"12345678"
// }
// const {name,place,phone} = obj
// console.log(name);
// console.log(place);
// console.log(phone)


//average of even numbers

// let  arr = [1,2,3,4,5,6,7,8,9,10]
// let evenArr = arr.filter((num)=>num%2==0)
// let sum = 0
// let avg = 0
// for(let i=0; i<evenArr.length; i++){
//     sum+=evenArr[i]
//     avg = sum/(evenArr.length)
// }
// console.log(avg)


//first letter capital


// let str = "aleena"
// let letter = str.charAt(0).toUpperCase('')
// let str1 = letter + str.slice(1,6)
// console.log(str1)



//count the vowels


// let str = "abhi is a good boy"
// let vowels = ['a','e','i','o','u']
// let count = 0
// for(let i=0; i<str.length; i++){
//     if(vowels.includes(str[i]).toLowerCase()){
//         count++
//     }
// }
// console.log(count);




//sum of positive numbers


// let array = [1,-2,-3,null,8,"3",undefined,'6',-2,4]
// let sum = 0
// for(let i=0; i<array.length; i++){
//     if(typeof array[i]==="number" && array[i]>0){
//         sum+=array[i]
//     }
// }
// console.log(sum);



//sum of keys


// let arr = [{a:1}, {b:2}, {c:3},{d:3},{e:5},{f:2},{g:4}]
// let sum = 0
// for(let key of arr){
//     // console.log(key);
//     for(let k in key){
//         sum+=key[k]
//     }
    
// }
// console.log(sum);




//remove duplicates

// let arr = [1, 1, 2, 2, 3, 3, 3, 4, 6, 5]
// let uniqueArr = []
// for(let i=0; i<arr.length; i++){
//     if(!uniqueArr.includes(arr[i])){
//         uniqueArr.push(arr[i])
//     }
// }
// console.log(uniqueArr)


//find the sum

// const obj = [{product : 'CPU',price:1000},{product : 'UPS' , price:2000}]

// let result = obj.reduce((acc,val)=>{
//     acc+=val.price
//     return acc
// },0)
// console.log(result);



//lenght of array without arr.length

// let arr = [1,2,3,4,5,6,7]
// let count = 0
// for(let i of arr){
//     count++
// }
// console.log(count)




//add an element to an array without using push and shift



//without push

// let arr = [1,2,3,4,5]
// let num = 6
// arr[arr.length]=6
// console.log(arr)


//morethan one element

// let arr = [1,2,3,4,5]
// arr = arr.concat(6,7,8)
// console.log(arr)



//without unshift

// let arr = [1,2,3,4,5]
// arr = [-1,0,...arr]
// console.log(arr)



//reverse array without built in function

// let arr = [1,2,3,4,5]
// let reversed = []
// for(let i=0; i<arr.length; i++){
//     reversed[arr.length-1-i]=arr[i]
// }
// console.log(reversed)


//reverse array without built in function

// let arr = [1,2,3,4,5,6]
// for(let i=0; i<Math.floor(arr.length/2);i++){
//     let temp = arr[i]
//     arr[i] = arr[arr.length-i-1]
//     arr[arr.length-1-i] = temp
// }
// console.log(arr)


//if arr1 includes arr2
 


// let a = [1,2,2,3,4,5]
// let b = [1,2,3,6,7,8,9]
// let common = a.filter((item)=>b.includes(item))
// common = [...new Set(common)]
// console.log(common)

 
// console.log('10'+5-'1'*5) (+ is both for string and number , string type coercion , bodmas)



// function number(num) {
   
// 	let index=0;
// 	for(let i=0; i<num.length; i++) {
// 		if(num[i]%2==0) {
// 			num[index]=num[i]
// 		    index++
// 		}
// 	}
// 	num.length=index
// 	for(let i=0; i<num.length; i++) {

// 		for(let j=i+1; j<num.length; j++) {
// 			if(num[i]==num[j]) {

// 				for(let k=j; k<num.length-1; k++) {
// 					num[k]=num[k+1]
// 				}
// 				num.length--
// 				j--
// 			}
// 		}
// 	}
// 	return num
// }
// console.log(number([1,2,3,2,4,5,6,4]))


// rotate array left

// function rotateArray(arr ,n){
//     n=n%arr.length
//     for(let i=0; i<n; i++){
//         arr.push(arr.shift())
//     }
//     return arr
// }
// let arr = [1,2,3,4,5]
// let n=2
// console.log(rotateArray(arr,n))


// length without lenght property

// let arr = [1,2,3,4,54,5]
// let count = 0
// for(let i=0; i<=arr[i]; i++){
//     count++
// }
// console.log(count)


//with reduce

// let arr = [1,2,3,4,5]
// let length = arr.reduce((count)=>count+1,1)
// console.log(length)


//add element to array without using push and unshift


// let arr = [1,2,3,4,5,6]
// arr[arr.length] = 7
// console.log(arr)

// let arr = [1,2,3,4,5]
// arr.splice(0,0,0)
// console.log(arr)


// let arr = [1,2,3,4]
// arr =  arr.concat(6,7,8)
//  console.log(arr)

// let arr = [1,2,3,4]
// arr  = [1,2,...arr]
// console.log(arr)

//remove elements without using pop

// let arr = [1,2,3,4,5]
// let pos = 2
// for(let i=pos; i<arr.length-1; i++){
//     arr[i] = arr[i+1]
// } 
// arr.length--
// console.log(arr)



//  without pop

// let arr = [1,2,3,4]
// arr.length = arr.length-1
// console.log(arr)



//reverse an array witohut using inbuilt methods

// let arr = [1,2,3,4,5]
// let temp = 0 
// for(let i=0; i<arr.length/2; i++){
//     temp = arr[i]
//     arr[i] = arr[arr.length-i-1]
//     arr[arr.length-i-1] = temp
// }
// console.log(arr)



//merge two array


// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9,10]

// arr1 = [...arr1,...arr2]
// console.log(arr1)



//factorial of a number

// let n = 5
// let factorial = 1
// for(let i=1; i<=n; i++){
//     factorial = factorial * i
// }
// console.log(factorial)



//shift elements to left

// let arr = [1,2,3,4,5]
// for(let i= 0 ;i<arr.length-1; i++){
//     arr[i]=arr[i+1]
// }
// arr.length--
// console.log(arr)



// Move each element of an array to the left, with the first element wrapping to the end.


// let arr = [1,2,3,4,5,6]
// let first = arr[0]
// for(let i=0; i<arr.length-1; i++){
//     arr[i] = arr[i+1]
// }
// arr[arr.length-1] = first
// console.log(arr)

//sort array

// let arr = [2,3,2,313,1,1,425,35,35,6]
// let temp = 0 
// for(let j=0; j<arr.length-1; j++){
//     for(let i=0; i<arr.length-1; i++){
//         if(arr[i]>arr[i+1]){
//             temp = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = temp
//         }
//     }
// }

// console.log(arr)




//function to check array elements are in ascending order

// let arr = [1,2,3,1,2,34,4]
// function checkOrder(num){
//     let ascending = true
//     let descending = true
//     for(let i=0; i<num.length-1; i++){
//         if(num[i]>num[i+1]){
//             ascending = false
//         }
//         if(num[i]<num[i+1]){
//             descending = false
//         }
//     }
//     if(ascending) return 'ascending'
//     if(descending) return 'descending'
//     return 'unsorted'
// }
// console.log(checkOrder(arr));





//remove obj holding non string values

// obj = {
//     a:1,
//     b:"str",
//     c:NaN,
//     d:4,
//     e:undefined,
//     f:()=>{}
// }
// for(let key in obj){
//     if(typeof obj[key] !== 'string'){
//         console.log(String(obj[key]))
//     }
// }


// Array.forEach: flip sign of numbers

// let arr = [1,-2,3,-4,5,-6,7]
// arr.forEach((value,index,arr)=>{
//     arr[index]=value*-1
// })
// console.log(arr)


//capitilise last letter of string

// let str = 'alex'
// let str2 = ''
// for(let i=0; i<str.length; i++){
//     if(i===str.length-1){
//         str2+=str[i].toUpperCase()
//     }
//     else{
//         str2+=str[i]
//     }
// }
// console.log(str2);



// let arr = [1,2,3,4,5,6,7,8,5]
// let value = arr.reduce((count,val)=>{
//     if(val===5){
//         count++
//     }
//     return count
// },0)
// console.log(value)


// for(let i=0; i<6; i++){
//     let row=' '
//     for(let j=0; j<i; j++){
//         row+=j+' '
//     }
//     console.log(row)
    
// }




//Quality Assessment

//length of array without length


// let arr = [1,2,3,4,5,6]
// let count = 0 
// for(let i=0; i<arr[i]; i++){
//     count++
// }
// console.log(count)



//push elements without length property

// let arr = [1,2,3,4,5,6]
// let num = 7
// arr[arr.length] = num
// console.log(arr)

// let arr  = [1,2,3,4,5]
// arr = arr.concat(6,7,8)
// console.log(arr)


//without unshift

// let arr = [1,2,3,4,5]
// let arr1 = [1,2,3,4]
// arr = [...arr1,...arr]
// console.log(arr)




//reverse array without built in methods

// let arr = [1,2,3,4,5,6]
// let arr1 = []
// for(let i=arr.length-1; i>=0; i--){
//     arr1.push(arr[i])
// }
// console.log(arr1);


//reaarange the elements so that first becomes last and first becomes last

// let arr = [1,2,3,4,5,6]
// let temp = 0

// temp = arr[0]
// arr[0]=arr[arr.length-1]
// arr[arr.length-1]=temp

// console.log(arr)


//merge two arrays

// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9]
// let arr = [...arr1,...arr2]
// console.log(arr)



//shift all elements to left by one place first element to last

// let arr = [0, 1, 2, 3, 4, 5, 6];

// let firstElement = arr[0]; // Store the first element

// for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1]; // Shift elements left
// }

// arr[arr.length - 1] = firstElement; // Move first element to last position

// console.log(arr); // Output: [1, 2, 3, 4, 5, 6, 0]




//sort array without sort()

// let arr = [2,3,4,1,5,7,0,8,6]
// let temp=0
// for(let i=0; i<arr.length-1; i++){
//     for(let j=0; j<arr.length-1; j++){
//         if(arr[j]>arr[j+1]){
//             temp = arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//         }
//     }
// }
// console.log(arr)

//rotate array to right n number of times

// let arr = [1,2,3,4,5]
// let n = 3
// for(let i=0; i<n; i++){
//     let lastElement  = arr[arr.length-1]
//     for(let j=arr.length-1; j>0; j--){
//         arr[j]=arr[j-1]
//     }
//     arr[0]=lastElement
// }
// console.log(arr)



//check number without .includes

// let arr = [1,2,3,4,5,6]
// let num = 5
// for(let i=0; i<arr.length; i++){
//     if(arr[i]===num){
//         console.log(true)
//     }
// }



// function sum(callback){
//     setTimeout(()=>{
//         callback()
//     },3000)
// }
// function a(){
//     let add =0
//     let arr = [1,2,3,4]
//     for(let i=0; i<3; i++){
//         add+=arr[i]
//     }
//     console.log(add)
// }
// sum(a)









// how to check if an object is empty?


// let obj = {
    
// }
// if(Object.keys(obj).length === 0){
//     console.log('true')
// }
// else{
//     console.log('false')
// }



//find the largest value key

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// let largestKey = null;
// let largestValue = -Infinity;

// for (let key in obj) {
//     if (obj[key] > largestValue) {
//         largestValue = obj[key];
//         largestKey = key;
//     }
// }

// // console.log(largestKey); // "c"


// symbol

// let obj = {
//     id:9451,
//     name:'dominique',
//     city:'sienna'
// }
// const myId = Symbol('Id')
// obj[myId] = '23948092490248092'
// console.log(obj)



// const myId = Symbol('Id')
// let obj = {
//     id:9451,
//     name:'dominique',
//     city:'sienna',
//     [myId]:'2948924892148924'
// }
// console.log(obj)


// Here's how to modify an arrow function to sum n numbers using the rest operator and higher-order functions (HOFs) in JavaScript:

// const sumNumbers = (...numbers) => {
//   return numbers.reduce((acc, curr) => acc + curr, 0);
// };

// console.log(sumNumbers(1, 2, 3, 4, 5)); // Output: 15





//errorhandling middleware


// const express = require('express');
// const app = express();

// // Error-handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack); // Log the error stack trace
//   res.status(500).send('Something broke!'); // Send a generic error response
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });


//reverse an array

// let arr = [1,2,3,4,5]
// let start = 0
// let end = arr.length-1
// while(start<end){
//     [arr[start],arr[end]] = [arr[end],arr[start]]
//     start++
//     end--
// }
// console.log(arr)

//with for loop

// let arr = [1,2,3,4,5]
// for(let start = 0, end = arr.length-1; start<end; start++,end--){
//      [arr[start],arr[end]] = [arr[end],arr[start]]
// }
// console.log(arr)



//push zero to front of  array


// let arr = [1,2,0,4,0,5,3,0]
// for(let i=0; i<arr.length; i++){
//     if(arr[i]===0){
//         arr.splice(i,1)
//         arr.unshift(0)
//     }
// }
// console.log(arr)


//merge and delete the duplicates

// let arr1 = [1,2,3,4,5]
// let arr2 = [3,4,5,6,7]
// let arr = []
// for(let i=0; i<arr1.length; i++){
//     arr[i] = arr1[i]
// }
// for(let j=0; j<arr2.length; j++){
//     arr[arr1.length+j] = arr2[j]
// }
// console.log(arr)
// for(let i=0; i<arr.length; i++){
    
// }
// let duplicates = []
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length; j++){
//         if(arr[i]==arr[j] && !duplicates.includes(arr[i])){
//             duplicates.push(arr[i])
//         }
//     }
// }
// console.log(duplicates)



//remove the repeating elements

// let arr = [1,2,3,4,5,6,7,3,4,5]
// let result = []
// for(let i=0;i<arr.length; i++){
//     let count = 0
//     for(let j=0; j<arr.length; j++){
//         if(arr[i]===arr[j]){
//             count++
//         }
//     }
//     if(count==1){
//         result.push(arr[i])
//     }
// }
// console.log(result)


//longest palindrome

// let str = "aabbcccdddd"
// let maxPalindrome = ''
// for(let i=0; i<str.length; i++){
//     for(let j=i; j<str.length; j++){
//         let subStr = str.slice(i,j+1)
//         let reverse = subStr.split('').reverse().join('')
//         if(reverse === subStr && subStr.length>maxPalindrome.length){
//         maxPalindrome = subStr
//         }
//     }
    
// }
// console.log(maxPalindrome)



//count palindrome in a string


// let str = 'aabbccddddede';
// let palindromes = new Set();

// for (let i = 0; i < str.length; i++) {
//     for (let j = i; j < str.length; j++) {
//         let subStr = str.slice(i, j + 1);
//         let reverse = subStr.split('').reverse().join('');
//         if (reverse === subStr) {
//             palindromes.add(subStr);
//         }
//     }
// }

// console.log("Unique palindromes:", palindromes.size);
// console.log([...palindromes]);




//add more grades for Eve

// let arr = [
//   { name: "Alice", age: 21, course: "Math", grades: [88, 92, 79] },
//   { name: "Bob", age: 23, course: "Physics", grades: [75, 85] },
//   { name: "Charlie", age: 22, course: "Chemistry", grades: [90, 91] },
//   { name: "David", age: 24, course: "Math", grades: [60, 70, 80] },
//   { name: "Eve", age: 20, course: "Physics", grades: [95] }
// ]
// let student = arr.find((s)=>s.name === 'Eve')
// if(student){
//     student.grades.push(67,98)
// }
// console.log(arr)




//add average field to each document


// let arr = [
//   { name: "Alice", age: 21, course: "Math", grades: [88, 92, 79] },
//   { name: "Bob", age: 23, course: "Physics", grades: [75, 85] },
//   { name: "Charlie", age: 22, course: "Chemistry", grades: [90, 91] },
//   { name: "David", age: 24, course: "Math", grades: [60, 70, 80] },
//   { name: "Eve", age: 20, course: "Physics", grades: [95] }
// ];

// for (let i = 0; i < arr.length; i++) {
//   let grades = arr[i].grades;
//   let sum = 0;

//   for (let j = 0; j < grades.length; j++) {
//     sum += grades[j];
//   }

//   let avg = grades.length > 0 ? sum / grades.length : 0;
//   arr[i].average = parseFloat(avg.toFixed(2)); // round to 2 decimals
// }

// console.log(arr);


//check an array is palindrome or not


// function isPalindrome(arr){
//   for(let i=0; i<Math.floor(arr.length/2);i++){
//     if(arr[i]!==arr[arr.length-1-i]){
//       return false
//     }
//   }
//   return true
// }

// console.log(isPalindrome([1,2,3,4,5,4,3,2,1]))





//remove vowels from string


// let str = 'javascript'
// let str1 =''
// let vowels = ['a','e','i','o','u']
// for(let i=0; i<str.length; i++){
//   if(!vowels.includes(str[i])){
//       str1+=str[i]
//   }
// }
// console.log(str1)



//print items specific to a user


// const data1 = [
//   {
//     _id: 101,
//     userId: 1,
//     amount: 250,
//     status: 'delivered',
//     items: ['pen', 'notebook'],
//   },
//   { _id: 102, userId: 1, amount: 120, status: 'pending', items: ['stapler'] },
//   {
//     _id: 103,
//     userId: 2,
//     amount: 550,
//     status: 'cancelled',
//     items: ['mouse', 'keyboard'],
//   },
//   { _id: 104, userId: 3, amount: 90, status: 'delivered', items: ['eraser'] },
// ];



// function printItems(userId){
//     let result = [];
//     for(let obj of data1){
//         if(obj.userId == userId){
//             obj.items.forEach((val)=>{
//                 result.push(val)
//             })
//         }
//     }
//     return result
// }

// console.log(printItems(1))





// const array = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];

// function flatArray(arr, result = []){
//     if(arr.length <= 0) return result;
    
//     if(Array.isArray(arr[0])){
//         flatArray(arr[0].slice(1), result)
//     }
//     result.push(arr[0])
    
//     return flatArray(arr.slice(1), result)
// }

// console.log(flatArray(array))


// let b;
// console.log(b); //un

// function B() {
//   let b;
//   console.log(b); // un
  
//   function E() {
//     b = 6;
//     console.log(b); // 6
//   }
  
//   b = 2;
  
//   E();
//   console.log(b); // 6
// }

// b = 3;

// B();



//hello world => olleh dlrow

// let str = 'hello world'
// let str1 = str.split(' ')
// let str2 = []

// for (let i = 0; i < str1.length; i++) {
//     let word = str1[i].split('')   // turn word into array
//     for (let j = 0; j < Math.floor(word.length / 2); j++) {
//         let temp = word[j]
//         word[j] = word[word.length - 1 - j]
//         word[word.length - 1 - j] = temp
//     }
//     str2.push(word.join(''))  // turn array back into string
// }

// console.log(str2.join(' '))


//optional chaining

// const invoices = [
//   {
//     id: 201,
//     customerId: 10,
//     total: 1500,
//     status: 'paid',
//     items: ['monitor', 'cable'],
//   },
//   {
//     id: 202,
//     customerId: 11,
//     total: 2300,
//     status: 'unpaid',
//     items: ['laptop'],
//   },
//   {
//     id: 203,
//     customerId: 10,
//     total: 600,
//     status: 'paid',
//     items: ['keyboard', 'mouse'],
//   },
//   {
//     id: 204,
//     customerId: 12,
//     total: 800,
//     status: 'cancelled',
//     items: ['webcam'],
//   },
//   {
//     id: 204,
//     customerId: 12,
//     total: 800,
//     status: 'rejected',
//     items: null,
//   },
// ];


// function getItems(data, value) {
//   // 1. Get all invoices where status matches the value
//   let matchedInvoices = data.filter(invoice => invoice.status === value);

//   // 2. If no invoice has that status
//   if (matchedInvoices.length === 0) {
//     console.log("status not found");
//     return;
//   }

//   // 3. Collect all items safely using optional chaining (?.)
//   //    If invoice.items is null or undefined, it will skip it
//   let items = [];
//   for (let invoice of matchedInvoices) {
//     if (invoice.items?.length) {   // only push if items is not null
//       items.push(...invoice.items); // spread (...) adds all items
//     }
//   }

//   // 4. If items is empty after checking
//   if (items.length === 0) {
//     console.log("items not found");
//     return;
//   }

//   // 5. Otherwise, show the items
//   console.log(items);
// }


// getItems(invoices,'processing')

//two arrays to obj


// const a = [20,29,24]
// const name = ["viaa","asmaai","adfd3"];

// let arr = []
// let i=0
// while(i<3){
//     let obj={}
//     obj.name = name[i]
//     obj.a = a[i]
//     i++
//     arr.push(obj)
// }

// console.log(arr)





//find the sum


// const ab = {a:[34,343,32],ad:{adad:34}}

// let sum = 0
// for(let i=0;i<ab.a.length;i++){
//     sum+=ab.a[i]
// }

// sum+= ab.ad.adad
// console.log(sum)





//find the sum


// const products = [
//   { id: 1, name: "Laptop", prices: [800, 850, 900] },
//   { id: 2, name: "Phone", prices: [300, 350] },
//   { id: 3, name: "Tablet", prices: [400, 450, 500] }
// ];
// let sum = 0


// for(let i=0; i<products.length;  i++){
//     sum+=products[i].prices.reduce((a,b)=>a+b)
// }
// console.log(sum)






//QA PDF

// let input = [{name:'John',age:25},{name:'Jane',age:30}]
// let output = input.map((elem)=>elem.name)
// console.log(output) //[ 'John', 'Jane' ]



//using map multiply elemnts of array by index


// let arr = [2,3,4]
// let multiple = arr.map((elem,index)=>elem*index)
// console.log(multiple)



//using map and filter double even numbers 


// let input = [1,2,3,4,5,6]
// let even = input.filter((elem)=>elem%2==0)
// let output = even.map((elem)=>elem*2)
// console.log(output)



//square of the 2D array

// let input = [[1,2],[3,4]]
// let output = input.map((elem)=>elem.map((elem)=>elem*elem))
// console.log(output)



//filter out words less than 2 characters and capitalise first letters

// let words = ['hi','hello','javascript','world']
// let filtered = words.filter((elem)=>elem.length>2)
// let capital = filtered.map((elem)=>elem.charAt(0).toUpperCase('')+elem.slice(1,elem.length))

// console.log(capital)



//replace  with even for even numbers and odd for odd numbers 

// let arr = [1,2,3,4,5]
// let str = arr.map((elem)=>elem%2==0 ? "even" : "odd")
// console.log(str)


//string to uppercase append length

// let str = ['hello','world']
// let modified = str.map((elem)=>elem.toUpperCase()+" Length :"+elem.length)  
// console.log(modified)



//if price less than 50 print details

// let products = [{name:'Product A',price: 30},{name:'Product B',price:60},{name:'Product C',price:40}]

// let output = products.filter((elem)=>elem.price<50)
// console.log(output)




//words characters less than 5

// let words = ['hello','world','code','javascript']
// let less = words.filter((elem)=>elem.length<5)
// console.log(less)


//number greater than 100 less than 1000

// let arr = [50,100,200,500,1500,2000]
// let less = arr.filter((elem)=>elem>100 && elem <1000)
// console.log(less)



// let str = 'hello    java    script'
// let str1 = str.split(' ').filter((elem)=>elem!==" ")
// let str2 = str1.join(' ')
// console.log(str2)



// const invoices = [
//   {
//     id: 201,
//     customerId: 10,
//     total: 1500,
//     status: 'paid',
//     items: ['monitor', 'cable'],
//   },
//   {
//     id: 202,
//     customerId: 11,
//     total: 2300,
//     status: 'unpaid',
//     items: ['laptop'],
//   },
//   {
//     id: 203,
//     customerId: 10,
//     total: 600,
//     status: 'paid',
//     items: ['keyboard', 'mouse'],
//   },
//   {
//     id: 204,
//     customerId: 12,
//     total: 800,
//     status: 'cancelled',
//     items: ['webcam'],
//   },
//   ]

// let obj = {}
// for(let key of invoices){
//     let value = key.status
//     if(!obj[value]){
//         obj[value] = [key]
//     }
//     else{
//         obj[value].push(key)
//     }
// }
// console.log(obj)