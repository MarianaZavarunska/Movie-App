import { FC } from "react";
import { Link } from "react-router-dom";

import { IMG_PATH } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { IMovie } from "../../interfaces";
import { setGenresName } from "../../store/slices";
import { StarsRating } from "..";
import "./MovieListCard.css";

const MovieListCard: FC<{ movie: IMovie }> = ({ movie }) => {
  let movie_data;
  let genresName: string[] = [];

  if (movie.release_date) {
    // let index = movie.release_date.indexOf("-");
    // movie_data = movie.release_date.substring(0, index);
    movie_data = new Date(Date.parse(movie.release_date)).getFullYear();
  } else {
    movie_data = "";
  }

  const dispatch = useAppDispatch();
  const { genres } = useAppSelector((state) => state.genresReducer);

  dispatch(
    setGenresName({
      ids: movie.genre_ids,
      genres: genres,
      genresName: genresName,
    })
  );

  return (
    <Link
      to={`/movies/${movie.id}`}
      state={{ movie, genresName }}
      className="movie-card"
    >
      <div>
        {movie.poster_path !== null && (
          <img src={IMG_PATH + movie.poster_path} alt={movie.title} />
        )}
        {movie_data !== "" && (
          <div className="data-container">{movie_data}</div>
        )}
      </div>
      <div className="movie-info">
        <div>{movie.title}</div>
        {movie.vote_average !== 0 && (
          <div>
            <span className="rating">IMDb: </span>
            <span style={{color: movie.vote_average <= 6 ? 'red' : '' }}>{movie.vote_average}</span>
          </div>
        )}
        <div className="genre-badge">
          {genresName &&
            genresName.map((genre) => <span key={genre}>{genre}</span>)}
        </div>

        <StarsRating rating={movie.vote_average} />
      </div>

      {movie.overview && (
        <div className="overview-container">{movie.overview}</div>
      )}
    </Link>
  );
};

export { MovieListCard };
