import { configureStore, Action, createSlice } from "@reduxjs/toolkit";
import reducers from "./reducers/index";

import thunk from "redux-thunk";

const middleware = [thunk];

const store = configureStore({ reducer: reducers, middleware: middleware });

export type RootState = ReturnType<typeof store.getState>;

export default store;
