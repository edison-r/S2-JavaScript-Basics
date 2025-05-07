// Exercici 1
const array1 = ["Sandía", "Manzana", "Banana"];
const array2 = ["Lechuga", "Pimiento", "Cebolla"];

const arrayCombined = [...array1, ...array2];
console.log(arrayCombined);

console.log("-------");

// Exercici 2

const sum = (...numbers) =>
{
    let result = 0;
    numbers.forEach(num => result += num);
    return result;
} 

result = sum(1, 2, 3, 4, 1,5);
console.log(result);

