// Exercici 1
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hola, món");
  }, 2000);
});

// Exercici 2
promesa.then((salutacio) => {
    console.log(salutacio);
});

// Exercici 3
const promesa2 = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input === "Hola") {
                resolve("Hola!!");
            } else {
                reject("Salutacio incorrecta");
            }
        }, 2000);
    });
}

/* let resultat = "Hola";
promesa2(resultat)
    .then((missatge) => {
        console.log(missatge);
    })
    .catch((error) => {
        console.log(error);
    });
*/
// Exercici 4
async function asyncTest() {
    try {
        const missatge = await promesa;
        console.log(missatge);
    } catch (error) {
        console.log(error);
    }
}
asyncTest();
