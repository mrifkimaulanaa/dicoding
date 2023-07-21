// Arrow function expression.
const sayHello = (greet) => {
  return greet;
}
console.log(sayHello("Hello"));

// Parameter hanya 1.
const sayHi = greet => {
  console.log(greet)
}
sayHi("Hi");

// Jika tidak memiliki parameter sama sekali.
const sayHelloWorld = () => {
  console.log("Hello World");
}
sayHelloWorld();

// Ketika body hanya memiliki satu baris.
const sayName = name => console.log(`Nama saya ${name}`);
sayName("Boruto");

// Ketika sebuah fungsi perlu mengembalikan nilai, kita tidak perlu lagi menuliskan return (hanya bekerja untuk fungsi satu baris).
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));
