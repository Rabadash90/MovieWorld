import {dbUrl} from '../constants';
import {DefaultMovieModel} from "../movie-model";

const model = new DefaultMovieModel();
// Register model change event
$(model).on('modelchange', () => {
    renderFavMovies();
});

export function buildFavouritePage() {
    model.resetMovieList();

        $.get(dbUrl + 'getFav', (data) => {
            const movies = data;

            for (const movie of movies) {
                model.addMovie(movie.movie);
            }
        });

    renderFavMovies();
}

export function addToFavourite(movie) {
    $.post(dbUrl + 'addFav', (movie));
}

function deleteFromFavourite(movie) {
    $.post(dbUrl + 'delFav', (movie));
}

function renderFavMovies() {

    const $resultFavList = $('#favResult');
    $resultFavList.html('');
    for (const movie of model.movieList) {
        console.log('movie ', movie);
        $('<li>')
            .appendTo($resultFavList)
            .addClass('list-group-item')
            .text(movie.title)
            .append(
                $('<button>')
                    .text('remove')
                    .on('click', () => deleteFromFavourite(model.getMovie(movie.id)))
            );
    }
}
