// Contoh 1.
function multiply(a, b) {
  return a * b;
}

let result = multiply(10, 2);
console.log(result)

// Contoh 2.
function greeting(name, language) {
  if (language === "English") {
    return `Good Morning ${name}!`;
  } else if (language === "French") {
    return `Bonjour ${name}!`;
  } else {
    return `Selamat Pagi ${name}!`;
  }
}

let greetingMessage = greeting("Harry", "French");
console.log(greetingMessage);
