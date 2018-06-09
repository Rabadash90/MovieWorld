import {Movie} from './Movie';

export interface MovieModel {
    movieList: Movie[];
    addMovie: (movie: any) => void;
    getMovie: (id: string) => Movie;
    resetMovieList:() => void;
}

export class DefaultMovieModel implements MovieModel {
    public movieList: Movie[];
    private $model = $(this);

    public addMovie(movie: any) {
        this.movieList.push(new Movie(movie.id, movie.title, movie.overview, movie.vote_average, movie.vote_count, movie.poster_path, movie.release_date, movie.runtime, movie.status));
        this.notifyModelChange();
    }

    public getMovie(id: string): Movie {
        return this.movieList.find((movie) => {
            return movie.id === id;
        });
    }

    public resetMovieList() {
        this.movieList = [];
        this.notifyModelChange();
    }

    private notifyModelChange() {
        this.$model.trigger('modelchange');
    }
}