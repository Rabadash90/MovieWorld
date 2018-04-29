import {apiKey} from '../constants';
import {showDetails} from '../movie-details/movie-details';
import {DefaultMovieModel} from '../movie-model';

// Globals
const model = new DefaultMovieModel();

// Register model change event
$(model).on('modelchange', () => {
    renderMovies();
});

export function buildSearchPage() {

    $('<form>')
        .appendTo('#content')
        .attr('id', 'movies-search-bar')
        .addClass('well')
        .addClass('search-bar')
        .on('submit', doSearch);

    $('<input>')
        .appendTo('#movies-search-bar')
        .attr('id', 'search-input')
        .addClass('form-control')
        .on('blur', doSearch);

    $('<button>')
        .appendTo('#movies-search-bar')
        .attr('id', 'search-btn')
        .text('Find movies')
        .addClass('btn')
        .addClass('btn-sm')
        .addClass('btn-default')
        .on('click', doSearch);

    $('<ul>')
        .appendTo('#content')
        .attr('id', 'result');

    preventFormDefaults();
}

export function buildTopVotedPage() {

    $('<ul>')
        .appendTo('#content')
        .attr('id', 'result');


    const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + apiKey + '&language=en-US';

    model.resetMovieList();
    $.get(url, (data) => {
        const movies = data.results;
        for (const movie of movies) {
            model.addMovie(movie);
        }
    });

   // preventFormDefaults();
    renderMovies();
}

export function buildTopVotedCatPage() {
    $( '#content' ).empty();
    $('<div>').appendTo('#content').addClass('row').attr('id', 'mainGridBodyGenre');
    $('<div>').appendTo('#mainGridBodyGenre').addClass( 'col-sm-5' ).attr('id','leftSide');
    $('<div>').appendTo('#leftSide').addClass('row').attr('id','nestedSequence');
    $( '<div>' ).appendTo( '#nestedSequence' ).attr( 'id' , 'genres' ).addClass( 'col-sm-4' );
    $( '<h1>' ).appendTo( '#genres' ).text( 'Genre' ).addClass('media-heading');
    $( '<div>' ).appendTo( '#nestedSequence' ).attr('id','titleTopMovies').addClass( 'col-md-8' );
    $('<div>').appendTo('#titleTopMovies').attr( 'id' , 'resultMovieListTitle');
    $('<div>').appendTo('#titleTopMovies').attr( 'id' , 'resultMovieList');
    $( '<div>' ).appendTo( '#mainGridBodyGenre' ).attr( 'id' , 'resultMovieListDetail' ).addClass( 'col-md-7' );

    const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=' + apiKey + '&language=en-US';
    $.get( url , function (data) { // URL with movies that meet the search criteria
        const genre = data.genres;
        for (let i = 0; i < genre.length; i++) {
            const genreID: number = genre[i].id;
            $( '<div>' ).appendTo( '#genres' )
                .text( genre[i].name )
                .addClass('movie-list-item')
                .on( 'click' , () => {
                    $('#resultMovieListTitle').empty();
                    $( '<h1>' ).appendTo( '#resultMovieListTitle' ).text( 'Top Movies' ).addClass('media-heading');
                    doSearchForGenres( {genreID: genreID} );
                } );
        }
    } );
}
function doSearchForGenres(parameters: { genreID: any }) {
    let genreID = parameters.genreID;
    model.resetMovieList();
    $( '#resultMovieListDetail' ).empty();
    $('<h1>').appendTo('#resultMovieList').text( 'Genre').addClass('media-heading');
    ////https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12
    const url = 'https://api.themoviedb.org/3/discover/movie?&api_key=' + apiKey + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=' + genreID;

    model.resetMovieList();
    $.get(url, (data) => {
        const movies = data.results;
        for (const movie of movies) {
            model.addMovie(movie);
        }
    });
}


export function buildCommingSoonPage() {

    $('<ul>')
        .appendTo('#content')
        .attr('id', 'result');

    const url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + apiKey + '&language=en-US';

    model.resetMovieList();
    $.get(url, (data) => {
        const movies = data.results;
        for (const movie of movies) {
            model.addMovie(movie);
        }
    });

    renderMovies();
}

export function buildMostPopularPage() {

    $('<ul>')
        .appendTo('#content')
        .attr('id', 'result');

    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=en-US';

    model.resetMovieList();
    $.get(url, (data) => {
        const movies = data.results;
        for (const movie of movies) {
            model.addMovie(movie);
        }
    });

    renderMovies();
}

function doSearch() {
    const query = $('#search-input').val();
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&query=' + query;

    model.resetMovieList();

    $.get(url, (data) => {
        const movies = data.results;
        for (const movie of movies) {
            model.addMovie(movie);
        }
    });
}

function renderMovies() {

    const $resultList = $('#result');
    $resultList.html('');
    for (const movie of model.movieList) {
        $('<li>')
            .appendTo($resultList)
            .addClass('list-group-item')
            .text(movie.title)
            .append(
                $('<button>')
                    .text('>')
                    .on('click', () => showDetails(model.getMovie(movie.id)))
            );
    }
}

function preventFormDefaults() {
    const formsNodeList = document.querySelectorAll('form');

    for (let i = 0; i < formsNodeList.length; i++) {
        formsNodeList[i].addEventListener('submit', (e) => {
            e.preventDefault();
        });
    }
}