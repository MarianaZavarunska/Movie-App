import { FC, useEffect } from "react";

import { MovieReview } from "..";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getAllReviews } from "../../store/slices";

import "./MovieReviews.css";

const MovieReviews: FC<{ movieId: number }> = ({ movieId }) => {
  const { reviews, status } = useAppSelector((state) => state.reviewReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllReviews(movieId));
  }, [movieId]);

  return (
    <div>
      {status === "pending" && <div>Loading</div>}
      {reviews.length > 0 && <h2>Reviews</h2>}
      <div className="reviews-container">
        {status === "fulfilled" &&
          reviews &&
          reviews.map((review) => (
            <MovieReview key={review.id} review={review} />
          ))}
      </div>
    </div>
  );
};

export { MovieReviews };
