import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/loginSlice";

const store = configureStore({
  reducer: {
    login: userSlice,
  },
});
export default store;
