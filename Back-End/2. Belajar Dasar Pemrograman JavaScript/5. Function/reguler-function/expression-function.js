// Contoh 1.
const greeting = function (name, language) {
  if (language === "English") {
    return `Good Morning ${name}!`;
  } else if (language === "French") {
    return `Bonjour ${name}!`;
  } else {
    return `Selamat Pagi ${name}!`;
  }
}

console.log(greeting("Ron", "English"));

// Contoh 2.
function displayResult(result) {
  console.log(result);
}

function sum(x, y, callback) {
  const result = x + y;
  callback(result);
}

sum(5, 5, displayResult)
