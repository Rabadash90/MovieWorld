import {apiKey, model} from "../constants";

export function buildTopVotedCatPage() {
    $( '#content' ).empty();
    console.log('reached genre build page')
    $('<div>').appendTo($('#content')).addClass('row').append(
        $('<div>').addClass('col-sm-3').prop('id', 'navGenreContainer').append(
            $('<ul>').addClass('nav').addClass('nav-pills').addClass('nav-stacked').prop('id','navGenre')
        ),
        $('<div>').addClass('col-sm-9').prop('id','resultArea').append(
            $('<h1>').prop('id','resultTitle'),
            $('<ul>').prop('id','resultContent')
        )
    );

    const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=' + apiKey + '&language=en-US';
    $.get( url , function (data) { // URL with movies that meet the search criteria
        const genre = data.genres;
        for (let i = 0; i < genre.length; i++) {
            const genreID: number = genre[i].id;

            $('<li>').appendTo($('#navGenre')).append(
                $('<a>').text(genre[i].name).on( 'click' , () => {
                    $('#resultTitle').text(genre[i].name);
                    //$('<h1>').appendTo('#resultTitle').text('genre[i].name');
                    doSearchForGenres({genreID: genreID});
                })
            );
        }
    } );
}

function doSearchForGenres(parameters: { genreID: any }) {
    let genreID = parameters.genreID;
    model.resetMovieList();
    $( '#resultContent' ).empty();

    const url = 'https://api.themoviedb.org/3/discover/movie?&api_key=' + apiKey + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=' + genreID;

    model.resetMovieList();
    $.get(url, (data) => {
        const movies = data.results;
        for (const movie of movies) {
            model.addMovie(movie);
        }
    });
}