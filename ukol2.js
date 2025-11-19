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
 

 
let slovo = prompt("zadejte slovo");
let pismenka = slovo.length;
console.log(pismenka);
let a=0;
let e=0;



 

 
/*****************************************************************/
 
// 6️⃣ Zjisti, zda zadané číslo je prvočíslo
 
/**
 
* Požádej uživatele o číslo. Pomocí ternárního operátoru zjisti,
 
* zda je číslo prvočíslo či nikoliv.
 
*/
 
// zde bude tvoje řešení