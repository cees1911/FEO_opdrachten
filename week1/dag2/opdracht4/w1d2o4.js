const age = 43;
const isFemale = false;
const driverStatus = 'geenbob';

if (isFemale){ 
    console.log ("kom er in het is ladynights")   
   
    if (age >= 18) {
        console.log("Je mag naar binnen");
    } else {
        console.log("helaas te jong je mag niet naar binnen");
    }

    if (driverStatus == 'bob'){
        console.log ("je mag naar huis rijden!");
    } else {
        console.log ("je moet lopen!"); 
        }
}        
else {    
    if (age >= 18) {
        console.log("Je mag naar binnen");
    } else {
        console.log("helaas te jong je mag niet naar binnen");
    }

    if (driverStatus == 'bob'){
        console.log ("je mag naar huis rijden!");
    } else {
        console.log ("je moet lopen!"); 
        }
    
}
