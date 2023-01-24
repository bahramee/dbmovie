import { MovieModel } from ".";

export interface DiscoverMoviesModel {
    page: number;
    results: MovieModel[];
    total_pages: number;
    total_results: number;
}