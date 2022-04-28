import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { setMovieName } from "../../store/slices";
import "./Form.css";

const Form: FC = () => {
  const { register, handleSubmit, reset } = useForm<{ movieName: string }>();
  const dispatch = useAppDispatch();
  const { isSwitched } = useAppSelector((state) => state.moviesReducer);

  const onSubmitForm: SubmitHandler<{ movieName: string }> = (movieName) => {
    if (movieName.movieName)  dispatch(setMovieName(movieName));

    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <input
          type="text"
          placeholder="&#61442; Search"
          {...register("movieName")}
          style={{ borderBottomColor: isSwitched ? "#05020D" : "#02286e" }}
        />
        <button
          className="btn-search"
          style={{ backgroundColor: isSwitched ? "#05020D" : "#02286e" }}
        >
          Search
        </button>
      </form>
    </>
  );
};

export { Form };
