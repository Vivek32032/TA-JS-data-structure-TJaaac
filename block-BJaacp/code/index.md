1. What will be the output and explain the reason.

```js
let obj = { name: 'Arya' };
obj = { surname: 'Stark' };
let newObj = { name: 'Arya' };
let user = obj;
let arr = ['Hi'];
let arr2 = arr;
```

Answer the following with reason after going through the above code:
 
- `[10] === [10]`   // both has different address.
- What is the value of obj? // answer  {surname: 'Stark'}  we have overwritten the obj value and assigned only surname so name is no longer available.
- `obj == newObj`  // false both have different value as both are assigned with different address
- `obj === newObj`  // false  both have  different value (diff address)
- `user === newObj` // false  user has address of obj but new obj has diff address 
- `user == newObj` // false  user has address of obj but new obj has diff address 
- `user == obj` // true  user has address of obj
- `arr == arr2`  // true arr2 has address of arr
- `arr === arr2` // true both has same address

1. What's will be the value of `person1` and `person2` ? Explain with reason. Draw the memory representation diagram.

<!-- To add this image here use ![name](./hello.jpg) -->
![memory diagram](./IMG_20211014_121630.jpghello.jpg)

```js
function personDetails(person) {
  person.age = 25;
  person = { name: 'John', age: 50 };
  return person;
}
var person1 = { name: 'Alex', age: 30 };
var person2 = personDetails(person1);
console.log(person1);
console.log(person2);
```

3. What will be the output of the below code:

```js
var brothers = ['Bran', 'John'];
var user = {
  name: 'Sansa',
};
user.brothers = brothers;
brothers.push('Robb');
console.log(user.brothers === brothers); //1. output  true  both are containing same memory reference
console.log(user.brothers.length === brothers.length); //2. output true both have same memory reference so both have same values.
```
