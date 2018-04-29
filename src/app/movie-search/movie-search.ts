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