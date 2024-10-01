import React, { useEffect, useLayoutEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useRedirectLogoutUser from "../../CustomHook/useRedirectLogoutUser";
import { useForm, Controller } from "react-hook-form";
import { getBlogs, updateBlog } from "../../redux/features/blog/BlogSlice";

import JoditEditor from "jodit-react";

const config = {
  uploader: {
    insertImageAsBase64URI: true,
  },
  defaultActionOnPaste: "insert_only_text",
  askBeforePasteHTML: false,
  askBeforePasteFromWord: false,
};

const UpdatePost = () => {
  useRedirectLogoutUser("/login");
  const { id } = useParams();
  const dispatch = useDispatch();

  const { register, handleSubmit, reset, control } = useForm();
  const blog = useSelector((state) =>
    state.blog.blogs.find((b) => b._id === id)
  );

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  useLayoutEffect(() => {
    if (blog) {
      reset({
        title: blog.title,
        category: blog.category,
        summary: blog.summary,
        content: blog.content,
        coverImage: blog.coverImage,
      });
    }
  }, [blog, reset]);

  const onSubmit = async (data) => {
    const updatedBlogData = new FormData();
    updatedBlogData.append("title", data.title);
    updatedBlogData.append("category", data.category);
    updatedBlogData.append("summary", data.summary);
    updatedBlogData.append("content", data.content);

    if (data.coverImage[0]) {
      updatedBlogData.append("coverImage", data.coverImage[0]);
    }
    const blogData = updatedBlogData;
    await dispatch(updateBlog({ id, blogData }));
  };

  return (
    <div className="w-[70%] mx-auto p-6 bg-white shadow-md rounded-md text-sm">
      <h2 className="md:text-2xl text-[14px] font-semibold mb-6 text-center">
        Update Post
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Title */}
        <div className="flex md:flex-row flex-col gap-4">
          <div className=" flex-1">
            <label htmlFor="title" className="block text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              {...register("title", { required: true })}
              placeholder="Title of your blog ..."
              className="mt-2 p-2 outline-none block w-full border rounded-md focus:ring focus:ring-purple-600"
              required
            />
          </div>

          {/* Category */}
          <div className="mb-4 flex-1">
            <label htmlFor="category" className="block text-gray-700">
              Category
            </label>
            <input
              type="text"
              id="category"
              {...register("category", { required: true })}
              placeholder="Sport, AI, Music etc."
              className="mt-2 p-2 outline-none block w-full border rounded-md focus:ring focus:ring-purple-600"
              required
            />
          </div>
        </div>

        {/* Summary */}
        <div className="mb-4">
          <label htmlFor="summary" className="block text-gray-700">
            Summary
          </label>
          <input
            type="text"
            id="summary"
            {...register("summary", { required: true })}
            placeholder="Intro of your blog ..."
            className="mt-2 p-2 outline-none block w-full border rounded-md focus:ring focus:ring-purple-600"
            required
          />
        </div>

        {/* Photo Upload */}
        <div className="mb-4">
          <label htmlFor="photo" className="block text-gray-700">
            Upload New Photo
          </label>
          <input
            type="file"
            id="photo"
            {...register("coverImage")}
            accept="image/*"
            className="mt-2 block w-full"
          />
        </div>

        {/* Details */}
        <div className="mb-6">
          <label htmlFor="details" className="block text-gray-700 mb-2">
            Details
          </label>
          <div className=" mb-4  ">
            <Controller
              control={control}
              name="content"
              render={({ field }) => (
                <JoditEditor
                  value={field.value}
                  config={config}
                  onChange={field.onChange}
                  placeholder="Write your blog ..."
                  className="mt-2 outline-none w-full border rounded-md"
                />
              )}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-[50%] bg-gradient-to-r from-purple-700  to-purple-500 text-white px-4 py-2 rounded hover:from-purple-900 hover:via-blue-600 hover:to-purple-700"
          >
            Update Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePost;
