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



//find first and second largest number in an array

// let array = [1,2,3,4,5,6,4,3,2,2]

// let result = array.reduce(([largest ,secondLargest],num)=>{
//     return [
//         num > largest ? num : largest,
//         num > largest ? largest : (num > secondLargest ? num : secondLargest)
//     ]
// },[-Infinity,-Infinity])
// console.log(`largest : ${result[0]}`);
// console.log(`secondlargest : ${result[1]}`);



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
//     if(vowels.includes(str[i])){
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
// let swap = 0
// for(let i=0; i<arr.length; i++)


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
