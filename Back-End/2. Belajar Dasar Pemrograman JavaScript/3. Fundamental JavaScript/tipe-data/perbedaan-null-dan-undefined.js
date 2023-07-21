const carNull = {
  brand: "Ford",
  model: null,
};

const carUndefined = {
  brand: "Ford",
  model: undefined,
};

console.log(JSON.stringify(carNull), JSON.stringify(carUndefined));
