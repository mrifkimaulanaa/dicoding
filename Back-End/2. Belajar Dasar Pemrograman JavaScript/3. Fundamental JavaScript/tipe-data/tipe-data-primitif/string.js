// Double quote.
const firstName = "Lionel";
console.log(firstName);

// Single quote.
const lastName = 'Messi';
console.log(lastName);

// Backtick.
const fullName = `Lionel Messi`;
console.log(fullName);

// Mix.
console.log(`"I think it's awesome!" he answered confidently`);

// Escape string.
console.log('"I think it\'s awesome!" he answered confidently');
console.log("Windows path: C:\\Program Files\\MyProject");

// Concatenation.
const greet = "Hello";
const moreGreet = greet + " " + greet;
console.log(moreGreet);

// String template atau interpolation.
const birthYear = 2005;
console.log(`Hi nama saya ${fullName}, umur saya ${new Date().getFullYear() - birthYear}`);
