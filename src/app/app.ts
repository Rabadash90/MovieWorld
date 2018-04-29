import 'bootstrap';
import '../css/styles.less';
import 'less';
import * as router from './routing';
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// jQuery verwendet um einen event zu registrieren (sobald die seite / document geladen / ready ist)
$(document).ready(() => {

    // Setup routing mechanism
    router.setupRouting();

    // Register navigation callbacks
    $('#nav-home').click(() => {
        router.doRouting('home');
    });
    $('#nav-search').click(() => {
        router.doRouting('search');
    });
    $('#nav-topRated').click(() => {
        router.doRouting('topVoted20');
    });
    $('#nav-topRatedByGenry').click(() => {
        router.doRouting('topV20Category');
    });
    $('#nav-commingSoon').click(() => {
        router.doRouting('soonReleased');
    });
    $('#nav-popular20').click(() => {
        router.doRouting('popular20');
    });


});

/*
$(document).ready(function () {
    //const query = $searchInput.val();
    var query = 'red';
    //var apiKey = 'f4dabfae22b9d350c601cbe7a8b2be23';
    var url = 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&query=' + query;

    //model.resetMovieList();

    $.get(url, function (data) {
        //var movies =  data.results;
        ////const movies = data.results;
        //for (const movie of movies) {
        //    model.addMovie(movie);
        //}
        var movies = data.results; // die Response (data) ist bereits ein Json Objekt.
        _.each(movies, function (movie, index) {// Lodash each Funktion verwenden um über die File zu iterieren.
        //movies.forEach(function (movie){
            $('<li>') // JQuery verwendet um ein neues HTML Element zu erstellen und ins DOM einzufügen.
                .appendTo('#result')
                //.addClass('list-group-item')
                .text(movie.title)
                .append(
                    $('<button>')
                        .text('>')
                        .on('click', showDetails)
                );
        });
    });
});*/
/*
function showDetails() {
    console.log('movie clicked');
}
function doSearch() {
    $('<p>CLICKED</p>');
    var query = 'pirate';//$searchInput.val();
    //var apiKey = 'f4dabfae22b9d350c601cbe7a8b2be23';
    var url = 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&query=' + query;
    model.resetMovieList(); // movieList im Model zurücksetzen
    fetch('https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&query=' + query, {
        method: 'get'
    }).then((response) => {
        console.log(response.json());
    }).catch((err) => {
        console.log(err);
    });
    /*$.get(url, function (data) { // URL auf Filme mit Suchkriterium
        const movies = data.results;
        for (const movie of movies) { // Über Resultat iterieren
            model.addMovie(movie); // Jeden Film dem Model hinzufügen
        }
    });
    */
//}
//searchBtn.on('click', doSearch);


/*
$(model).on('modelchange', () => { // Auf Model-Change-Event
    renderMovies(); // reagieren
});

function renderMovies() {
    const $resultList = $('#result');
    $resultList.html('');
    for (const movie of model.movieList) { // Alle Filme im Model
        $('<li>') // anzeigen
            .appendTo($resultList)
            .addClass('list-group-item')
            .text(movie.title)
    }
}
*/

function callMyBackend() {
    // Sample GET
    fetch('http://localhost:3000/sample', {
        method: 'get'
    }).then((response) => {
        console.log(response.json());
    }).catch((err) => {
        console.log(err);
    });

    // Sample POST
    fetch('http://localhost:3000/sample', {
        method: 'post',
        body: JSON.stringify({data: ['a', 'b', 'c']})
    }).then((response) => {
        console.log(response.json());
    }).catch((err) => {
        console.log(err.json());
    });

}
callMyBackend();
