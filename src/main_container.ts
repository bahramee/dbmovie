import RequestImpl from "./core/network/request";
import { MovieRemoteDataSourceImpl } from "./features/movie/data/datasource/movie_remote_data_source";
import { MovieRepositoryImpl } from "./features/movie/data/repository/movie_repository_impl";
import { MovieRepository } from "./features/movie/domain/repository/movie_repository";
import { GetGenres, GetMovieById, GetMovieCredit, GetMovies } from "./features/movie/domain/usecase";

export interface MovieContainer {
    //! Repository
    serviceRepository: MovieRepository;
    //! Usecases
    GetMovies: GetMovies;
    GetGenres: GetGenres;
    GetMovieById: GetMovieById;
    GetMovieCredit: GetMovieCredit;
}

export class MovieContainerImpl implements MovieContainer {
    //! Repository
    serviceRepository: MovieRepository;
    //! Usecases
    GetMovies: GetMovies;
    GetGenres: GetGenres;
    GetMovieById: GetMovieById;
    GetMovieCredit: GetMovieCredit;
    constructor() {
        this.serviceRepository = new MovieRepositoryImpl(new MovieRemoteDataSourceImpl(new RequestImpl()));
        this.GetMovies = new GetMovies(this.serviceRepository);
        this.GetGenres = new GetGenres(this.serviceRepository);
        this.GetMovieById = new GetMovieById(this.serviceRepository);
        this.GetMovieCredit = new GetMovieCredit(this.serviceRepository);
    }
}