import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  users: [],
  errorMsg: "",
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  let url = `https://jsonplaceholder.typicode.com/users`;
  let response = await axios.get(url);
  console.log(response);
  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.errorMsg = `ops! something went wrong`;
      });
  },
});

export default usersSlice.reducer;
