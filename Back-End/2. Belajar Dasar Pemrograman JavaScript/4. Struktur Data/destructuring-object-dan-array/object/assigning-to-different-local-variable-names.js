const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

const {
  firstName: localFirstName,
  lastName: localLastName,
  age: localAge,
} = profile;

console.log(localFirstName, localLastName, localAge);
