const parOImpar = (arrNum) =>
{
    let resultado = "";

    for(let i = 0; i < arrNum.length; i++)
    {
        resultado +=  arrNum[i] % 2 == 0 ? `${arrNum[i]} és parell\n` : `${arrNum[i]} és imparell\n`;
    }
    return resultado;
}

const arrNum = [1, 4, 7, 10];
console.log(parOImpar(arrNum));