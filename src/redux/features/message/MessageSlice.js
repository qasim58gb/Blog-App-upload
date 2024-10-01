import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import messageServices from "./MessageServices";

const initialState = {
  messages: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// getMessages thunkApi
export const getMessages = createAsyncThunk(
  "auth/getMessages",
  async (_, thunkAPI) => {
    try {
      return await messageServices.getMessages();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    RESET(state) {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // getMessages
      .addCase(getMessages.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(getMessages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.messages = action.payload;
        state.message = action.payload;
        console.log(action.payload);
        toast.success("Message get successful");
      })

      .addCase(getMessages.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.messages = null;

        state.message = action.payload;
        toast.error(action.payload.message);
      });
  },
});
export const selectMessages = (state) => state.message.messages;

export default messageSlice.reducer;
