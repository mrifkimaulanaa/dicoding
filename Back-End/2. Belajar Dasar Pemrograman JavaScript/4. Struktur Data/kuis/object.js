const restaurant = {
  name: "ZeroFiveMRM",
  city: "Rosario",
  "favorite drink": "Orange Water",
  "favorite food": "Peyek",
  isVegan: false,
};

const {
  name: fullName,
  "favorite drink": favoriteDrink,
} = restaurant;

console.log(fullName, favoriteDrink);
