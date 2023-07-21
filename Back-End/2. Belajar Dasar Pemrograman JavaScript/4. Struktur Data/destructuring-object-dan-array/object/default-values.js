const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

const { firstName, age, isMale = false } = profile;
console.log(firstName, age, isMale)
