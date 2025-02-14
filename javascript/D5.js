/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'];
for (i = 0; i < pets.length; i++) {
  let stampa = pets[i];
  console.log('Esercizio1', stampa);
}
//semplicemente
console.log('Esercizio1', pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log('Esercizio2', pets);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse();
console.log('Esercizio3', pets);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
petProvvisory = pets.shift();
console.log('Esercizio4', pets);
pets.push(petProvvisory);
console.log('Esercizio4', pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
];
const licensePlate = 'yellow';
for (i = 0; i < cars.length; i++) {
  cars[i].licensePlate = licensePlate;
}
console.log('Esercizio5', cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push({
  brand: 'Fiat',
  model: 'panda',
  color: 'white',
  trims: ['pop', 'lounge', 'sport'],
});

cars.forEach((car) => {
  car.trims.pop();
});
console.log('esercizio6', cars);

const car5 = {
  brand: 'Mercedes',
  color: 'white',
  model: 'classeA',
  trims: ['sedan', 'sport'],
};

/*cars.push(car5);
for (let i = o; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log('esercizio6', cars);
*/
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
/*for (i = 0; i < cars.length; i++) {}*/

console.log('Esercizio7', cars[0].trims[0]);
justTrims.splice(cars.length, 0, cars[0].trims[0]);
justTrims.splice(cars.length, 0, cars[1].trims[1]);
justTrims.splice(cars.length, 0, cars[2].trims[2]);
console.log('Esercizio7', justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
cars.forEach((car) => {
  console.log('esercizio8', car.color.charAt(0) === 'b' ? 'Fizz' : 'Buzz');
});

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
/*let x = 0;
let y;
while (y === 32) {
  console.log('esercizio9', y);
  x = x++;
  y = numericArray[x];

  console.log('esercizio9', y);
}*/

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd'];
const positionsArray = [];
for (const char of charactersArray) {
  let position;
  switch (char) {
    case 'a':
      position = 1;
      break;
    case 'b':
      position = 2;
      break;
    case 'c':
      position = 3;
      break;
    case 'd':
      position = 4;
      break;
    case 'e':
      position = 5;
      break;
    case 'f':
      position = 6;
      break;
    case 'g':
      position = 7;
      break;
    case 'h':
      position = 8;
      break;
    case 'i':
      position = 9;
      break;
    case 'l':
      position = 10;
      break;
    case 'm':
      position = 11;
      break;
    case 'n':
      position = 12;
      break;
    case 'o':
      position = 13;
      break;
    case 'p':
      position = 14;
      break;
    case 'q':
      position = 15;
      break;
    case 'r':
      position = 16;
      break;
    case 's':
      position = 17;
      break;
    case 't':
      position = 18;
      break;
    case 'v':
      position = 20;
      break;
    case 'z':
      position = 21;
      break;
    default:
      position = 0;
  }
  positionsArray.push(position);
}
console.log('esercizio10', positionsArray);
