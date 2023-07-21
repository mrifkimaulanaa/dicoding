/*
  - https://www.dicoding.com/academies/256/tutorials/13872
  - https://www.youtube.com/watch?v=t3xYf5KpIfs -> 17:50
*/

// Dapat diberikan nilai sebelum dideklarasi atau hoisting.
age = 20;
var age;
console.log(age);

// Dapat diredeclare.
var age = 21;
console.log(age);
