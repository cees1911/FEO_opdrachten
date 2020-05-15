
let getUl = document.getElementsByTagName("ul")[0];

/* Het laden van de pagina voor de eerste keer
nog geen selectie gemaakt voorkomt het laden van een 
lege pagina */

const nameFilm = movies.map(hero => hero.Poster);
const filmId = movies.map(geek => geek.imdbID);
    
for(let i = 0; i < nameFilm.length; i++) {

    let posterNaam = nameFilm[i];
    let findCode = filmId[i];

    let newLi = document.createElement('li');
    let newLink = document.createElement('a');
    newLink.target = "_blank";
    let newImg = document.createElement('img');

    newImg.setAttribute("src", posterNaam);
    newLink.setAttribute("href", "https://www.imdb.com/title/" +  findCode);
    getUl.appendChild(newLi);
    newLi.appendChild(newLink);
    newLink.appendChild(newImg);

}

const radioButton = document.querySelectorAll(".filterButton");



Array.from(radioButton).forEach((rbt) => { 
    rbt.addEventListener('change', () => {
        (console.log(event.target.value));

        /* het leeg maken van de pagina voor dat een filter keus geplaast kan worden */
        while (getUl.firstChild) {
            getUl.firstChild.remove();
        }

        /* hier wordt de waarde opgeslagen waar de switch tegen test*/
        const stringForSwitch = event.target.value;

        /*Commetaar voor wincA: ik weet dat deze code niet DRY is.
        Wat ik ook probeerde om herhalende lijnen code in een functie te stoppen
        het is me niet gelukt. Om iets werkend in te lever heb ik voor deze switch methode
        gekozen. Ook omdat ik switch wel al kon en begrijp. */
        
        switch(stringForSwitch){

            case 'Avengers':

                /* voor het plaatje */
                const findEventPoster = movies.filter((filterObject) => {
                    return filterObject.Title.includes(stringForSwitch);
                }).map(adv => adv.Poster);

                /* voor de imdb id */
                const findEventId = movies.filter((filterObject) => {
                    return filterObject.Title.includes(stringForSwitch);
                }).map(adId => adId.imdbID);

                for(let i=0; i < findEventPoster.length; i++) {

                    let adPoster = findEventPoster[i];
                    let adLinkId = findEventId[i];

                    let newLi = document.createElement('li');
                    let newLink = document.createElement('a');
                    newLink.target = "_blank";
                    let newImg = document.createElement('img');

                    newImg.setAttribute("src", adPoster);
                    newLink.setAttribute("href", "https://www.imdb.com/title/" +  adLinkId);
                    getUl.appendChild(newLi);
                    newLi.appendChild(newLink);
                    newLink.appendChild(newImg);
                }                
            break;

            case 'X-Men':

                /* voor het plaatje */
                const findEventPoster2 = movies.filter((filterObject) => {
                    return filterObject.Title.includes(stringForSwitch);
                }).map(adv => adv.Poster);

                /* voor de imdb id */
                const findEventId2 = movies.filter((filterObject) => {
                    return filterObject.Title.includes(stringForSwitch);
                }).map(adId => adId.imdbID);

                for(let i=0; i < findEventPoster2.length; i++) {

                    let adPoster = findEventPoster2[i];
                    let adLinkId = findEventId2[i];

                    let newLi = document.createElement('li');
                    let newLink = document.createElement('a');
                    newLink.target = "_blank";
                    let newImg = document.createElement('img');

                    newImg.setAttribute("src", adPoster);
                    newLink.setAttribute("href", "https://www.imdb.com/title/" +  adLinkId);
                    getUl.appendChild(newLi);
                    newLi.appendChild(newLink);
                    newLink.appendChild(newImg);
                }
            break;

            case 'Batman':

                /* voor het plaatje */
                const findEventPoster3 = movies.filter((filterObject) => {
                    return filterObject.Title.includes(stringForSwitch);
                }).map(adv => adv.Poster);
                
                /* voor de imdb id */
                const findEventId3 = movies.filter((filterObject) => {
                    return filterObject.Title.includes(stringForSwitch);
                }).map(adId => adId.imdbID);
                
                for(let i=0; i < findEventPoster3.length; i++) {
                
                    let adPoster = findEventPoster3[i];
                    let adLinkId = findEventId3[i];
                
                        let newLi = document.createElement('li');
                        let newLink = document.createElement('a');
                        newLink.target = "_blank";
                        let newImg = document.createElement('img');
                
                        newImg.setAttribute("src", adPoster);
                        newLink.setAttribute("href", "https://www.imdb.com/title/" +  adLinkId);
                        getUl.appendChild(newLi);
                        newLi.appendChild(newLink);
                        newLink.appendChild(newImg);
                }
            break;

            case 'Princess':

                /* voor het plaatje */
                const findEventPoster4 = movies.filter((filterObject) => {
                    return filterObject.Title.includes(stringForSwitch);
                }).map(adv => adv.Poster);
                
                /* voor de imdb id */
                const findEventId4 = movies.filter((filterObject) => {
                    return filterObject.Title.includes(stringForSwitch);
                }).map(adId => adId.imdbID);
                
                for(let i=0; i < findEventPoster4.length; i++) {
                
                    let adPoster = findEventPoster4[i];
                    let adLinkId = findEventId4[i];
                
                        let newLi = document.createElement('li');
                        let newLink = document.createElement('a');
                        newLink.target = "_blank";
                        let newImg = document.createElement('img');
                
                        newImg.setAttribute("src", adPoster);
                        newLink.setAttribute("href", "https://www.imdb.com/title/" +  adLinkId);
                        getUl.appendChild(newLi);
                        newLi.appendChild(newLink);
                        newLink.appendChild(newImg);
                }
            break;
            
            case 'NieuweFilms': 

                const findEventPoster5 = movies.filter((filterObject) => parseInt(filterObject.Year) >= 2014).map(adv => adv.Poster);

                const findEventId5 = movies.filter((filterObject) => parseInt(filterObject.Year) >= 2014).map(adId => adId.imdbID);

                for(let i=0; i < findEventPoster5.length; i++) {
                
                    let adPoster = findEventPoster5[i];
                    let adLinkId = findEventId5[i];
                    
                        let newLi = document.createElement('li');
                        let newLink = document.createElement('a');
                        newLink.target = "_blank";
                        let newImg = document.createElement('img');
                    
                        newImg.setAttribute("src", adPoster);
                        newLink.setAttribute("href", "https://www.imdb.com/title/" +  adLinkId);
                        getUl.appendChild(newLi);
                        newLi.appendChild(newLink);
                        newLink.appendChild(newImg);
                }
                
            break;
        };

    });
    
});
    

