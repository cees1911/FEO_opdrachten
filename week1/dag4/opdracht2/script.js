
const knop = document.getElementById("mybutton");
knop.addEventListener('click', function(){
    alert('er is op de knop gedrukt')
});


const knop2 = document.getElementById("buttontwee");
let veranderBody = document.querySelector(".blue-background");
knop2.addEventListener('click', function(){
    veranderBody.classList.toggle("red-background");
})
