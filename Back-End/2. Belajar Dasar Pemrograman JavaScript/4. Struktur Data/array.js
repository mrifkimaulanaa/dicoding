// Membuat.
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

// Akses.
console.log(myArray[1]);

// Panjang.
console.log(myArray.length);

// Menghapus data di akhir array.
myArray.pop();
console.log(myArray);

// Menambah data di akhir array.
myArray.push("JavaScript");
console.log(myArray);

// Menghapus data di awal array.
myArray.shift();
console.log(myArray);

// Menambah data di awal array.
myArray.unshift("Apple");
console.log(myArray);

// Menghapus data tertentu cara 1.
delete myArray[1];
console.log(myArray);

// Menghapus data terntentu cara 2.
myArray.splice(1, 1);
console.log(myArray);

// Menambah data tertentu.
const month = ["January", "March", "April", "May"];
month.splice(1, 0, "February");
console.log(month);

// Cek apakah array.
console.log(Array.isArray(myArray));
