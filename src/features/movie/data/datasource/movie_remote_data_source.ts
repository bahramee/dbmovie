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
        const url = `${env.url}/movie/${id}/credits`;
        const res = await this.request.getRequest(url, {});
        return res.data;
    }

    async getMovieById(id: number): Promise<MovieModel> {
        const url = `${env.url}/movie/${id}`;
        const res = await this.request.getRequest(url, {});
        return res.data;
    }

    async getMovies(page: number, startDate?: string, endDate?: string): Promise<DiscoverMoviesModel> {
        const url = `${env.url}/discover/movie?page=${page}&primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}`
        const res = await this.request.getRequest(url, {}, false);
        return res.data;
    }

    async getGenres(): Promise<GenreModel[]> {
        const url = `${env.url}/genre/movie/list`
        const res = await this.request.getRequest(url, {});
        return res.data.genres;
    }
}