let movieFacts = {
    title: 'Puff the Magic Dragon',
    tijd: 30,
    stars: ['Puff', 'Jackie', 'Living Sneezes']
};

function printMovie(movieFacts) {
    console.log(movieFacts.title + ' lasts for ' + movieFacts.tijd + ' minutes');
    console.log('It stars ' + movieFacts.stars.join(', '));
}

console.log(printMovie(movieFacts));