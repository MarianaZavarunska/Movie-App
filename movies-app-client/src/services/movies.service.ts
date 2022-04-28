import axios from "axios";

import movieURL from "../constants/urls";
import { IMoviesResponse } from "../interfaces/movie.interface";
import { latestMoviesURL, searchURL } from "../constants";

let url: URL;
let request: string;

const moviesService = {
  getAll: (page: number) => axios.get<IMoviesResponse>(movieURL + page),

  getAllByYear: (page: number) =>
    axios.get<IMoviesResponse>(latestMoviesURL + page),

  searchMovieByName: (
    name: string | undefined,
    currentPage: number | undefined,
    genreIds: number[] | undefined
  ) => {
    url = new URL(searchURL);
    name && url.searchParams.set("query", name.toString());
    currentPage && url.searchParams.set("page", currentPage.toString());
    genreIds && url.searchParams.set("with_genres", genreIds.join());
    request = url.toString();

    return axios.get<IMoviesResponse>(request);
  },

  searchMovieByGenre: (
    genreIds: number[] | undefined,
    currentPage: number | undefined,
    movieName: string | undefined
  ) => {
    url = new URL(movieURL);
    currentPage && url.searchParams.set("page", currentPage.toString());
    genreIds && url.searchParams.set("with_genres", genreIds.join());
    movieName && url.searchParams.set("query", movieName);
    request = url.toString();

    return axios.get<IMoviesResponse>(request);
  },
};
export { moviesService };
