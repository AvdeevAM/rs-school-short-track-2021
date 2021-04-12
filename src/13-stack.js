/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  // constructor() {
  //   return new Array();
  // }

  push(element) {
    if (Array.isArray(this)) {
      this.Array.reverse().Array.push(element).Array.reverse();
    }
    // console.log(`this push: ${this}`);
    return this;
  }

  pop() {
    // console.log(`this pop: ${this}`);
    return this.Array.shift();
  }

  peek() {
    // console.log(`this peek: ${this[0]}`);
    return this[0];
  }
}

module.exports = Stack;
