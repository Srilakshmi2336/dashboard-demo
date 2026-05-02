import { createSlice } from "@reduxjs/toolkit";

const analyticsSlice = createSlice({
  name: "analytics",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
      state.loading = false; // ✅ IMPORTANT
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false; // ✅ IMPORTANT
    },
  },
});

export const { setLoading, setData, setError } = analyticsSlice.actions;
export default analyticsSlice.reducer;