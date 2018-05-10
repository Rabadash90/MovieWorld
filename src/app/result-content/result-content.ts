import {model} from "../constants";
import {showDetails} from "../movie-details/movie-details";
import {addToFavourite} from "../movie-favourite/move-favourite";

export function renderMovies() {

    const $resultList = $('#resultContent');
    $resultList.html('');
    for (const movie of model.movieList) {
        $('<p>')
            .appendTo($resultList)
            //.addClass('list-group-item')
            .text(movie.title)
            .append($('<span>')
                .addClass('badge')
                .text('tes ')
                .append(
                    $('<button>')
                    //.text('details')
                        .addClass('btn btn-default')
                        .addClass('glyphicon glyphicon-menu-hamburger')
                        .attr('data-toggle','modal')
                        .attr('data-target','#myModal')
                        .on('click', () => showDetails(model.getMovie(movie.id))),
                    $('<button>')
                    //.text('favourite')
                        .addClass('btn btn-danger')
                        .addClass('glyphicon glyphicon-heart-empty')
                        .on('click', () => addToFavourite(model.getMovie(movie.id)))
                )
            );
    }
}