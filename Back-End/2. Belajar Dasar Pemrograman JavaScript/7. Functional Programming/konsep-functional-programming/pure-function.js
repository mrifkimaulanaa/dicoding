// Contoh 1.
const hitungLuasLingkaran = jariJari => 3.14 * (jariJari * jariJari);

console.log(hitungLuasLingkaran(4));
console.log(hitungLuasLingkaran(4));
console.log(hitungLuasLingkaran(8));
console.log(hitungLuasLingkaran(8));

// Contoh 2.
const createPersonWithAge = (age, person) => {
  return { ...person, age };
};

const person = { name: "Bobo" };

const newPerson = createPersonWithAge(18, person);

console.log({
  person,
  newPerson,
});
