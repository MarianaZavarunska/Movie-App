import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IGenre } from "../../interfaces";
import { genresService } from "../../services";

interface IGenreState {
  genres: IGenre[];
  status: string;
  toggleGenres: boolean;
}
const initialState: IGenreState = {
  genres: [],
  status: "",
  toggleGenres: false,
};

export const getAllGenres = createAsyncThunk<IGenre[] | undefined,void>(
  "genresSlice/getAllGenres",
  async () => {
    try {
      const { data } = await genresService.getAll();
      return data.genres;
    } catch (err) {
      console.log(err);
    }
  }
);

const genresSlice = createSlice({
  name: "genresSlice",
  initialState,
  reducers: {
    toggleDropdown: (state) => {
      state.toggleGenres = !state.toggleGenres;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllGenres.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getAllGenres.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.genres = action.payload ? action.payload : [];
    });
  },
});

const genresReducer = genresSlice.reducer;
export const { toggleDropdown } = genresSlice.actions;
export { genresReducer };
