import axios from "axios";
import { IMages } from "../interfaces/images.interface";

const imagesService = {
  getAll: (movieId: number) =>
    axios.get<IMages>(
      `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=b1a5f167c9d1cbda7ab4372e15e4d19c`
    ),
};

export { imagesService };
