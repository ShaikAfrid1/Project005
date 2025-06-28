import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // 👉 singular 'user' not 'users'
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loaduser: (state, action) => {
      state.user = action.payload;
    },
    removeuser: (state) => {
      state.user = null;
    },
  },
});

export const { loaduser, removeuser } = userSlice.actions;
export default userSlice.reducer;
