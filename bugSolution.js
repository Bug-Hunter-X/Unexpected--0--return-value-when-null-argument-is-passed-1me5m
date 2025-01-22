function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.'); // Or: return NaN;  Or: return 0; //If 0 is intended for nulls, then keep this line.
  }
  return a + b;
}

console.log(foo(null, 5)); // Throws an Error
console.log(foo(5, null)); // Throws an Error
console.log(foo(5, 5)); // Output: 10