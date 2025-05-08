// Exercici 3

const objecte1 = {
    nombre: "Francisco",
    edad: 27,
};

const objecte2 = { ...objecte1 };

objecte2.nombre = "Juan";
objecte2.edad = 45;

console.log(objecte1);
console.log(objecte2);

console.log("-------");

// Exercici 4

const arr = ["Hamilton", "Verstappen", "Norris", "Russell", "Alonso"];
let first, second, rest;

[first, second, ...rest] = arr;

console.log(first);
console.log(second);
console.log(rest);