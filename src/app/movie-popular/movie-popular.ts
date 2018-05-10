import {apiKey, model} from "../constants";

export function buildMostPopularPage() {

    $('<ul>')
        .appendTo('#resultArea')
        .attr('id', 'resultContent');

    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=en-US';

    $('#resultTitle').text('Most Popular');
    model.resetMovieList();
    $.get(url, (data) => {
        const movies = data.results;
        for (const movie of movies) {
            model.addMovie(movie);
        }
    });
    console.log('this is a test ', model.movieList);
}