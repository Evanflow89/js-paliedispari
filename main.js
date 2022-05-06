// Palidroma
// Chiedere all’utente di inserire una parola

const userWord = prompt("Inserisci una parola");

// La parola dell'utente dev'essere divisa per lettere e trasformata in un Array.

let splitWord = userWord.split('');

// verifico se sta funzionando stampandola a console.

console.log(splitWord);

// Inverto le lettere e ricreo la parola per capire se è palindroma.

let splitWordReverse = splitWord.reverse();


const reverseWord = splitWordReverse.join('');
console.log(reverseWord);

// Creare una funzione per capire se la parola inserita è palindroma

if (userWord === reverseWord) {
    alert("La parola è palindroma!");
} else {
    alert("La parola non è palidroma");
}