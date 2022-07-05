import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import forgotPassword from "../middlewares/forgotPassword.middleware";

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

const middleware = applyMiddleware(forgotPassword);

export const setupStore = () =>
  configureStore({
      reducer: rootReducer,
      middleware,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"]; // to put into only actions
