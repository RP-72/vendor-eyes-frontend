import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: { offset: 0 },
  reducers: {
    setOffset: (state, action) => {
      state.offset += 9430;
    },
  },
});
export const { setOffset } = dataSlice.actions;
export default dataSlice.reducer;
