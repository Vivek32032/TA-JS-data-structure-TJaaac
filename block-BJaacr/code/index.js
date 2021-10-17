/*
Game of Thrones : Houses And People's Name
Try to first understand how Array in Objects & Objects in Array are arranged in this example.
Only when you don't get it by yourself, comeback again and read the hint
*/

// Write code for the following problems:
console.log(got);

// You have access to a variable named `got`. Which comes from `data.js` file

/*
Hint: (Structure of got variable)
  - got variable is an Object which has one key: `houses`
  - `houses` is an array of multiple house
  - Each house is an Object which has two keys: "name" and "people"
  - people is an array of all persons living in that particular house
  - And, each person is an object with "name" and "description" properties
*/

// 1. Log the value of key "houses"
// console.log(got.houses);
// 2. Log the length of the "houses" key
console.log(got.houses.length);

// 3. Log the name of all houses in got one by one
//  for (let value of got.houses){
//    alert(value.name);
//  }
// 4. Log the name of all the people in house Starks (index 0) one by one
// for (let value of got.houses[0].people) {
//   alert(value.name);
// }
// 5. Log the name of all the people in house Lannisters (index 1) one by one
// for (let value of got.houses[1].people) {
//   alert(value.name);
// }
// 6. Log the description of all the people in house Lannisters (index 1) one by one
// for (let value of got.houses[1].people) {
//   alert(value.description);
// }
// 7. Log the name and description of all the people in house Lannisters (index 1) one by one like `I am [name] and my bio is [description]`
// for (let value of got.houses[1].people) {
//   alert(`I am ${value.name} and my bio is ${value.description}`);
// }
// 8. Log the name and description of all the people in house Starks (index 0) one by one like `I am [name] and my bio is [description]`
// for (let value of got.houses[0].people) {
//   alert(`I am ${value.name} and my bio is ${value.description}`);
// }
// 9. Log the name and description of the people in house Starks whose name is `Robb Stark`
for (let value of got.houses[0].people) {
  if (value.name === "Robb Stark")
  alert(`I am ${value.name} and my bio is ${value.description}`);
}
// 10. Log the name and description of the people in house Lannisters whose name is `Tywin Lannister`
for (let value of got.houses[1].people) {
  if (value.name === "Tywin Lannister")
  alert(`I am ${value.name} and my bio is ${value.description}`);
}
// 11. Push the name of the houses in an array named `houseNames` and Log the array
let houseNames = [];
 for (let value of got.houses){
   houseNames.push(value.name)
 }
 console.log(houseNames);
// 12. Log the size of people in Starks house

console.log(got.houses[0].people.length)

// 13. Log the size of people in Lannisters house
console.log(got.houses[1].people.length)

// 14. Add the name and size of people in an object like {Starks: 4, Lannisters: 6} and log the object
let memberSizeOfHouses = {};
let tmp = [];
for (let value of got.houses){
  // tmp.push(`${value.name}: ${value.people.length}`)
  memberSizeOfHouses['value.name']= value.people.length;
}
console.log(memberSizeOfHouses) 
// 15. Log the name of all the people of all the houses in got one by one
for (let i=0;i<got.houses.length; i++){
for (let value of got.houses[i].people) {
  console.log(value.name)
}}
// 16. Push all names into a new array named `allPeople` and log the value array.
let allPeople = [];
for (let i=0;i<got.houses.length; i++){
  for (let value of got.houses[i].people) {
    allPeople.push(value.name)
  }}
  for(let value of allPeople){
  console.log(value);}
// 17. Log the value and length of `allPeople` array created above
for(let value of allPeople){
  console.log(value);}
  console.log(allPeople.length);
// 18. Push all descriptions into an array named `allDescription`
let allDescription = [];
for (let i=0;i<got.houses.length; i++){
  for (let value of got.houses[i].people) {
    allDescription.push(value.description)
  }}
  for(let value of allDescription){
  console.log(value);}
// 19. Log the value and length `allDescription`
for(let value of allDescription){
  console.log(value);}
  console.log(allDescription.length);
// 20. Only the the description whose length is more than 30. (use .length property on string to get the length)
for(let value of allDescription){
  if (value.length > 30){
    console.log(value);
}}