import { FC } from "react";

import { MoviesList } from "../../Components";
import "./MoviesPage.responsive.css";

const MoviesPage: FC = () => {
  return (
    <div>
      <MoviesList />
    </div>
  );
};

export { MoviesPage };
