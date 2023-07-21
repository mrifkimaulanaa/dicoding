// Contoh 1.
function greeting(name, language) {
  if (language === "English") {
    console.log(`Good Morning ${name}!`);
  } else if (language === "French") {
    console.log(`Bonjour ${name}!`);
  } else {
    console.log(`Selamat Pagi ${name}!`);
  }
}

greeting("Harry", "French");

// Contoh 2.
const user = {
  id: 24,
  displayName: "kren",
  fullName: "Kylo Ren",
};

function introduce({ displayName, fullName }) {
  console.log(`${displayName} is ${fullName}`);
}

introduce(user);
