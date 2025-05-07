// Exercici 3
const esperarISaludar = (nom, saluteCallback) => 
{
    setTimeout(() => {
        saluteCallback(nom);
    }, 2000); 
}

const saluteCallback = (nom) => console.log(`¡Hola, ${nom}!`);
esperarISaludar("Juan José", saluteCallback);

// separador de respuestas en la consola
setTimeout(() => {
    console.log("----------"); 
}, 3000);

// Exercici 4
const processarElements = (arr, arrayCallback) => {
    setTimeout(() => { // setTimeout agregado para que las respuestas se muestren en orden en consola
        arrayCallback(arr);
    }, 4000); 
}

const arrayCallback = (arr) =>
{
    arr.forEach((element) => console.log(element));
}

const arr = [1, "callback", true, 2, "Hola", false];
processarElements(arr, arrayCallback);