let addTheWordCool = ["nice", "awesome", "tof"];
console.log(addTheWordCool);
addTheWordCool.push("cool");
console.log("Add cool:", addTheWordCool);


const addTheWordCool2 = function(array) {
    array.push("cool");
    return array;
  };
console.log("Add cool:", addTheWordCool2(["nice", "awesome", "tof"]));

let amountOfElementsInArray =['appels', 'peren', 'citroenen'];
console.log(amountOfElementsInArray.length);

const amountOfElementsInArray2 = function(array){
    return array.length;
};
console.log(amountOfElementsInArray2(["appels", "peren", "citroenen"]))

const selectBelgiumFromBenelux = function(array){
    return array[0];
};
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 

const lastElementInArray2 = function(array){
    return array.pop();
};
console.log(lastElementInArray2(["Haas", "Cavia", "Kip", "Schildpad"]));

const presidents = ["Trump", "Obama", "Bush", "Clinton" , "pietje"];
const impeachTrumpSlice = function(array) {
    const nieuw = array.slice(1,5);
    console.log("Nieuwe array:", nieuw, "De onaangetaste array", array);
  return nieuw;
};
console.log(impeachTrumpSlice(presidents));

const impeachTrumpSplice = function(array) {
    const weg = array.splice(0, 1);
    console.log("removed element:", weg, "De mutated array, Trump is missing:", array);
    return array;
  };
  console.log(impeachTrumpSlice(presidents));

  const stringsTogether = function(array) {
    return array.join(" ");
  };
  console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-)"]));

  const combineArrays = function(array1, array2){
      return array1.concat(array2)
  };
  console.log(combineArrays(["a", "b", "c"], [1,2,3]));