const user = {
  firstname: "Harry",
  lastName: "Protter",
};

const createUserWithNewLastName = (newLastName, user) => {
  return { ...user, lastName: newLastName };
}

const newUser = createUserWithNewLastName("Potter", user);

console.log(newUser);
