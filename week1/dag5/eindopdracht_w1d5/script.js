let kleurArray = [];

// maak array met background kleuren waarden om die later de background te kunnen veranderen
// Ik wilde het eerst dynamisch doen maar liep zo vast dat ik maar het KISS priciepe heb toegepast
let bgKleurArray = ["lightgrey", "red", "green", "yellow"]

const liLijst = document.querySelectorAll('li');
// nodig voor het testen console.log(liLijst);

// maak nu de liLijst een array die je kan gebruiken in een for loop
Array.from(liLijst).forEach (function(li){
    kleurArray.push(li);
})
// nodig voor het testen console.log(kleurArray);

// ga nu aan ieder item in li een event toeveoegen. lukt niet met addEventListener
// heb daarom gekozen voor onclick kan nu iig de background kleuren veranderen 
for (let i = 0; i <kleurArray.length; i++ ){
    kleurArray[i].onclick = function(){
    document.body.style.backgroundColor = bgKleurArray[i];
    document.getElementById('kleurnaam').innerHTML = (bgKleurArray[i]);
    }   
}

//ga nu de js maken voor het menu en voor het toggelen
let menuOpenDicht = false;

const menuOpen = function(){
    
    const getDropMenu = document.querySelector(".dropmenu");
    const getDropMenuUl = document.querySelector(".dropmenu ul");
    const getDropMenuLinks = document.querySelectorAll(".dropmenu a");

   // dit is het toggle gedeelte 
    if(menuOpenDicht === false){
        getDropMenuUl.style.visibility = "visible";
        getDropMenuUl.style.backgroundColor = "white";
        getDropMenu.style.width = "200px";

        let arraylengte = getDropMenuLinks.length;

        for(let i=0; i < arraylengte; i++){
            getDropMenuLinks[i].style.opacity = "1";
            }
        menuOpenDicht = true;
    } 
    else {     
        getDropMenuUl.style.visibility = "hidden";
        getDropMenuUl.style.backgroundColor = "";
        getDropMenu.style.width = "50px";

        let arraylengte = getDropMenuLinks.length;

        for(let i=0; i < arraylengte; i++){
            getDropMenuLinks[i].style.opacity = "0"
        }
        menuOpenDicht = false;
        
    }
}

    const menuDicht = function(){
        const getDropMenu = document.querySelector(".dropmenu");
        const getDropMenuUl = document.querySelector(".dropmenu ul");
        const getDropMenuLinks = document.querySelectorAll(".dropmenu a");

        getDropMenuUl.style.visibility = "hidden";
        getDropMenuUl.style.backgroundColor = " ";
        getDropMenu.style.width = "50px";

        let arraylengte = getDropMenuLinks.length;

        for(let i=0; i < arraylengte; i++){
            getDropMenuLinks[i].style.opacity = "0"
        }
        menuOpenDicht = false;

    }




