import route from '../../node_modules/riot-route';

import * as movieComingSoon from './movie-coming-soon/movie-coming-soon'
import * as moviePopular from './movie-popular/movie-popular';
import * as movieSearchHistory from './movie-search/movie-search-history';
import * as movieTopRated from './movie-top-rated/movie-top-rated';
import * as movieTopRatedGenre from './movie-top-rated/movie-top-rated-genre';
import * as movieSearch from './movie-search/movie-search';
import * as movieFavourite from './movie-favourite/move-favourite'

export function setupRouting(){

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

    route('/topVoted20', () => {
        console.log('Route to 20 best voted overall');
        clearContent();
        movieTopRated.buildTopVotedPage();
    });

    route('/topV20Category', () => {
        console.log('Route to 20 best voted by genre');
        clearContent();
        movieTopRatedGenre.buildTopVotedCatPage();
    });

    route('/soonReleased', () => {
        console.log('Route to soon released');
        clearContent();
        movieComingSoon.buildComingSoonPage();
    });

    route('/popular20', () => {
        console.log('Route to most popular');
        clearContent();
        moviePopular.buildMostPopularPage();
    });

    route('/favList', () => {
        console.log('Route to favourite List');
        clearContent();
        movieFavourite.buildFavouritePage();
    });

    route('/searchList', () => {
        console.log('Route to search List');
        clearContent();
        movieSearchHistory.buildSearchHistoryPage();
    });

    // Start watching for route changes
    startRouting();

}
export function doRouting(url) {
    route(url);
}

function clearContent() {
    $('#content').html('');
    $('<div>').appendTo($('#content')).addClass('result-area').prop('id','resultArea').append(
        $('<h1>').prop('id','resultTitle').addClass('result-title'),
        $('<ul>').prop('id','resultContent').addClass('list-group').addClass('result-content')
    );
}

function startRouting() {
    // Clear old routes and start routing
    route.stop();
    route.start(true);
}