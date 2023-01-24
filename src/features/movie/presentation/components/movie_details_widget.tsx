import { ArrowBack } from "@mui/icons-material"
import { formatter } from "../../../../core/string/formatter";
import { Movie } from "../../domain/entity"

interface MovieDetailsWidgetProps {
    movie: Movie;
}

export const MovieDetailsWidget = (props: MovieDetailsWidgetProps) => {
    const {movie} = props
    return (
        <div className="">
            <div className="flex">
                <div className="flex-none">
                    <img className="rounded-lg" src="https://image.tmdb.org/t/p/w400/26yQPXymbWeCLKwcmyL8dRjAzth.jpg" alt="Italian Trulli" />
                </div>
                <div className="grow flex-col px-20 py-10">
                    <div className="flex w-full pb-10 font-bold">
                        <div className="grow">
                            <h2 className="text-pen text-bold text-md">Budget</h2>
                        </div>
                        <h2 className="text-penlight text-md">{formatter.format(movie.budget)}</h2>
                    </div>
                    <div className="flex w-full pb-10 font-bold">
                        <div className="grow">
                            <h2 className="text-pen text-bold text-md">Revenue</h2>
                        </div>
                        <h2 className="text-penlight text-md">{formatter.format(movie.revenue)}</h2>
                    </div>
                    <div className="flex w-full pb-10 font-bold">
                        <div className="grow">
                            <h2 className="text-pen text-bold text-md">Release Date</h2>
                        </div>
                        <h2 className="text-penlight text-md">{movie.release_date}</h2>
                    </div>
                    <div className="flex w-full pb-10 font-bold">
                        <div className="grow">
                            <h2 className="text-pen text-bold text-md">Runtime</h2>
                        </div>
                        <h2 className="text-penlight text-md">{movie.runtime}</h2>
                    </div>
                    <div className="flex w-full pb-10 font-bold">
                        <div className="grow">
                            <h2 className="text-pen text-bold text-md">Score</h2>
                        </div>
                        <h2 className="text-penlight text-md">{movie.popularity}</h2>
                    </div>
                    <div className="flex w-full pb-10 font-bold">
                        <div className="grow">
                            <h2 className="text-pen text-bold text-md">Genres</h2>
                        </div>
                        <h2 className="text-penlight text-md">{movie.genres.map((x) => x.name)}</h2>
                    </div>
                    <div className="flex w-full pb-10 font-bold">
                        <div className="grow">
                            <h2 className="text-pen text-bold text-md">IMDB Link</h2>
                        </div>
                        <h2 className="text-penlight text-md">{movie.imdb_id}</h2>
                    </div>
                    <div className="flex w-full pb-10 font-bold">
                        <div className="grow">
                            <h2 className="text-pen text-bold text-md">Homepage Link</h2>
                        </div>
                        <h2 className="text-penlight text-md">Link</h2>
                    </div>
                </div>
            </div>
            <div className="pb-20"></div>
            <p className="text-md">{movie.overview}</p>
            <div className="pb-10"></div>
            <h1 className="text-lg text-bold">Credit:</h1>
            <div className="pb-5"></div>
            <p className="text-sm">Lorem, Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="pb-20"></div>
        </div>
    )
}