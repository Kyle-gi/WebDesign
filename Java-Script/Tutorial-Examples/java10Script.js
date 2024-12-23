let numbers = [1,2,3,4,5];
let sum = numbers.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue; //Return the updated accumulator value
},0);
console.log(sum);