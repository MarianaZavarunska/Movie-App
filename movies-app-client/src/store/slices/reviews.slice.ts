import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IReview, IReviewResponse } from "../../interfaces";
import { reviewsService } from "../../services";

interface IReviewState {
  reviews: IReview[];
  status: string;
}
const initialState: IReviewState = {
  reviews: [],
  status: "",
};

export const getAllReviews = createAsyncThunk<IReviewResponse | undefined,number>(
  "moviesSlice/getAllReviews",
  async (movieId) => {
    try {
      const { data } = await reviewsService.getAll(movieId);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const reviewsSlice = createSlice({
  name: "reviewsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllReviews.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getAllReviews.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.reviews = action.payload ? action.payload.results : [];
    });
  },
});

const reviewReducer = reviewsSlice.reducer;
export { reviewReducer };
