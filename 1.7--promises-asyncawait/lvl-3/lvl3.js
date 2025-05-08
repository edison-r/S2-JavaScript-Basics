// Exercici 6

const arr = [11, 12, 13, 14];

const moreThanTen = (x) => x > 10;

console.log("Every: " + arr.every(moreThanTen));
console.log("Some: " + arr.some(moreThanTen));