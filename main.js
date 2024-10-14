
///////// These are the Probs fron Codewars, They're all KYU 6.////////



/* 
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
Return the resulting string.

Note: input will never be an empty string

*/
function fakeBin(x){
  let index = 0,
      acc = ""
  let arr = x.split('')
  
  while(index < arr.length) {
    if(arr[index]<5) {
    arr[index] = '0'
  }else{
    arr[index]='1'
  }
  index++
  }arr.forEach(item=>{acc+=item})
  return acc
}


/* 
Complete the function which takes two arguments and returns all 
numbers which are divisible by the given divisor. 
First argument is an array of numbers and the second is the divisor.
*/

function divisibleBy(numbers, divisor) {
    return numbers.filter(n => n % divisor === 0)
  }


  /* 
  You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.
  

  */

function getLengthOfMissingArray(arrayOfArrays) {
  let result = (arrayOfArrays||[]).map(e => e ? e.length:0).sort((a,b)=>a-b)
  if(result.includes(0)){
    return 0
  }
  for(let i=0;i<result.length;i++){
    if(result[i+1] != result[i] +1){
      return result[i]+1
    }
      
  }
  return 0
}

/* 
Write a function, persistence, that takes in a positive 
parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits in num until 
you reach a single digit.

For example (Input --> Output):
*/

function persistence(num) {
  let result = 0,
      str = String(num)
  while(str.length>1){
    str = String([...str].reduce((prev,curr)=>prev*curr))
    result++
  }
 return result
}

/* 
You are given an array (which will have a length of at least 3, 
  but could be very large) containing integers. 
  The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
   Write a method that takes the array as an argument and returns this "outlier" N.



*/

function findOutlier(integers){
  
  let odd = integers.filter(e=>e%2),
      even = integers.filter(e=>e%2==0);
  
  return odd.length ==1 ? odd[0] :even[0]
  

}


/////////// The Following are the exercises from the HW.

//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
  pizza:["Deep Dish","South Side Thin Crust"],
  tacos:"Anything not from Taco bell",
  burgers:"Portillos Burgers",
  ice_cream:["Chocolate","Vanilla","Oreo"],
  shakes:[{
      oberwise:"Chocolate",
      dunkin:"Vanilla",
      culvers:"All of them",
      mcDonalds:"Sham-rock-shake",
      cupids_candies:"Chocolate Malt"
  }]
}


function displayFood(person){
  const entries = Object.entries(person)
  for (const [key,value] of entries){
    if( key === "shakes"){
      let value = new Map()
      console.log(`${key} ${value.entries().next()}`)
      
    }
    console.log(`${key} ${value}`)

  }
}
displayFood(person3)

// for (let i = 0; i < Object.keys(person3).length;i++){
//   if(Array.isArray(Object.values(person3)[i])){
//       console.log(Object.values(person3)[i])
//   }
// }



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
  
function Person(firstName,lastName,age,address,occupation){
  this.firstName = firstName,
  this.lastName = lastName
  this.age = age,
  this.occupation = occupation
  this.address = address
// Use an arrow to create the printInfo method

  this.printInfo = () => {
    console.log(`
    First Name: ${this.firstName}
    Last Name: ${lastName} 
    Age: ${this.age} 
    Occupation: ${this.occupation} 
    Address: ${this.address}`)
  }
// Create another arrow function for the addAge method that takes a single parameter

   this.addAge = ()=>{
    console.log(`${firstName}'s has been incresed by 1 year.`)
    this.age+=1
  }
}

person1 = new Person("Abraham","Campos",32,"Doral,FL","Physicist")
person2 = new Person("Rodolfo","Campos",34,"Santiago, Dominican Republic","Entrepeneur")

// Adding to the age 

console.log(person1.age)
person1.addAge()
console.log(person1.age)
person1.addAge()
console.log(person1.age)





// Adding to the age 




// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const isGreaterThanTen = (str)=>{
    return new Promise((resolve,reject) => {
          if (str.length>10){
            resolve(true)
          } else {
            reject (false)
          }
          }       
    )}

  isGreaterThanTen("Hello").then((result)=>{console.log('Big word')}).catch((error)=>{console.log("Small word")})










