export const env = {
    url: 'https://api.themoviedb.org/3',
    key: 'api_key=f62f750b70a8ef11dad44670cfb6aa57',
    uc: {
        movie: {
            getMovieCredit: { url: (id: number) => `${env.url}/movie/${id}/credits` },
            getMovieById: {url: (id: number) => `${env.url}/movie/${id}`},
            getMovies: {
                url: (page: number, startDate: string, endDate: string) =>
                    `${env.url}/discover/movie?page=${page}&primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}`,
            },
            getGenres: {
                url: () => `${env.url}/genre/movie/list`,
            }
        }
    }
}
