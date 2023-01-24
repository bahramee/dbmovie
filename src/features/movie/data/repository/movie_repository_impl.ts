import { DiscoverMovies, Genre, Movie } from "../../domain/entity";
import { MovieRepository } from "../../domain/repository/movie_repository";
import { MovieRemoteDataSource } from "../datasource/movie_remote_data_source";

export class MovieRepositoryImpl implements MovieRepository {
    remoteDatasource: MovieRemoteDataSource;

    constructor(_remoteDatasource: MovieRemoteDataSource) {
        this.remoteDatasource = _remoteDatasource
    }
    async getMovieById(id: number): Promise<Movie> {
        return await this.remoteDatasource.getMovieById(id);
    }

    async getMovies(page: number, startDate: string, endDate: string): Promise<DiscoverMovies> {
        return await this.remoteDatasource.getMovies(page, startDate, endDate);
    }

    async getGenres(): Promise<Genre[]> {
        return await this.remoteDatasource.getGenres();
    }
}