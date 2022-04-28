import { FC } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { clearFilter } from "../../store/slices";
import "./MovieFilter.css";

const MovieFilter: FC = () => {
  const { queryParams } = useAppSelector((state) => state.moviesReducer);
  const dispatch = useAppDispatch();

  return (
    <div className="filter-container">
      {queryParams.genreIds && queryParams.genreIds?.length > 0 && (
        <div>Genre: {queryParams.genreIds.join(",")}</div>
      )}
      {queryParams.movieName && <div>Name: {queryParams.movieName}</div>}
      {queryParams.currentPage && queryParams.currentPage > 1 && (
        <div>Page: {queryParams.currentPage}</div>
      )}
      {(queryParams.genreIds?.length ||
        queryParams.movieName ||
        (queryParams.currentPage && queryParams.currentPage > 1)) && (
        <button onClick={() => dispatch(clearFilter())}>Clear</button>
      )}
    </div>
  );
};

export { MovieFilter };
