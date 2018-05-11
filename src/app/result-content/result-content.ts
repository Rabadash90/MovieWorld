import {model} from "../constants";
import {showDetails} from "../movie-details/movie-details";
import {addToFavourite} from "../movie-favourite/move-favourite";

export function renderMovies() {

    const $resultContent = $('#resultContent');
    $resultContent.empty().addClass('resultContent');
    $('<table>')
        .addClass('table')
        .addClass('table-striped')
        .addClass('table-hover')
        .addClass('table-condensed')
        .prop('id', 'renderMoviesTHeader')
        .appendTo($('#resultContent'))
        .append(
            $('<thead>').append(
                $('<tr>').append(
                    $('<th>').text('Title')
                        .width('70%'),
                    $('<th>').text('Show Details')
                        .width('15%'),
                    $('<th>').text('Add to Favourites')
                        .width('15%')
                )
            ),
            $('<tbody>')
                .attr('id', 'renderMoviesTBody')
        );
    for (const movie of model.movieList) {
        console.log('found results')
        $('<tr>')
            .appendTo($('#renderMoviesTBody'))
            .append(
                $('<td>').text(movie.title),
                $('<td>')
                    .append(
                        $('<a>')
                        //.text('details')
                            .addClass('btn btn-default')
                            .addClass('glyphicon glyphicon-menu-hamburger')
                            .on('click', () => showDetails(model.getMovie(movie.id)))
                    ),
                $('<td>').append(
                    $('<button>')
                    //.text('favourite')
                        .addClass('btn btn-danger')
                        .addClass('glyphicon glyphicon-heart-empty')
                        .on('click', () => addToFavourite(model.getMovie(movie.id)))
                )
            );
    }
}