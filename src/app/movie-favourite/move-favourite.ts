import {dbUrl} from '../constants';
import {DefaultMovieModel} from "../movie-model";

const model = new DefaultMovieModel();
// Register model change event
$(model).on('modelchange', () => {
    renderFavourites();
});

export function buildFavouritePage() {
    model.resetMovieList();

    $('#resultTitle').text('Favourite List');
        $.get(dbUrl + 'getFav', (data) => {
            const movies = data;

            for (const movie of movies) {
                model.addMovie(movie.movie);
            }
        });
}

export function addToFavourite(movie) {
    $.post(dbUrl + 'addFav', (movie));
}

function deleteFromFavourite(movie) {
    //console.log('Movie I wanna delete is ', movie);
    $.post(dbUrl + 'delFav', (movie));
}

function renderFavourites() {

    const $resultFavList = $('#resultContent');
    $resultFavList.html('');
    for (const movie of model.movieList) {
        //console.log('movie ', movie);
        $('<li>')
            .appendTo($resultFavList)
            .addClass('list-group-item')
            .text(movie.title)
            .append(
                $('<button>')
                    .text('remove ')
                    .on('click', () => deleteFromFavourite(model.getMovie(movie.id)))
            );
    }
}
