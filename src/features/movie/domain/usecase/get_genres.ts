import { MovieRepository } from '../repository/movie_repository';
import { Genre } from '../entity';
export interface GetGenressUseCase {
    invoke: () => Promise<Genre[]>
}
export class GetGenres implements GetGenressUseCase {
    private movieRepository: MovieRepository
    constructor(_movieRepository: MovieRepository) {
        this.movieRepository = _movieRepository;
    }
    async invoke() {
        return this.movieRepository.getGenres();
    }
}