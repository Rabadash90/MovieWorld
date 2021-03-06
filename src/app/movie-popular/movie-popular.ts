import {apiKey, model} from "../constants";

export function buildMostPopularPage() {

    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=en-US';

    $('#resultTitle').text('Most Popular');
    model.resetMovieList();
    $.get(url, (data) => {
        const movies = data.results;
        for (const movie of movies) {
            model.addMovie(movie);
        }
    });
}