export function showDetails(movie) {
    //('<p>')
    //    .append('Rating: ' + movie.rating + ' / 10 (' + movie.votes + ' votes)');
    $('#resultContent').empty().addClass('result-content');
    const detail = $('#resultContent');
    $('#resultTitle').text(movie.title);
    //$('<h1>').appendTo(detail).addClass('MovieDetail').text(movie.title);
    $('<div>').addClass('row').appendTo(detail).append(
        $('<div>').addClass('col-sm-2').append(
            $('<img>', {
                src: 'https://image.tmdb.org/t/p/w200' + movie.posterPath
                })
        ),
        $('<div>').addClass('col-sm-1'),
        $('<div>').addClass('col-sm-5').append(
            $('<h4>').text('Description'),
            $('<p>').text(movie.overview),
            $('<p>').text('Rating: ' + movie.rating + ' / 10 (' + movie.votes + ' votes)'),
            $('<p>').text('Release Date: ' +  movie.releaseDate),
            $('<p>').text('Runtime: ' +  movie.runtime)
        )
    );
}
