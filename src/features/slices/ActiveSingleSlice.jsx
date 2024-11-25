import { createSlice } from "@reduxjs/toolkit";

export const activeSingleSlice = createSlice({
  name: "singleChat",
  initialState: {
    active: JSON.parse(localStorage.getItem("active")) || null,
  },
  reducers: {
    activeSingle: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { activeSingle } = activeSingleSlice.actions;
export default activeSingleSlice.reducer;
