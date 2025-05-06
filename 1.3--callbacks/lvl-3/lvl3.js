function processar(num, callback)
{
    callback(num);
}

function callback(num)
{
    console.log(`${num}`);
}

processar(6, callback);