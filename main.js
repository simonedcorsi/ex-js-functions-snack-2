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

const operazione = (a, b, segno) => {
    segno(a, b);
}
        
operazione(2, 3, somma);


/* SNACK 4 */
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer(tempo) {
    return () => {
        setTimeout(() => {
            console.log('Tempo scaduto!')
        }, tempo);
    }
}

const timer = creaTimer(3000);
timer();


/* SNACK 5 */
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

function cronometro(messaggio) {
    setInterval(() => {
        console.log(messaggio);
    }, 1000);
}
cronometro(ciao)

/* SNACK 6 */
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

function creaContatoreAutomatico(intervallo) {
  let count = 0;
  return () => {
    setInterval(() => {
      count++;
      console.log(`Il contatore è arrivato a ${ count }`);
    }, intervallo)
  }
}
const contaOgniSecondo = creaContatoreAutomatico(1000);
contaOgniSecondo();

/* SNACK 7 */
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

function eseguiEferma(messaggio, intervallo, durata) {
  const intervalId = setInterval(() => {
    console.log(messaggio);
  }, intervallo);

  setTimeout(() => {
    clearInterval(intervalId);
  }, durata);
}
  
eseguiEferma("Ciao sono simone", 1000, 5000);