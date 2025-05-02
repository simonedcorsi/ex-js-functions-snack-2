/* SNACK 1 */

// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.

function somma(a, b) {
    return a + b;
} 
 
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile

const sommaAnonima = function (a, b) {
    return a + b;
}
 
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

const somma = (a, b) => a + b;


/* SNACK 2 */

// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

const quadrato = n => n * n;


/* SNACK 3 */

// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

function operazione(a, b, segno) {
    return segno(a, b);
}

const somma = (a, b) => a + b;
const sottrazione = (a, b) => a - b;
const moltiplicazione = (a, b) => a * b;

console.log(operazione(5, 3, somma));          
