// Contoh 1.
const truthyArray = [1, "", "Hallo", 0, null, "Harry", 14].filter(item => Boolean(item));
console.log(truthyArray);

// Contoh 2.
const students = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const eligibleForScholarshipStudents = students.filter(({ score }) => score > 85);
console.log(eligibleForScholarshipStudents);
