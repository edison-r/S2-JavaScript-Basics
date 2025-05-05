let arrNumbers = [1, 2, 3, 4, 5, 6,7 ];

/* function printNumbers(arrNumbers)
{
    for(let i = 0; i < arrNumbers.length; i++)
    {
        function print (arrNumbers)
        {
            console.log(arrNumbers[i]);
        }
        print(arrNumbers);
    } 
} */

const printNumbers = (arrNumbers) =>
{
    for(let i = 0; i < arrNumbers.length; i++)
    { 
        const print = (arrNumbers) => console.log(arrNumbers[i]);
        print(arrNumbers);
    }
};

printNumbers(arrNumbers);

document.addEventListener("DOMContentLoaded", function() {
    const verSolucion = document.getElementById("soluciones");
    const soluciones = document.querySelectorAll(".caja");
    let visible = false;

    verSolucion.addEventListener("click", function() {
        visible = !visible;
        soluciones.forEach((solucion) => {
            solucion.style.display = visible ? "block" : "none";
        });
    });

});

