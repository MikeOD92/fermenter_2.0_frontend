import { configureStore, Action, createSlice } from "@reduxjs/toolkit";
import reducers from "./reducers/index";
// import { applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { UserState } from "../types/userstate";
import { VerifiedStatus } from "../types/VerifiedStatus";
// import { userReducer } from "./reducers/userReducer";
// import { ThunkAction } from "redux-thunk";

const middleware = [thunk];

const getLoginFromLocalStorage = () => {
  try {
    const userInfoFromStorage = localStorage.getItem("loginInfo");
    if (userInfoFromStorage) {
      return JSON.parse(userInfoFromStorage);
    }
  } catch (err) {
    console.error(err);
  }
};

const preloadedState = {
  user: {
    loading: false,
    loginInfo: getLoginFromLocalStorage(),
    verified: {},
  },
};

const store = configureStore({
  reducer: reducers,
  preloadedState,
  middleware,
});

// // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch();
// export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
export const selectUser = (state: UserState) => state.loginInfo;
export const selectVerification = (state: VerifiedStatus) => state;

export default store;
