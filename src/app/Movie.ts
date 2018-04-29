

export class Movie {
    public id: string;
    public title: string;
    public overview: string;
    public rating: number;
    public votes: number;
    public posterPath: string;
    public releaseDate: string;
    public runtime: number;
    public status: string;

    constructor(id, title, overview, rating, votes, posterPath, releaseDate, runtime, status) {
        this.id = id;
        this.title = title;
        this.overview = overview;
        this.rating = rating;
        this.votes = votes;
        this.posterPath = posterPath;
        this.releaseDate = releaseDate;
        this.runtime = runtime;
        this.status = status;
    }
}