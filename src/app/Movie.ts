export class Movie {
    public id: string;
    public title: string;
    public rating: number;
    public votes: number;

    constructor(id, title, rating, votes) {
        this.id = id;
        this.title = title;
        this.rating = rating;
        this.votes = votes;
    }
}