import { MovieRepository } from '../repository/movie_repository';
import { Credit } from '../entity';
export interface GetMovieCreditUseCase {
    invoke: (params: GetMovieCreditParams) => Promise<Credit>
}
export class GetMovieCredit implements GetMovieCreditUseCase {
    private movieRepository: MovieRepository
    constructor(_movieRepository: MovieRepository) {
        this.movieRepository = _movieRepository;
    }
    async invoke(params: GetMovieCreditParams) {
        return this.movieRepository.getMovieCredit(params.id);
    }
}
export interface GetMovieCreditParams {
    id: number;
}