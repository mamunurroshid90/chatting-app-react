import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/loginSlice";
import activeSingleSlice from "./slices/ActiveSingleSlice";

const store = configureStore({
  reducer: {
    login: userSlice,
    active: activeSingleSlice,
  },
});
export default store;
