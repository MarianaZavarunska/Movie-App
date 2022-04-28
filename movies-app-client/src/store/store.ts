import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {
  genresReducer,
  imagesReducer,
  moviesReducer,
  videoReducer,
  reviewReducer,
  userReducer,
} from "./slices";

const rootReducer = combineReducers({
  moviesReducer,
  genresReducer,
  videoReducer,
  imagesReducer,
  reviewReducer,
  userReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"]; // to put into only actions
