// Join multiple arrays
let zero = 0;
let posNum = [1, 2, 3];
let negNum = [-1, -2, -3];

let numbers = negNum.concat(zero, posNum);

// [ -1, -2, -3, 0, 1, 2, 3 ]
// .concat method concatenate as multiple arguments are passed to the method. Returns a copy to the declared variable.