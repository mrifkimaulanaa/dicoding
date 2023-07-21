const value1 = 10;
const value2 = 12;

// And.
console.log(value1 < 15 && value2 > 10);
console.log(value1 > 15 && value2 > 10);

// Or.
console.log(value1 < 15 || value2 > 10);
console.log(value1 > 15 || value2 > 10);

// Not.
console.log(!(value1 < 15));
console.log(!(value1 < 15 && value2 > 10));
