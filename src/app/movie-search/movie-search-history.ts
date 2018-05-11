import {dbUrl} from "../constants";

export function buildSearchHistoryPage() {

    $('#resultTitle').text('Search History');

    $.get(dbUrl + 'getSearchHistory', (data) => {
        const searchHistory = data;
        const $resultList = $('#resultContent');

        $resultList.empty().addClass('result-content');
        // Table Header
        $('<table>')
            .addClass('table')
            .addClass('table-striped')
            .addClass('table-hover')
            .addClass('table-condensed')
            .prop('id', 'searchHistoryTable')
            .appendTo($resultList)
            .append(
                $('<thead>').append(
                    $('<tr>').append(
                        $('<th>')
                            .text('Search Query').append(
                            $('<input>').width('20%').addClass('form-control').prop('id', 'searchQueryInput').on('keyup', () => filterSearchQuery()).appendTo($resultList)
                        ),
                        $('<th>').text('Total Results ')
                            .append(
                                $('<input>').width('20%').addClass('form-control').prop('id', 'searchResultInput').prop('placeholer','Serach..').on('keyup', () => filterResults()).appendTo($resultList)
                            ),
                        $('<th>').text('Date of Search ')
                            .append(
                                $('<input>').width('20%').addClass('form-control').prop('id', 'searchDateInput').prop('placeholer','Serach..').on('keyup', () => filterDate()).appendTo($resultList)
                            ),
                    )
                ),
                $('<tbody>')
                    .attr('id', 'searchHistoryTBody')
            );
        for (const searchItem of searchHistory) {
            console.log('arrived in build search history page');
            $('<tr>')
                .appendTo($('#searchHistoryTBody'))
                .prop('id', 'trline')
                .append(
                    $('<td>').text(searchItem.query),
                    $('<td>').text(searchItem.count),
                    $('<td>').text(searchItem.date.substr(0,10))
                );
        }
    });
}

function filterResults() {

    var input, filter, table, tr, td, i;
    input = document.getElementById("searchResultInput");
    console.log('input: ',input);

    filter = input.value.toUpperCase();
    table = document.getElementById("searchHistoryTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function filterDate() {

    var input, filter, table, tr, td, i;
    input = document.getElementById("searchDateInput");
    console.log('input: ',input);

    filter = input.value.toUpperCase();
    table = document.getElementById("searchHistoryTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function filterSearchQuery() {

    var input, filter, table, tr, td, i;
    input = document.getElementById("searchQueryInput");
    console.log('input: ',input);

    filter = input.value.toUpperCase();
    table = document.getElementById("searchHistoryTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}