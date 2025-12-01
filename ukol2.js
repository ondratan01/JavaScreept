console.log("Hello, World!"); // Standardní způsob
console.warn("Hello, World!"); // Varování
console.table(["Hello, World!"]); // Tablované zobrazení
console.info("Hello, World!"); // Informace
console.error("Hello, World!");

/*****************************************************************
 
console.log("hello world")
console.warn("hello world")
console.error("hello world")
console.table("hello world")
 
*****************************************************************
 
let num1 = prompt("zadej prvni cislo: ")
let num2 = prompt("zadej druhy cislo: ")
 
num1 = parseInt(num1)
num2 = parseInt(num2)
 
let vysledek = num1 + num2
console.log(vysledek)
 
*/
 /*
let vstup = prompt("zadej cislo: ")
input = parseInt(vstup)
 
if (vstup % 2 === 0){
    console.log("je sude")
}
else{
    console.log("je liche")
}
 */
/*****************************************************************
 
let input = prompt("zadejte teplotu v celsia: ")
input = parseFloat(input)
 
let vysledek = input * 9/5 + 32
console.log(vysledek)
 
*****************************************************************
 
let input = prompt("zadejte cislo: ")
input = parseInt(input)
 
if (input > 0){
    console.log("cislo je kladne")
}
else if(input < 0){
    console.log("cislo je zaporne")
}
else{
    console.log("cislo je nula")
}
 
*/
 /*
let input = prompt("zadejte slovo")
if (input.includes("a")){
    console.log("slovo obsahuje a")
}
else{
    console.log("slovo neobsahuje a")
}*/





// Uloha: Analyzátor textu
 

 
// Požádej uživatele o slovo. Zjisti kolik kterých písmen obsahuje.
 
// Použij .include() nad zadaným slovem. Vypiš do konzole.
 

 /*
let slovo = prompt("zadejte slovo");
let pismenka = slovo.length;
console.log(pismenka);
let a=0;
let e=0;
*/


 

 
/*****************************************************************/
 /*
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("PrvocisloForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const number = parseInt(document.getElementById("prvocislo").value);
        let x=2;
        let y=0;
        for(let i=2; i<=Math.sqrt(number); i++) {
            if(number%i===0) {
                y=y+1;
                break;
            }}
        if(y==0) {
            result = "Číslo je prvočíslo.";
        }
        else {
            result = "Číslo není prvočíslo.";
        }
        document.getElementById("result-prvocisla").textContent = result;
 
    });
});

*/

let cislo = prompt("zadejte cislo:");
console.log(jePrvocislo(cislo));


function jePrvocislo(cislo)
{
    if (cislo<=1) return "Číslo musí být větší než 1.";
    if (cislo === 2 || cislo === 3) return "Číslo je prvočíslo.";

    for (let i=2; i<=Math.sqrt(cislo);i++)//taky by šlo to číslo bez odmocniny
    {
        if(cislo % i === 0)
            return "Číslo není prvočíslo";
    }
    return "Číslo je prvočíslo."
}