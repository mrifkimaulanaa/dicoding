class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

const validateNumberInput = (...args) => {
  const messages = ["Argumen pertama", "Argumen kedua", "Argumen ketiga"];
  args.forEach((arg, index) => {
    if (typeof arg !== "number") {
      throw new ValidationError(`${messages[index]} harus number`);
    }
  });
};

const detectTriangle = (a, b, c) => {
  try {
    validateNumberInput(a, b, c);
  } catch (error) {
    return error.message;
  }

  if (a === b && b === c) {
    return "Segitiga sama sisi";
  }

  if (a === b || a === c || b === c) {
    return "Segitiga sama kaki";
  }

  return "Segitiga sembarang";
};

console.log(detectTriangle(1, 1, 1));
console.log(detectTriangle(4, 4, 2));
console.log(detectTriangle(3, 4, 6));
console.log(detectTriangle(1, false, 1));
console.log(detectTriangle("a", 4, 2));
console.log(detectTriangle(3, 4, null));
