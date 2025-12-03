let cisla = [];
let cislo=0;
let x=0;
let sudy=0;
let lichy=0;
let nejvyssi = 0;
let suma =0;
let prumer = 0;

function funkce()
{
do
{
 cislo = prompt("zadejte cislo:");
if(cislo == 0)
{
    break;
}

 cisla[x] = cislo;
 x++;
}
while(cislo !== 0)


    for (let i = 0; i<x; i++)
    {
        console.log(cisla[i]);
        if((cisla[i] % 2)==0)
        {
            sudy++;
        }
        else
        {
            lichy++;
        }
        if(nejvyssi<cisla[i])
        {
            nejvyssi = cisla[i];
        }
        suma += parseFloat(cisla[i]);
    }
    console.log("cisel je je", x);
    console.log("suma je", suma);
    prumer = suma/x;
    console.log("nejvic je ", nejvyssi);
    console.log("sudych je", sudy);
    console.log("lichych je", lichy);
    console.log("prumer je", prumer);
}
    //addEventListener("click", funkce);

