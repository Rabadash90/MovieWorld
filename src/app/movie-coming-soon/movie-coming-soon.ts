import {apiKey, model} from "../constants";

export function buildComingSoonPage() {

    $('#resultTitle').text('Coming Soon');
    const url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + apiKey + '&language=en-US';

    model.resetMovieList();
    $.get(url, (data) => {
        const movies = data.results;
        for (const movie of movies) {
            model.addMovie(movie);
        }
    });
}