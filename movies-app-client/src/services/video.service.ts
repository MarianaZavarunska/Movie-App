import axios from "axios";
import { IVideoResponse } from "../interfaces";

const videoService = {
  getAll: (movieId: number) =>
    axios.get<IVideoResponse>(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=b1a5f167c9d1cbda7ab4372e15e4d19c`
    ),
  // turn off blocker on your browser
};

export { videoService };
