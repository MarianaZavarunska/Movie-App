import axios from "axios";

import { genreURL } from "../constants";
import { IGenreResponse } from "../interfaces/genre.interface";

const genresService = {
  getAll: () => axios.get<IGenreResponse>(genreURL),
};

export { genresService };
