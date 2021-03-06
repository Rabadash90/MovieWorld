import {apiKey, model} from "../constants";
import {renderMovies} from "../result-content/result-content";

// Register model change event
$(model).on('modelchange', () => {
    renderMovies();
});

export function buildTopVotedPage() {


    $('#resultTitle').text('Top Rated');

    const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + apiKey + '&language=en-US';

    model.resetMovieList();
    $.get(url, (data) => {
        const movies = data.results;
        for (const movie of movies) {
            //console.log('movie tv ', movie.id)
            model.addMovie(movie);
        }
    });
}