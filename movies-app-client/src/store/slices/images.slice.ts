import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IBackdrops,IMages } from "../../interfaces";
import { imagesService } from "../../services";

interface ImagesState {
  images: IBackdrops[];
  status: string;
  //   error: string | null;
}
const initialState: ImagesState = {
  images: [],
  status: "",
  //   error: null,
};

export const getAllImages = createAsyncThunk<IMages | undefined ,number>(
  "imagesSlice /getAllImages",
  async (movieId) => {
    //{ rejectWithValue }
    try {
      const { data } = await imagesService.getAll(movieId);
      return data;
    } catch (err) {
      console.log(err);

      //   if (err instanceof Error) return rejectWithValue(err.message);
      //    return String(err);
    }
  }
);

const imagesSlice = createSlice({
  name: "imagesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllImages.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getAllImages.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.images = (action.payload && action.payload.backdrops) || [];
    });
  },
});

const imagesReducer = imagesSlice.reducer;

export { imagesReducer };
