// Membuat map.
const capital = new Map([
  ["Jakarta", "Indonesia"],
  ["London", "England"],
  ["Tokyo", "Japan"],
]);

// Akses.
console.log(capital.get("London"));

// Panjang.
console.log(capital.size);

// Menambah atau mengubah.
capital.set("New Delhi", "India");
console.log(capital);

// Cek.
console.log(capital.has("Jakarta"))

// Menghapus.
capital.delete("Tokyo");
console.log(capital);
