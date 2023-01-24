import { MovieRepository } from '../repository/movie_repository';
import { DiscoverMovies, Movie } from '../entity/';
export interface GetMoviesUseCase {
    invoke: (params: GetMoviesParams) => Promise<DiscoverMovies>
}
export class GetMovies implements GetMoviesUseCase {
    private movieRepository: MovieRepository
    constructor(_movieRepository: MovieRepository) {
        this.movieRepository = _movieRepository;
    }
    async invoke(params: GetMoviesParams) {
        return this.movieRepository.getMovies(params.page, params.startDate, params.endDate);
    }
}
export interface GetMoviesParams {
    page: number;
    startDate: string;
    endDate: string;
}