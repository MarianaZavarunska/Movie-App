import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IVideo } from "../../interfaces";
import { videoService } from "../../services";

interface IVideoState {
  videos: IVideo[];
  errors: string | unknown;
}
const initialState: IVideoState = {
  videos: [],
  errors: "",
};
interface getAllVideosError{
  message: string | unknown
}

export const getAllVideos = createAsyncThunk<IVideo[],number, {rejectValue: getAllVideosError}>(
  "videoSlice/getAllVideo",
  async ( movieId,{rejectWithValue} ) => {
      try {
      const { data } = await videoService.getAll(movieId);
      return data.results;
    
      } catch (message) {
        //  if (err instanceof Error) return rejectWithValue(err.message)
        // if(typeof message === 'string' ) return rejectWithValue({message})
        return rejectWithValue({message})
      }
    }
    
);

const videoSlice = createSlice({
  name: "videoSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllVideos.fulfilled, (state, action) => {
      state.videos = action.payload;
      state.videos = state.videos.slice(0, 3);
    });
    builder.addCase(getAllVideos.rejected, (state, action) => {
      state.errors = action.payload?.message;
    });
  },
});

const videoReducer = videoSlice.reducer;
export {videoReducer};
