import leetCodes from "../src";

const myStack = new leetCodes.QueueImStack();
myStack.push(1);
// console.log(myStack);

myStack.push(2);
// console.log(myStack);
// console.log(myStack.top()); // 返回 2
console.log(myStack.pop()); // 返回 2

console.log(myStack.top()); // 1
console.log(myStack.pop()); // 返回 1
console.log(myStack.top()); // undefined
console.log(myStack.empty()); // 返回 False