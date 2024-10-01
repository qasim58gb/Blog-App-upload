import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../features/auth/AuthSlice";
import FilterSlice from "../features/FilterSlice";
import MessageSlice from "../features/message/MessageSlice";
import BlogSlice from "../features/blog/BlogSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    filter: FilterSlice,
    message: MessageSlice,
    blog: BlogSlice,
  },
});
