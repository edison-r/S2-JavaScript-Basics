// Exercici 5

function sum(x, y, z) 
{
    return x + y + z;
}

const arr = [2, 3, 10];

console.log(sum(...arr));

// Exercici 6

const obj1 = {
    especie: "Gato",
    nombre: "Canelo",
};

const obj2 = {
    raza: "Europeo común",
    color: "Rubio Atigrado",
    edad: 18,
};

const objCombined = { ...obj1, ...obj2 }

console.log(objCombined);