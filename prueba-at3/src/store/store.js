import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "api/apiSlice";
import { queryErrorHandler } from "store/middleware/httpErrorHandling.middleware";

const reducers = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, queryErrorHandler),
  devTools: true,
});

setupListeners(store.dispatch);

export default store;
