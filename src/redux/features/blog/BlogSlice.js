import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import blogServices from "./BlogServices";

const initialState = {
  blogs: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// postBlog thunkApi
export const postBlog = createAsyncThunk(
  "auth/postBlog",
  async (blogData, thunkAPI) => {
    try {
      return await blogServices.postBlog(blogData);
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

// getBlogs thunkApi
export const getBlogs = createAsyncThunk(
  "auth/getBlogs",
  async (email, thunkAPI) => {
    try {
      return await blogServices.getBlogs(email);
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

// updateBlog thunkApi
export const updateBlog = createAsyncThunk(
  "auth/updateBlog",
  async ({ blogData, id }, thunkAPI) => {
    try {
      return await blogServices.updateBlog({ blogData, id });
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

// giveAccess thunkApi
export const giveAccess = createAsyncThunk(
  "auth/giveAccess",
  async ({ email, id }, thunkAPI) => {
    try {
      return await blogServices.giveAccess({ email, id });
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

// removeAccess thunkApi
export const removeAccess = createAsyncThunk(
  "auth/removeAccess",
  async ({ email, id }, thunkAPI) => {
    try {
      return await blogServices.removeAccess({ email, id });
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

// deleteBlog thunkApi
export const deleteBlog = createAsyncThunk(
  "auth/deleteBlog",
  async (id, thunkAPI) => {
    try {
      return await blogServices.deleteBlog(id);
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

const blogSlice = createSlice({
  name: "blog",
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
      // postBlog
      .addCase(postBlog.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(postBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        // console.log(action.payload);
        toast.success("Blog upload successfully");
      })

      .addCase(postBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload.message);
      })

      // get blogs
      .addCase(getBlogs.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.blogs = action.payload.blogs;
        // console.log(action.payload.blogs);
      })

      .addCase(getBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.blogs = null;
        state.message = action.payload;
        toast.error(action.payload.message);
      })

      // updateBlog
      .addCase(updateBlog.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(updateBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        console.log(action.payload);
        toast.success("Blog Update successfully");
      })

      .addCase(updateBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload.message);
      })

      // give the access of Blog
      .addCase(giveAccess.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(giveAccess.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        console.log(action.payload.blog);
        toast.success(action.payload.message);
      })

      .addCase(giveAccess.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      // remove the access of Blog
      .addCase(removeAccess.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(removeAccess.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        // console.log(action.payload.blog);
        toast.success(action.payload.message);
      })

      .addCase(removeAccess.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      // delete the Blog
      .addCase(deleteBlog.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        // console.log(action.payload.blog);
        toast.success(action.payload.message);
      })

      .addCase(deleteBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      });
  },
});

export const selectBlogs = (state) => state.blog.blogs;
export const selectBlogSuccess = (state) => state.blog.isSuccess;

export default blogSlice.reducer;
