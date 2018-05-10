import 'bootstrap';
import '../css/styles.less';
import 'less';
import * as router from './routing';
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// jQuery verwendet um einen event zu registrieren (sobald die seite / document geladen / ready ist)
$(document).ready(() => {

    // Setup routing mechanism
    router.setupRouting();

    // Register navigation callbacks
    $('#nav-home').click(() => {
        router.doRouting('home');
    });
    $('#searchLink').click(() => {
        router.doRouting('search');
    });
    $('#nav-topRated').click(() => {
        router.doRouting('topVoted20');
    });
    $('#nav-topRatedByGenre').click(() => {
        router.doRouting('topV20Category');
    });
    $('#nav-commingSoon').click(() => {
        router.doRouting('soonReleased');
    });
    $('#nav-popular20').click(() => {
        router.doRouting('popular20');
    });
    $('#nav-favList').click(() => {
        router.doRouting('favouriteList');
    });
    $('#nav-searchList').click(() => {
        router.doRouting('searchList');
    })


});

function callMyBackend() {
    // Sample GET
    fetch('http://localhost:3000/sample', {
        method: 'get'
    }).then((response) => {
        console.log(response.json());
    }).catch((err) => {
        console.log(err);
    });

    // Sample POST
    fetch('http://localhost:3000/sample', {
        method: 'post',
        body: JSON.stringify({data: ['a', 'b', 'c']})
    }).then((response) => {
        console.log(response.json());
    }).catch((err) => {
        console.log(err.json());
    });
}

callMyBackend();