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
