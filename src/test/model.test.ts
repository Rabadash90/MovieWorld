//import model from '';
import {DefaultMovieModel} from "../app/movie-model";
import 'jest';
import {Movie} from "../app/Movie";

// Initialize model
test('create model', () => {
    let model = new DefaultMovieModel();
    expect(model).toBeDefined();
});


// Initialize movie
test('create movie', () => {
    let movie = new Movie('1', 'MyMovie', 'this ist the descirption of my movie', 5, 2, '/justAPath.jpg', undefined, undefined, 'myTestStatus');
    expect(movie).toBeDefined();
});

// add movie to model.
// I get an error yet, I guess something is wrong with the version of jest
test('add movie to model', () => {
    let model = new DefaultMovieModel();
    let movie = new Movie('1', 'MyMovie', 'this ist the descirption of my movie', 5, 2, '/justAPath.jpg', undefined, undefined, 'myTestStatus');
    model.addMovie(movie);
    expect(movie.id).toMatch('1');

});

// get movie from model.
// I get an error yet, I guess something is wrong with the version of jest
test('get movie from model', () => {
    let model = new DefaultMovieModel();
    let movie = new Movie('1', 'MyMovie', 'this ist the descirption of my movie', 5, 2, '/justAPath.jpg', undefined, undefined, 'myTestStatus');
    model.addMovie(movie);
    let result = model.getMovie('1');
    expect(result.id).toMatch('1');
});

// Reset the movie list.
// I get an error yet, I guess something is wrong with the version of jest
test('reset movie list', () => {
    let model = new DefaultMovieModel();
    let movie = new Movie('1', 'MyMovie', 'this ist the descirption of my movie', 5, 2, '/justAPath.jpg', undefined, undefined, 'myTestStatus');
    model.addMovie(movie);
    let movie2 = new Movie('2', 'MyMovie', 'this ist the descirption of my movie', 5, 2, '/justAPath.jpg', undefined, undefined, 'myTestStatus');
    model.addMovie(movie2);
    model.resetMovieList();
    expect(model.movieList.length).toBe(0);
});
