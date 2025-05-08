// Exercici 5

const arr = [1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9];

const final = arr.filter((x) => x >= 10).map(x => x * 2).reduce((sum, x) => sum + x);
console.log(final);