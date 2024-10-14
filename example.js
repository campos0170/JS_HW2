const person = {
    id:252,
    username:"campos01",
    age:32,
    hobbies:["Software Developement","Gardening"],
    active:true
};


const keys = Object.keys(person);

//console.log(keys) // Arrays of the all the keys within the Object.

const values = Object.values(person)

const entries = Object.entries(person);

for (const [key,value] of entries){
    console.log(key);
    console.log(value);
}

/// Object Destructing in JS

const person2 = {
    name:'Domenic',
    age:21,
    gender:"Male"

}

function printDetails({name,age}){
    console.log(`${name}: ${age}`);
}

printDetails(person2)



