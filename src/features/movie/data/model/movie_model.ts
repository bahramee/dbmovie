import { GenreModel, CompanyModel, CollectionModel, CountryModel, LanguageModel } from ".";

export interface MovieModel {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: CollectionModel[];
    budget: number;
    genres: GenreModel[];
    genre_ids: number[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: CompanyModel[];
    production_countries: CountryModel[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: LanguageModel[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
