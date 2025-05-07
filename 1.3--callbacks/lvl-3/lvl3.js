// Exercici 5
const processarCadena = (str, callbackUpper) => callbackUpper(str);

const callbackUpper = (str) => {
    return str.toUpperCase();
}

let str = "eSte sTrinG seRá eN maYúsCulas"
const strMayus = processarCadena(str, callbackUpper);

console.log(strMayus);