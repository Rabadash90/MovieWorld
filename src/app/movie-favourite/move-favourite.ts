import {dbUrl} from '../constants';
import {DefaultMovieModel} from "../movie-model";
import {showDetails} from "../movie-details/movie-details";

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
    $.post(dbUrl + 'delFav', (movie), (response)=> {
        if(response == 'success') {
            console.log('if', response);
            renderFavourites();
        }
    });
}

function renderFavourites() {

    const $resultFavList = $('#resultContent');
    $resultFavList.empty().addClass('result-content');
    $('<table>')
        .addClass('table')
        .addClass('table-striped')
        .addClass('table-hover')
        .addClass('table-condensed')
        .prop('id', 'favouriteMoviesTHeader')
        .appendTo($resultFavList)
        .append(
            $('<thead>').append(
                $('<tr>').append(
                    $('<th>').text('Title')
                        .width('80%'),
                    $('<th>').text('Show Details')
                        .width('15%'),
                    $('<th>').text('Remove')
                        .width('15%')
                )
            ),
            $('<tbody>')
                .attr('id', 'favouriteMoviesTBody')
        );
    for (const movie of model.movieList) {
        //console.log('movie ', movie);
        $('<tr>')
            .appendTo($('#favouriteMoviesTBody'))
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
                $('<td>')
                    .append(
                        $('<a>')
                        //.text('details')
                            .addClass('btn btn-danger')
                            .addClass('glyphicon glyphicon-remove')
                            .on('click', () => deleteFromFavourite(model.getMovie(movie.id)))
                    )
            );
    }
}
