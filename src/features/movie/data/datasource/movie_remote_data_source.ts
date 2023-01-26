import { env } from "../../../../core/env/env";
import { Request } from "../../../../core/network/request";
import { CreditModel, DiscoverMoviesModel, GenreModel, MovieModel } from "../model";

export interface MovieRemoteDataSource {
    getMovies(page: number, startDate: string, endDate: string): Promise<DiscoverMoviesModel>;
    getGenres(): Promise<GenreModel[]>;
    getMovieById(id: number): Promise<MovieModel>;
    getMovieCredit(id: number): Promise<CreditModel>
}

export class MovieRemoteDataSourceImpl implements MovieRemoteDataSource {
    request: Request;

    constructor(_request: Request) {
        this.request = _request;
    }

    async getMovieCredit(id: number): Promise<CreditModel> {
        const url = env.uc.movie.getMovieCredit.url(id);
        const res = await this.request.getRequest(url, {});
        return res.data;
    }

    async getMovieById(id: number): Promise<MovieModel> {
        const url = env.uc.movie.getMovieById.url(id);
        const res = await this.request.getRequest(url, {});
        return res.data;
    }

    async getMovies(page: number, startDate: string, endDate: string): Promise<DiscoverMoviesModel> {
        const url = env.uc.movie.getMovies.url(page, startDate, endDate);
        const res = await this.request.getRequest(url, {}, false);
        return res.data;
    }

    async getGenres(): Promise<GenreModel[]> {
        const url = env.uc.movie.getGenres.url();
        const res = await this.request.getRequest(url, {});
        return res.data.genres;
    }
}
