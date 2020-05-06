const maxLeeftijd = 112;

const calculateSupply = function(leeftijd, nodigPerDag){
    let totaalNodig = (nodigPerDag * 365) * (maxLeeftijd - leeftijd);
    console.log('You will need ' + totaalNodig + ' to last you until the ripe old age of ' + maxLeeftijd);
}

calculateSupply(3, 12)
calculateSupply(65, 23)
calculateSupply(15, 10)