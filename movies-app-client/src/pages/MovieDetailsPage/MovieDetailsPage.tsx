import { FC } from "react";
import { useLocation } from "react-router-dom";

import { IMovie } from "../../interfaces/movie.interface";
import { IMG_PATH } from "../../constants/urls";
import { MovieInfo, MovieReviews, MovieVideo } from "../../Components";
import "./MovieDetailsPage.css";
import "./MovieDetailsPage.responsive.css";

interface IStateResponse {
  movie: IMovie;
  genresName: string[];
}

const MovieDetailsPage: FC = () => {
  const location = useLocation();
  const { movie, genresName } = location.state as IStateResponse;

  return (
    <div className="movie-details-container">
      <div className="movie-info-wrapper">
        <div className="poster-container">
          {movie.poster_path !== null && (
            <img src={IMG_PATH + movie.poster_path} alt={movie.title} />
          )}
        </div>
        <MovieInfo movie={movie} genresName={genresName} />
      </div>
      <MovieReviews movieId={movie.id} />
      <MovieVideo movieId={movie.id} />
    </div>
  );
};

export { MovieDetailsPage };
