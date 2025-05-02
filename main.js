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


/* SNACK 4 */
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer(ms) {
    return function () {
        setTimeout(() => {
            console.log('Tempo scaduto!')
        }, ms);
    }
}

let timer = creaTimer(3000);
timer();


/* SNACK 5 */
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

function cronometro(secondi) {
    const id = setInterval(() => {
        console.log(secondi);
    }, 1000);

    return id;
}

const intervallo = cronometro('secondi');

setTimeout(() => {
  clearInterval(intervallo);
  console.log("Intervallo fermato.");
}, 5000);


/* SNACK 6 */
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

function creaContatoreAutomatico(intervallo) {
    return function() {
      let contatore = 0;
      const id = setInterval(() => {
        contatore++;
        console.log(contatore);
      }, intervallo);
      
      return id; 
    };
}

const avviaContatore = creaContatoreAutomatico(1000); 
const contatoreId = avviaContatore();

setTimeout(() => {
  clearInterval(contatoreId);
  console.log("Contatore fermato.");
}, 5000);


/* SNACK 7 */
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

function eseguiEferma(messaggio, tempoAvvio, tempoStop) {
    setTimeout(() => {
      const id = setInterval(() => {
        console.log(messaggio);
      }, 1000); 
  
      setTimeout(() => {
        clearInterval(id);
        console.log("Messaggio fermato.");
      }, tempoStop);
    }, tempoAvvio);
}
  
eseguiEferma("Ciao, sto parlando!", 2000, 5000);