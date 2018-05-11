import {apiKey, dbUrl, model} from '../constants';
import {renderMovies} from "../result-content/result-content";


// Register model change event
$(model).on('modelchange', () => {
    renderMovies();
});

export function buildSearchPage() {
    preventFormDefaults();
    doSearch();
}

export function doSearch() {
    const query = $('#search-input').val();
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&query=' + query;
    var searchQuery = query;
    $('#resultTitle').text('Results for').append($('<small>').text(' ' + query));
    model.resetMovieList();
    console.log("reached Do search")
    $.get(url, (data) => {
        const movies = data.results;
        $.post(dbUrl + 'addSearchQuery', {query: searchQuery, resultCount: movies.length});
        for (const movie of movies) {
            model.addMovie(movie);
        }
    });

}

function preventFormDefaults() {
    const formsNodeList = document.querySelectorAll('form');

    for (let i = 0; i < formsNodeList.length; i++) {
        formsNodeList[i].addEventListener('submit', (e) => {
            e.preventDefault();
        });
    }
}