import { createSlice } from "@reduxjs/toolkit";
import { user } from "../assets/data";

const initialState = {
  theme: JSON.parse(window?.localStorage.getItem("theme")) ?? "light",
  posts: {},
  user: JSON.parse(window?.localStorage.getItem("user")) ?? user,
  edit: false,
};

export const AppSlice = createSlice({
  name: "AppSlice",
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
      localStorage.setItem("theme", JSON.stringify(action.payload));
    },
    login(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      localStorage?.removeItem("user");
    },
    updateProfile(state, action) {
      state.edit = action.payload;
    },
    getPosts(state, action) {
      state.posts = action.payload;
    },
  },
});
export const { setTheme, login, logout, updateProfile, getPosts } =
  AppSlice.actions;
export default AppSlice.reducer;
