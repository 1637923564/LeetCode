import leetCodes from "../src";

const myQueue = new leetCodes.StackImQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)

console.log(myQueue);
console.log(myQueue.peek()); // return 1

console.log(myQueue.pop()); // return 1, queue is [2]
console.log(myQueue);

console.log(myQueue.empty()); // return false