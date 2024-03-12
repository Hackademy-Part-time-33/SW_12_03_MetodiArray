/*
Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.
Esempio:
Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
Output: [8, 7, 6, 5, 3, 2, 1, -2, -4]
Variante:
Prova ad ordinali in modo crescente.
*/

/*
let array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
array.sort((a, b) => b - a);
// array.sort((a, b) => a - b);
console.log(array);
*/

/*
Traccia 3:
Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
Primo step: eliminare gli spazi e i segni di punteggiatura:
Suggerimento: Puoi eliminare spazi e segni di punteggiatura usando → str.replace(/\W/g, "")
Esempio:
Input: “i topi non avevano nipoti”
Output: true
*/

let str = `i topi non avevano nipoti`;
let pali = (phrase) => {
    phrase = phrase.replace(/\W/g, "");
    console.log(phrase);
    let reversphrase = phrase.split("").reverse().join("");
    return phrase === reversphrase;

}

console.log(pali(str));

/*
Traccia 4: 
Scrivere una funzione che permetta di filtrare soltanto le parole all’interno di un array:
let mixArray = [1, true, ‘hackademy’, 100, ‘Javascript’, false, null, ‘php’]
il risultato dovra’ dare, let filtered = [‘hackademy’, ‘Javascript’, ‘php’]

Suggerimento: provate a filtrare in base al tipo di dato (operatore typeof)
*/

let mixArray = [1, true, 'hackademy', 100, 'Javascript', false, null, 'php'];

let filterStrings = (array) => array.filter(item => typeof item === 'string');

let filtered = filterStrings(mixArray);

console.log(filtered);


/*
Traccia 5:
 Scrivi una funzione che dati 2 array di 10 elementi interi casuali compresi tra 1 e 10, permetta di effettuare, una delle seguenti operazioni: 
addizione
sottrazione
moltiplicazione
divisione
Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.
Esempio: Input: a= [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b= [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione" Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]
*/

//let array1 = Array.from({length: 10}, () => Math.floor(Math.random() * 10) + 1); "METODO TROVATO SU "STACKOVERFLOW"
//let array2 = Array.from({length: 10}, () => Math.floor(Math.random() * 10) + 1); 
let array1 =[];
let array2= [];
let result = [];
let arraylenght = 10;

function createrray(array) {
    for (i=0; i<=arraylenght; i++) {
        array[i] = (Math.floor(Math.random() * 10)) + 1;
    }

}

createrray(array1);
createrray(array2);

console.log(array1);
console.log(array2);

let sum = (a, b, c) => {for (i=0; i<=arraylenght; i++) {c[i] = a[i] + b[i]} return c;}
let sub = (a, b, c) => {for (i=0; i<=arraylenght; i++) {c[i] = a[i] - b[i]} return c;}
let div = (a, b, c) => {for (i=0; i<=arraylenght; i++) {c[i] = a[i] / b[i]} return c;}
let mol = (a, b, c) => {for (i=0; i<=arraylenght; i++) {c[i] = a[i] * b[i]} return c;}

console.log(sum(array1, array2, result));
console.log(sub(array1, array2, result));
console.log(div(array1, array2, result));
console.log(mol(array1, array2, result));


