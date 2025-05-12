// Exercici 6

const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const resultat = true;
        if (resultat) {
            resolve("1ra Promesa 2sec");
        } else {
            reject("Error en la 1ra promesa");
        }
    }, 2000);
});

const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const resultat = true;
        if (resultat) {
            resolve("2da Promesa 3sec");
        } else {
            reject("Error en la 2da promesa");
        }
    }, 3000);
});

async function asyncTest() {
    try {
        const allPromises = await Promise.all([promesa1, promesa2]);
        console.log(allPromises);
    } catch (error) {
        console.log(error);
    }
}

asyncTest();