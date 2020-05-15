
const knop = document.getElementsByClassName("big-five-button")
let getUl = document.getElementById("spotted-animals-list");

Array.from(knop).forEach(element => {element.addEventListener ('click', () => {
let newLi = document.createElement("li");
newLi.innerHTML = event.target.innerHTML; 
getUl.appendChild(newLi);  
    })
});

const verwijder = document.getElementById("remove-first-item-button");
verwijder.addEventListener( 'click' , () => {
    let item =document.getElementById("spotted-animals-list")
    item.removeChild(item.childNodes[0]);
});