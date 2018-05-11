export function buildHomePage() {
    const $homeContent = $('#resultContent');
    $homeContent.empty().addClass('result-content');
    $('#resultTitle').text('Home');
    $('<p>').text('Use the navigation bar to find some movies.').appendTo($homeContent);
    $('<p>').text('This is the Movie World Website from Alexandra Hauri.').appendTo($homeContent);
}