import {dbUrl} from "../constants";

export function buildSearchHistoryPage() {

    $('#resultTitle').text('Search History');

    console.log('arrived in build search history page');
    $.get(dbUrl + 'getSearchHistory', (data) => {
        const searchHistory = data;
        const $resultList = $('#resultContent');

        console.log('arrived after get method');
        $resultList.html('');
        // Table Header
        $('<table>')
            .addClass('table')
            .addClass('table-striped')
            .addClass('table-hover')
            .addClass('table-condensed')
            .prop('id', 'searchHistoryTable')
            .appendTo($('#resultContent'))
            .append(
                $('<thead>').append(
                    $('<tr>').append(
                        $('<th>').text('Search Query'),
                        $('<th>').text('Total Results ')
                            .append(
                                $('<a>')
                                    .prop('href','#').append(
                                    $('<span>').addClass('glyphicon').addClass('glyphicon-menu-up')
                                )
                            ),
                        $('<th>').text('Date of Search ')
                            .append(
                                $('<a>')
                                    .prop('href','#').append(
                                    $('<span>').addClass('glyphicon').addClass('glyphicon-menu-up')
                                )
                            ),
                    )
                ),
                $('<tbody>')
                    .attr('id', 'searchHistoryTBody')
            );
        for (const searchItem of searchHistory) {
            //model.addMovie(movie.movie);
            console.log('arrived in build search history page');
            $('<tr>')
                .appendTo($('#searchHistoryTBody'))
                .append(
                    $('<td>').text(searchItem.query),
                    $('<td>').text(searchItem.count),
                    $('<td>').text(searchItem.date.substr(0,10))
                );
        }
    });
}