import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface UserSlice {
  //   refresh: string;
  access: string;
  //   id: number;
  //   username: string;
  //   first_name: string;
  //   last_name: string;
  //   email: string;
  //   token: string;
  //   data: any;
}

const userFromStorage = localStorage.getItem("loginInfo")
  ? localStorage.getItem("loginInfo")
  : "";

const initialState: UserSlice = {
  // data: {
  //     // refresh: userFromStorage?.refresh || "",
  access: userFromStorage || "",
  //     // id: number;
  //     // username: string;
  //     // first_name: string;
  //     // last_name: string;
  //     // email: string;
  //     // token: string;
  // }
  //   data: userFromStorage || "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      const request = async () => {
        const response = await axios.post("http://localhost:8000/api/login", {
          username: action.payload.username,
          password: action.payload.password,
        });
        console.log(response);
        return (state.access = response.data.access);
      };
      request();
    },
    logout: (state) => {
      state.access = "";
      //   localStorage.removeItem("access_key");
    },
  },
});

export const { login, logout } = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectUser = (state: RootState) => state.user.access;

export default store;
