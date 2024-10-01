import React, { useState } from "react";
import useRedirectLogoutUser from "../../CustomHook/useRedirectLogoutUser";
import { useDispatch, useSelector } from "react-redux";
import {
  postBlog,
  selectBlogSuccess,
} from "../../redux/features/blog/BlogSlice";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";

const config = {
  uploader: {
    insertImageAsBase64URI: true,
  },
  defaultActionOnPaste: "insert_only_text",
  askBeforePasteHTML: false,
  askBeforePasteFromWord: false,
};

const CreatePost = () => {
  useRedirectLogoutUser("/login");

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    summary: "",
    coverImage: null,
    content: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhotoChange = (e) => {
    setFormData({
      ...formData,
      coverImage: e.target.files[0],
    });
  };

  const handleDetailsChange = (value) => {
    setFormData({
      ...formData,
      content: value,
    });
  };

  const isSuccess = useSelector(selectBlogSuccess);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = new FormData();
    blogData.append("title", formData.title);
    blogData.append("category", formData.category);
    blogData.append("summary", formData.summary);
    blogData.append("content", formData.content);
    blogData.append("coverImage", formData.coverImage);

    // for (const pair of blogData.entries()) {
    //   console.log(`${pair[0]}:`, pair[1]);
    // }
    await dispatch(postBlog(blogData));

    if (isSuccess) {
      navigate("/");
    }
  };

  return (
    <div className="w-[70%] mx-auto p-6 bg-white shadow-md rounded-md text-sm">
      <h2 className="md:text-2xl text-[14px] font-semibold mb-6 text-center">
        Create New Post
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="flex md:flex-row flex-col gap-4">
          <div className=" flex-1">
            <label htmlFor="title" className="block text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
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
              name="category"
              value={formData.category}
              onChange={handleChange}
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
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            placeholder="Intro of your blog ..."
            className="mt-2 p-2 outline-none block w-full border rounded-md focus:ring focus:ring-purple-600"
            required
          />
        </div>

        {/* Photo Upload */}
        <div className="mb-4">
          <label htmlFor="photo" className="block text-gray-700">
            Upload Photo
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handlePhotoChange}
            className="mt-2 block w-full"
          />
        </div>

        {/* Details */}
        <div className="mb-6">
          <label htmlFor="details" className="block text-gray-700 mb-2">
            Details
          </label>
          <div className="  mb-4  ">
            <JoditEditor
              value={formData.content}
              config={config}
              onChange={handleDetailsChange}
              placeholder="Write your blog ..."
              className="mt-2 outline-none w-full border rounded-md"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-[50%] bg-gradient-to-r from-purple-700  to-purple-500 text-white px-4 py-2 rounded hover:from-purple-900 hover:via-blue-600 hover:to-purple-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
