import moment from "moment";
import { useEffect, useState } from "react";
import LoadingWidget from "../../../../core/components/loding_widget";
import { formatter } from "../../../../core/string/formatter";
import { MovieContainer } from "../../../../main_container";
import { DiscoverMovies, Genre, Movie } from "../../domain/entity";
import { MoviesGridWidget } from "../components/movies_grid_widget";
import PaginationWidget from "../components/pagination_widget";
import { SearchWidget } from "../components/search_widget";

interface HomePageProps {
  di: MovieContainer;
}

export default function HomePage(props: HomePageProps) {
  const { di } = props;
  const [movies, setMovies] = useState<DiscoverMovies>();
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    async function fetchUsecases() {
      _fetchMovies(currentPage);
      const _genres = await di.GetGenres.invoke();
      setGenres(_genres);

    }

    fetchUsecases();
  }, []);

  const _fetchMovies = async (p: number) => {
    setLoading(true);
    const formatedStartDate = startDate !== null ? moment(startDate).format("YYYY-MM-DD") : '';
    const formatedEndDate = endDate !== null ? moment(endDate).format("YYYY-MM-DD") : '';
    await di.GetMovies.invoke({ page: p, startDate: formatedStartDate, endDate: formatedEndDate }).then((_movies) => {
      console.log(_movies);
      setLoading(false);
      setMovies(_movies);
    });
  }

  const onClickNextPage = () => {
    setCurrentPage(currentPage + 1)
    _fetchMovies(currentPage + 1);
  }

  const onClickPrevPage = () => {
    setCurrentPage(currentPage - 1);
    _fetchMovies(currentPage - 1);
  }

  const onClickPaginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    _fetchMovies(pageNumber);
  }

  const _getTotalPage = (): number => {
    if (movies?.total_pages !== null) {
      if (movies?.total_pages! > 500) {
        return 500;
      }
      else {
        return movies?.total_pages!;
      }
    }
    else {
      return 0;
    }
  }

  const onChangeStartDate = (date: any) => {
    console.log(date)
    setStartDate(date);
  }

  const onChangeEndDate = (date: any) => {
    console.log(date)
    setEndDate(date);
  }

  const onClickSearch = () => {
    _fetchMovies(1);
  }



  return (
    <div className="bg-white">
      <div className="h-11 bg-secondary w-screen"></div>
      <div className="container mx-auto">
        <div className="pb-20"></div>
        <SearchWidget onClickSearch={onClickSearch} onChangeStart={onChangeStartDate} onChangeEnd={onChangeEndDate} startDate={startDate} endDate={endDate} />
        <div className="pb-20"></div>
        <span className="text-sm font-bold">total: {formatter.format(movies?.total_results ?? 0)}</span>
        {!loading ? <MoviesGridWidget genres={genres} movies={movies?.results ?? []} /> : <LoadingWidget />}
        <PaginationWidget onClickPaginate={onClickPaginate} currentPage={currentPage} pageCount={_getTotalPage()} onClickNext={onClickNextPage} onClickPrev={onClickPrevPage} />
      </div>
    </div>
  );
}