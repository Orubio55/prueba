import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "api/apiSlice";
import { queryErrorHandler } from "store/middleware/httpErrorHandling.middleware";
// import { createPromise } from "redux-promise-middleware";
// import BreadCrumbs from "common/reducers/breadCrumbs";
// import Loading from "common/reducers/loading";

const reducers = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   reducers,
//   composeEnhancers(applyMiddleware(createPromise()))
// );

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, queryErrorHandler),
  devTools: true,
});

setupListeners(store.dispatch);

export default store;
