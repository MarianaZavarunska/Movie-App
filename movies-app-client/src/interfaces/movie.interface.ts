// import { IGenre } from "./genre.interface";

export interface IMovie {
  // poster_path: null | string;
  // overview: string;
  // release_date: string
  // genre_ids: number[],
  // id: number,
  // title: string,
  // popularity: number,
  // vote_average: number;
  adult?: boolean;
  genre_ids: number[];
  id: number;
  original_language?: string;
  original_title?: string;
  overview: string;
  popularity?: number;
  poster_path: null | string;
  release_date: string;
  title: string;
  video?: boolean;
  vote_average: number;
  vote_count?: number;
}

export interface IMoviesResponse {
  page: number;
  results: IMovie[];
  total_results: number;
  total_pages: number;
}
