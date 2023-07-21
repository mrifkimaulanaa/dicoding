const add = (() => {
  let counter = 0;
  return () => ++counter;
})();

console.log(add());
console.log(add());
console.log(add());
