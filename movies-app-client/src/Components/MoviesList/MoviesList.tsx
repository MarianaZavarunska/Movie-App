import { FC, useEffect } from "react";

import { MovieFilter, MovieListCard, SocialMedia } from "..";
import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  getAllMovies,
  getAllMoviesByGenre,
  getAllMoviesByName,
  getAllMoviesByYear,
  setPage,
} from "../../store/slices";

import "./MoviesList.css";

const MoviesList: FC = () => {
  let { movies, queryParams, totalPage, status } = useAppSelector(
    (state) => state.moviesReducer
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    // movieName
    //   ? dispatch(getAllMoviesByName(movieName))
    //   : dispatch(getAllMovies(currentPage));

    if (
      queryParams.movieName &&
      queryParams.currentPage &&
      queryParams.currentPage <= totalPage
    ) {
      dispatch(getAllMoviesByName(queryParams));
      return;
    }
    if (queryParams.isNewMovie === true) {
      dispatch(getAllMoviesByYear(queryParams));
      return;
    }
    if (
      queryParams.genreIds &&
      queryParams.genreIds.length > 0 &&
      queryParams.currentPage &&
      queryParams.currentPage <= totalPage
    ) {
      dispatch(getAllMoviesByGenre(queryParams));
      return;
    }
    dispatch(getAllMovies(queryParams));
  }, [queryParams]);

  return (
    <div className="movies-page">
      <MovieFilter />
      <div className="nav-btns">
        <button onClick={() => dispatch(setPage({ action: -1 }))}>Prev</button>
        <button onClick={() => dispatch(setPage({ action: 1 }))}>Next</button>
      </div>
      <SocialMedia />

      <div className="movies-container">
        {status === "pending" && <h1>Loading</h1>}

        {status === "fulfilled" &&
          movies.map((movie) => <MovieListCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export { MoviesList };
