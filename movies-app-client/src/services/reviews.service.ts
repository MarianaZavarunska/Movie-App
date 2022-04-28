import axios from "axios";
import { IReviewResponse } from "../interfaces/reviews.interface";

export const reviewsService = {
  getAll: (movieId: number) =>
    axios.get<IReviewResponse>(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=b1a5f167c9d1cbda7ab4372e15e4d19c`
    ),
};
