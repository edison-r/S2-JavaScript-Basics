// Exercici 1

let noms = ['Anna', 'Bernat', 'Clara'];

noms.forEach(nom => console.log(nom));

console.log("-------");
// Exercici 2

for(const nom of noms) {
    console.log(nom);
}

console.log("-------");

// Exercici 3

let numeros = [1, 2, 3, 4, 5, 6]

let numerosPar = numeros.filter((num) => num % 2 === 0);
console.log(numerosPar);
