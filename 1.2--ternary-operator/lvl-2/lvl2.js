function numberSign(num)
{
    return num === 0 ? "zero"
    : num > 0 ? "positiu" : "negatiu";
}

console.log(numberSign(0));

console.log("-------");

function trobarMaxim(a, b, c)
{
    return a > b && a > c ? `${a} es el mayor`
    : b > a && b > c ? `${b} es el mayor`
    : `${c} es el mayor`
}

console.log(trobarMaxim(8, 64, 128));