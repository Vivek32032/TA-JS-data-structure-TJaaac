// 1. Create an array named numbers and store 5 number values in it
let numbers =[1,2,3,4,5];

// 2. Calculate the sum of array items and print it to the console using console.log()
let sum=0;
for(let number of numbers){
    sum +=number;
}
console.log(sum);

// 3. Calculate the average of array items and print it to the console using console.log()
let avg = sum/numbers.length
console.log(avg);
// 4. Find the highest number in the array and print it to the console using console.log()
let maxNum=numbers[0];
for(let i=1; i<numbers.length;i++){
    if(maxNum<numbers[i]){
        maxNum=numbers[i];
    } 
}console.log(maxNum);

// 5. Find the lowest number in the array and print it to the console using console.log()
let minNum=numbers[0];
for(let i=1; i<numbers.length;i++){
    if(minNum>numbers[i]){
        minNum=numbers[i];
    } 
}console.log(minNum);
// 6. Find the even numbers in the array and print them to the console using console.log()
let evenNum=[];
for(let i=1; i<numbers.length;i++){
    if(numbers[i]%2===0){
        evenNum.push(numbers[i]);
    } 
}console.log(evenNum);
// 7. Find the odd numbers in the array and print them to the console using console.log()
let oddNum=[];
for(let i=1; i<numbers.length;i++){
    if(numbers[i]%2!==0){
        oddNum.push(numbers[i]);
    } 
}console.log(oddNum);

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let divByFive=[];
for(let i=1; i<numbers.length;i++){
    if(numbers[i]%5 === 0){
        divByFive.push(numbers[i]);
    } 
}console.log(divByFive);
// 9. Log all the element of the array one by one
for(let elementsOfArray of numbers){
    console.log(elementsOfArray);
}

// 10. Find all the number in the array that is divisible by 3

let divByThree=[];
for(let i=1; i<numbers.length;i++){
    if(numbers[i]%3 === 0){
        divByThree.push(numbers[i]);
    } 
}console.log(divByThree);