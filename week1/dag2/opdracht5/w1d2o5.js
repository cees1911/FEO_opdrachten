const age = 22;
const isFemale = true;
const driverStatus = 'bob';
const name ='truus';
const totalAmount = 100;

if (isFemale){ 
    console.log ("kom er in het is ladynights")   
   
    if (age >= 18 && age <= 25) {
        console.log("Je mag naar binnen en we geven 50% korting");
    } 
    else if (age > 18){
        console.log("Je mag naar binnen");
    }
        else {
        console.log("helaas te jong je mag niet naar binnen");
    }

    if (driverStatus == 'bob'){
        console.log ("je mag naar huis rijden!");
    } else {
        console.log ("je moet lopen!"); 
        }
    
    if (name === 'Bram' || name === 'Sara'){
    console.log("1 bier van het huis!!!")
    }
}        
else {    
    if (age >= 18 && age <= 25) {
        console.log("Je mag naar binnen en we geven 50% korting");
    } 
    else if (age > 18){
        console.log("Je mag naar binnen");
    }
        else {
        console.log("helaas te jong je mag niet naar binnen");
    }

    if (driverStatus == 'bob'){
        console.log ("je mag naar huis rijden!");
    } else {
        console.log ("je moet lopen!"); 
        }

    if (name === 'Bram' || name === 'Sara'){
    console.log("1 bier van het huis!!!");
    }
}
if (totalAmount >= 25 && totalAmount <= 49){
    console.log ("AUB bitterballen van het huis");   
}
else if (totalAmount >=50 && totalAmount <=99){
        console.log ("AUB gratis portie nachos");
    }
     else  if (totalAmount >= 100){
         console.log ("AUB een flesje champagne");
     }   

