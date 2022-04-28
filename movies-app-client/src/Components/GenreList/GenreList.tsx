import { FC, useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { getAllGenres, setGenresId, toggleDropdown } from "../../store/slices";
import "./GenreList.css";

const GenreList: FC = () => {
  const { genres, toggleGenres } = useAppSelector((state) => state.genresReducer);

  const { queryParams, isSwitched, status } = useAppSelector((state) => state.moviesReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllGenres());
  }, []);

  return (
    <div onMouseLeave={() => { if(toggleGenres) dispatch(toggleDropdown()) }}>
      <button
        className="genre-btn"
        onClick={() => dispatch(toggleDropdown())}
        style={{ backgroundColor: isSwitched ? "#05020D" : "#02286e" }}>

        Selected: 
        {queryParams.genreIds?.length && queryParams.genreIds[0] !== 0
          ? queryParams.genreIds.length : 0}
      </button>

      <div style={{ position: "relative" }}>
        <ul
          style={{ display: toggleGenres ? "" : "none" }}
          className="genre-dropdown" >

          <li>
            <div onClick={() => dispatch(setGenresId({ genreId: 0 }))}>All</div>
          </li>

          {status === "fulfilled" && genres.map((genre) => (
              <li key={genre.id}>
                <div onClick={() => dispatch(setGenresId({ genreId: genre.id }))}>
                  {queryParams.genreIds &&
                  queryParams.genreIds.includes(genre.id) ? (
                    <AiOutlineCheck size={20} />) : (" ")} {genre.name}
                </div>
              </li> 
            ))
          } 
        </ul>
      </div>
    </div>
  );
};

export { GenreList };

{
  /* <form className="dropdown-container">
<select
  multiple
  size={4}
  style={{ backgroundColor: isSwitched ? "transparent" : "#05020D" }}
  onChange={(e) => dispatch(setGenreId({ genreId: e.target.value }))}
>
  <option value={0}>All Movies</option>

  {status === "pending" && <option>Loading</option>}

  {status === "fulfilled" &&
    genres.map((genre) => (
      <option key={genre.id} value={genre.id}>
        {genre.name}
      </option>
    ))}
</select>
</form> */
}
