import { Credit, DiscoverMovies, Genre, Movie } from "../entity";

export interface MovieRepository {
    getMovies(page: number, startDate: string, endDate: string): Promise<DiscoverMovies>;
    getGenres(): Promise<Genre[]>;
    getMovieById(id: number): Promise<Movie>;
    getMovieCredit(id: number): Promise<Credit>;
}