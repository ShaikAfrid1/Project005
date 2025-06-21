import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loaduser: (state, action) => {
      state.users = action.payload;
    },
    // eslint-disable-next-line no-unused-vars
    removeuser: (state, action) => {
      state.users = null;
    },
  },
});

export default userSlice.reducer;
export const { loaduser, removeuser } = userSlice.actions;
