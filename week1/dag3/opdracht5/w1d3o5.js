let colors = ['yellow', 'blue', 'red', 'orange', 'black'];
let i = 0;

//while (colors[i]) {
   // console.log(colors[i]);
  //  i++;
//}

//for (i = 0; i <= colors.length-1; i++){
   // console.log(colors[i]);
//}

//colors.forEach(element => console.log(element))


let kleuren ={
    kleura: 'rood',
    kleurb: 'blauw',
    kleurc: 'zwart',
    kleurd: 'geel',
    kleure: 'pimpelpaars'
};

for (let key of Object.keys(kleuren)) {
    let naam=kleuren[key];
    console.log(naam);
}