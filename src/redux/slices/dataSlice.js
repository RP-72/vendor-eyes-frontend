import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: { offset: 0 },
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.offset += 10;
    },
  },
});
export const { setIsAuthenticated, setAuthToken } = dataSlice.actions;
export default dataSlice.reducer;
