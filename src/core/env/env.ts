export const env = {
    url: 'https://api.themoviedb.org/3',
    key: 'api_key=your_api_key',
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
