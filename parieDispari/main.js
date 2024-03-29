// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

let userChoose = prompt("Scegli tra pari e dispari");


let userNum = Number(prompt("Inserisci un numero tra 1 e 5"));

// Creo un array vuoto dove poter inserire la scelta dell'utente tra pari e dispari.

let oddEven = [];

// Funzione numero random:

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


// Finchè l'utente non inserisce pari o dispari continuo a chiedergli di scegliere, altrimenti inserisco la scelta nell'array vuoto.

while ((!userChoose.includes("dispari")) && (!userChoose.includes("pari"))) {
    userChoose = prompt("Scegli tra pari e dispari");
} oddEven.push(userChoose);

// Finchè l'utente non sceglie un numero compreso tra 1 e 5 continuo a chiedergli di inserirlo, altrimenti stampo il numero scelto come riferimento.

while (userNum > 5 || userNum < 1 || isNaN(userNum) == true) {
    userNum = Number(prompt("Inserisci un numero tra 1 e 5"));
}
console.log(`Hai scelto il numero ${userNum}!`);
console.log(`Hai scelto ${oddEven[0]}!`);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

const cpuNumber = randomNumber(1, 5);
console.log(`Il computer ha scelto il numero ${cpuNumber}!`);
// Sommiamo i due numeri

const sum = userNum + cpuNumber;
console.log(sum);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

if ((sum % 2 === 1) && (oddEven[0] === "dispari")) {
    console.log("Hai vinto tu!");
} else if
    ((sum % 2 === 1) && (oddEven[0] === "pari")) {
    console.log("Hai perso!");
} else if
    ((sum % 2 === 0) && (oddEven[0] === "pari")) {
    console.log("Hai vinto tu!");
} else {
    console.log("Hai perso!");
}
// Dichiariamo chi ha vinto.