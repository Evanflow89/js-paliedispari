// Palidroma
// Chiedere all’utente di inserire una parola

const userWord = prompt("Inserisci una parola");

// La parola dell'utente dev'essere divisa per lettere e trasformata in un Array.

const splitWord = userWord.split('');

// verifico se sta funzionando.

console.log(splitWord);

// Creare una funzione per capire se la parola inserita è palindroma