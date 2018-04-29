import {Movie} from "../Movie";

export function showDetails(movie) {
    //('<p>')
    //    .append('Rating: ' + movie.rating + ' / 10 (' + movie.votes + ' votes)');
    $('#result').html('')
    const detail = $('#content');
    $('<h1>').appendTo(detail).addClass('MovieDetail').text(movie.title);

    if(movie.posterPath != null) {
        $('<img>', {
            src: 'https://image.tmdb.org/t/p/w200' + movie.posterPath ,
            width: '20%'}).appendTo(detail);
    }
    $('<p>').appendTo(detail).text(movie.overview);
    $('<p>').appendTo(detail).text('Rating: ' + movie.rating + ' / 10 (' + movie.votes + ' votes)');
    $('<p>').appendTo(detail).text('Release Date: ' +  movie.releaseDate);
    $('<p>').appendTo(detail).text('Runtime: ' +  movie.runtime);
    console.log(movie.title + movie.id);
    console.log('Rating: ' + movie.rating + ' / 10 (' + movie.votes + ' votes)');
    console.log('ID: ' + movie.id);
    console.log('Title: ' +  movie.title);
    console.log('Overview: ' +  movie.overview);
    console.log('Rating: ' +  movie.rating);
    console.log('Votes: ' +  movie.votes);
    console.log('PosterPath: ' +  movie.posterPath);
    console.log('Release Date: ' +  movie.releaseDate);
    console.log('Runtime: ' +  movie.runtime);
    console.log('Stats: ' +  movie.status);
}