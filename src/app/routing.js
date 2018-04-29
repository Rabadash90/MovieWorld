import route from '../../node_modules/riot-route';

import * as movieSearch from './movie-search/movie-search';

export function setupRouting(){
   /* route('/fruit',function(name) {
        console.log('The list of fruits')
    });
    */
    // Define the routes
    route('/home', () => {
        console.log('Route to home');
        clearContent();
        $('#content').html('Welcome to the home page By Routing');
    });

    route('/search', () => {
        console.log('Route to search');
        clearContent();
        movieSearch.buildSearchPage();
    });

    // Start watching for route changes
    startRouting();

}
export function doRouting(url) {
    route(url);
}

function clearContent() {
    $('#content').html('');
}

function startRouting() {
    // Clear old routes and start routing
    route.stop();
    route.start(true);
}