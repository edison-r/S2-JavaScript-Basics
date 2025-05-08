// Exercici 4

let obj = { nom: "Ona", edat: 25, ciutat: "Barcelona" };

for(const property in obj) {
    console.log(`${property}: ${obj[property]}`);
}

// Exercici 5

let numeros = [1, 2, 3, 4, 5, 6];

for(const num of numeros) {
    console.log(`${num}`)
    if(num === 5) {
        break;
    }
}