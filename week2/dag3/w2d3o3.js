const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]

const findSpider = function(array) {
    return array.find(function(superheroes){
        return superheroes.name === "Spiderman";
       });
   }
console.log(findSpider(superheroes));

   
const dubbel = function(array){
    let dubbelArray = [];
    array.forEach(i => {
        dubbelArray.push(i * 2);            
    });
    return dubbelArray;   
};

console.log(dubbel([1, 10, 3]));

const biggerThan10 = [1, 4, 3, 6, 9, 7, 11];

const filterNummer = biggerThan10.some((biggerThan10) => {
    return biggerThan10 > 10;
});

console.log(filterNummer);
   

const isItalyIn = ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'];

const includeItaly = isItalyIn.includes('Italy');
console.log(includeItaly);

const isBelow100 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]

const isZo = isBelow100.every((isBelow100) => {
    return isBelow100 <= 100;
});
console.log(isZo);

const numbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const totaal = numbers.reduce((runnigTotaal, numbers) => {
    return numbers + runnigTotaal
}, 0);
console.log(totaal);