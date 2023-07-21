function myNamedParameter({ param1, param2 }) {
  console.log(param1, param2);
}

myNamedParameter({
  param2: "Param 2",
  param1: "Param 1",
});
