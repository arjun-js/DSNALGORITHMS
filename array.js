const numbers = [2,3,4,5];
const numbers1 = numbers;
console.log(numbers);
numbers.push(6);
console.log('push',numbers);
numbers.pop();
console.log('pop', numbers);
numbers.unshift(0);
console.log('unshift', numbers);
numbers.splice(2,0, 666);
console.log('splice', numbers);

console.log('copy', numbers1);






