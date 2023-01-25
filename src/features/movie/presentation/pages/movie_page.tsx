import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingWidget from "../../../../core/components/loding_widget";
import { MovieContainer } from "../../../../main_container";
import { Credit, Movie } from "../../domain/entity";
import { MovieDetailsWidget } from "../components/movie_details_widget";
import { MovieTitleWidget } from "../components/movie_title_widget";

interface MoviePageProps {
    di: MovieContainer;
}

export default function MoviePage(props: MoviePageProps) {
    const [movie, setMovie] = useState<Movie>();
    const [loading, setLoading] = useState(true);
    const [credit, setCredit] = useState<Credit>();
    const { di } = props;
    let { id } = useParams();

    useEffect(() => {
        async function fetchUsecases() {
            setLoading(true);
            const _credit = await props.di.GetMovieCredit.invoke({id: parseInt(id ?? '')});
            setCredit(_credit);
            await props.di.GetMovieById.invoke({ id: parseInt(id ?? '0') }).then((m) => {
                setMovie(m);
                setTimeout(() => {
                }, 250);
                if(movie === undefined) {
                    setLoading(true)
                } else {
                    
                }
                if(movie !== null) {
                    setLoading(false);
                };
            })
        }

        fetchUsecases();
    }, []);

    return (
        <div className="">
            <div className="h-11 bg-secondary w-screen"></div>
            <div className="pt-20"></div>
            <div className="container mx-auto">
                {!loading ? <div className="">
                    <MovieTitleWidget
                        title={movie?.title ?? 'problem in loading data'}
                        tagline={movie?.tagline ?? 'proplem in loading data'}
                    />
                    <div className="pt-20"></div>
                    <MovieDetailsWidget credit={credit!} movie={movie!}/>
                </div> : <LoadingWidget />}

            </div>
        </div>
    );
}
