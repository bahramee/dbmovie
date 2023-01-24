import { MovieRepository } from '../repository/movie_repository';
import { Movie } from '../entity/';
export interface GetMovieByIdUseCase {
    invoke: (params: GetMovieByIdParams) => Promise<Movie>
}
export class GetMovieById implements GetMovieByIdUseCase {
    private movieRepository: MovieRepository
    constructor(_movieRepository: MovieRepository) {
        this.movieRepository = _movieRepository;
    }
    async invoke(params: GetMovieByIdParams) {
        return this.movieRepository.getMovieById(params.id);
    }
}
export interface GetMovieByIdParams {
    id: number;
}