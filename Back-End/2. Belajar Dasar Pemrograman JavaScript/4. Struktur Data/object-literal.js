// Membuat object.
const character = {
  fullName: "Luke Skywaler",
  age: 19,
  species: "Human",
  "Hair Color": "Blond",
};

// Akses.
console.log(`Halo nama saya ${character.fullName}, rambut saya berwarna ${character["Hair Color"]}`);

// Menambah atau mengubah.
character.fullName = "Uzumaki Boruto";
character["Hair Color"] = "Yellow";

character.country = "Konoha";
console.log(character);

// Menghapus.
delete character.species;
console.log(character);
