import { DateRange } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { Genre, Movie } from "../../domain/entity"
import { BadgeWidget } from "./badge_widget"
import { VoteWidget } from "./vote_widget";


interface MoviesGridWidgetProps {
    movies: Movie[];
    genres: Genre[];
}

export const MoviesGridWidget = (props: MoviesGridWidgetProps) => {
    const { movies, genres } = props;

    const _getMoviesGenres = (moviesGenres:number[]):Genre[] => {
        const finalGenres:Genre[] = [];
        genres.forEach((g, index) => {
            for(let i = 0; i < moviesGenres.length; i++) {
                if(g.id === moviesGenres[i]) {
                    finalGenres.push(g);
                    break;
                }
            }
        });
        return finalGenres;
    }

    return (
        <div className="flex grid grid-cols-3 gap-3">
            {movies.map((movie, index) => {
                const imageUrl = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
                const movieGenres = _getMoviesGenres(movie.genre_ids);
                return ([
                    <Link key={index} to={`movie/${movie.id}`}>
                        <div className="rounded-md flex m-10 border bg-highlight border-w-2 border-penlight">
                            <img className="rounded-l-md mt-[1px] ml-[1px] mb-[1px]" width={140} src={imageUrl} alt="" />
                            {/* <div className={`bg-primary mt-[2px] ml-[2px] mb-[2px] w-2/5 rounded-l-md bg-cover bg-no-repeat bg-[url('https://image.tmdb.org/t/p/w200/26yQPXymbWeCLKwcmyL8dRjAzth.jpg')]`}></div> */}
                            <div className="h-[180px] w-3/5 rounded-r-md flex-col p-3">
                                <div className="grow pb-2">
                                    <h1 className="text-md text-pen font-bold">{movie.title}</h1>
                                </div>
                                <VoteWidget vote={movie.vote_average}/>
                                <span className="flex items-center pt-7 text-pengrey">
                                    <DateRange color="inherit" fontSize="small" /><p className="text-xs">{movie.release_date}</p>
                                </span>
                                <div className="pb-2"></div>
                                <div className="">
                                    {movieGenres.map((g, i) => <BadgeWidget key={i} text={g.name} />)}
                                </div>
                            </div>
                        </div>
                    </Link>
                ])
            })}

        </div>
    )
}