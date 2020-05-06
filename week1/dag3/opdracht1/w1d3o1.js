let person = {
    naam: 'Cees',
    leeftijd: 18,
    evaluations: [7, 10, 9]
};

console.log(person);
console.log(person.naam);
console.log(person['leeftijd']);
console.log(person.evaluations);

let kleurenKeuze = [
    "groen", "blauw", "rood"
];

console.log(kleurenKeuze);
console.log(kleurenKeuze.length);

kleurenKeuze.push('geel');
console.log(kleurenKeuze);

kleurenKeuze.push(123);
console.log(kleurenKeuze);

kleurenKeuze.push(groeten = {greeting: "Hi ik ben een object"});
console.log(kleurenKeuze[5]);