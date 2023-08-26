import { createSlice } from '@reduxjs/toolkit';


export const UserSlice = createSlice({
  name: 'counter',
  initialState: {
    user: null
  },

  reducers: {
    loginuser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },

});

export const { loginuser, logout } = UserSlice.actions;


export const selectUser = (state) => state.user.user;


export default UserSlice.reducer;
