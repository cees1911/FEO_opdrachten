// maakBroodjeKaas
// neem een sneetje brood.
// smeer boter.
// plakje kaas op doen
// sneetje brood er bovenop

const maakBroodjeKaas = function () {
    console.log('neem een sneetje brood');
    console.log('smeer boter');
    console.log('plakje kaas op doen');
    console.log('sneetje brood er bovenop');
}

maakBroodjeKaas()

const maakBroodjemet = function (beleg) {
    console.log('There you go, a sandwich with ', beleg);
}

maakBroodjemet('kaas')
maakBroodjemet('jam')

//*const calculateDiscountedPrice = function( totalAmount , discount ) {    
//let prijs = totalAmount - discount;

// return(prijs);
//}  

//console.log(calculateDiscountedPrice(13, 5));

const calculateDiscountedBulkPrice = function (totalAmount, discount) {

    if (totalAmount >= 25) {
        let prijs = totalAmount - discount;
        return (prijs);
    } else {
        return (totalAmount);
    }
}


console.log(calculateDiscountedBulkPrice(19, 10));