// Contoh normal.
// const json = '{ "name": "Yoda", "age": 20 }';

// try {
//   const user = JSON.parse(json);
//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

// Contoh bad json.
// const json = '{ bad json }';

// try {
//   const user = JSON.parse(json);

//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

// Normal tetapi undefined.
// const json = '{ "age": 20 }';

// try {
//   const user = JSON.parse(json);

//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

// Throw error.
// const json = '{ "age": 20 }';

// try {
//   const user = JSON.parse(json);

//   if (!user.name) {
//     throw new SyntaxError("'name' is required.");
//   }

//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(`JSON Error: ${error.message}`);
// }

// Mengatasi banyak jenis error.
const json = '{ "name": "Yoda", "age": 20 }';

try {
  const user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }

  errorCode;

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}
