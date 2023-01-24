import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingWidget from "../../../../core/components/loding_widget";
import { MovieContainer } from "../../../../main_container";
import { Movie } from "../../domain/entity";
import { MovieDetailsWidget } from "../components/movie_details_widget";
import { MovieTitleWidget } from "../components/movie_title_widget";

interface MoviePageProps {
    di: MovieContainer;
}

export default function MoviePage(props: MoviePageProps) {
    const [movie, setMovie] = useState<Movie>();
    const [loading, setLoading] = useState(false);
    const { di } = props;
    let { id } = useParams();

    useEffect(() => {
        async function fetchUsecases() {
            setLoading(true);
            await props.di.GetMovieById.invoke({ id: parseInt(id ?? '0') }).then((m) => {
                setMovie(m);
                setLoading(false);
            })
            //   console.log('response e sisi', response);
        }

        fetchUsecases();
    }, []);

    return (
        <div className="">
            <div className="h-11 bg-secondary w-screen"></div>
            <div className="pt-20"></div>
            <div className="container mx-auto">
                {!loading ? <div className="">
                    <MovieTitleWidget title={movie?.title ?? ''} tagline={movie?.tagline ?? ''} />
                    <div className="pt-20"></div>
                    <MovieDetailsWidget />
                </div> : <LoadingWidget />}

            </div>
        </div>
    );
}