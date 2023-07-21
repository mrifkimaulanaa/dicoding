const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

let firstName = "Leo";
let age = 20;

({ firstName, age } = profile);

console.log(firstName, age);
