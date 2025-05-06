function processar(num, callback)
{
    callback(num);
}

function calculadora(num1, num2, callbackCalc) {
    callbackCalc(num1, num2);
}

function callbackCalc(num1, num2) {
    console.log (num1 + num2);
}

calculadora(5, 8, callbackCalc);