import { FC } from "react";

import { useAppSelector } from "../../hooks";
import { IReview } from "../../interfaces";
import "./MovieReview.css";

const MovieReview: FC<{ review: IReview }> = ({ review }) => {
  const { isSwitched } = useAppSelector((state) => state.moviesReducer);
  return (
    <div
      className="review-container"
      style={{ backgroundColor: isSwitched ? "#05020D" : "#02286e" }}
    >
      <div>{review.author}</div>
      <div className="review-date">
        {new Date(Date.parse(review.created_at)).getFullYear()}
      </div>
      <div>{review.content}</div>
    </div>
  );
};

export { MovieReview };
