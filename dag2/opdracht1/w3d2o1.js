
/*console.log("He hallo, ik ben eerste")
setTimeout(function(){ console.log("He hallo, ik ben tweede"); }, 1000);
console.log("He hallo, ik ben derde")*/

const huiswerkMaken = function(vak, callback) {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
    setTimeout (function () {
        callback();
    }, 2000);
  }
  
const klaarMetHuiswerk = function(){
    console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
}
huiswerkMaken("wiskunde", klaarMetHuiswerk);