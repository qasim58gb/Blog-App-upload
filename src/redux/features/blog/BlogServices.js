import axios from "axios";
export const BACKEND_BASEURL = "http://localhost:5000/";
export const API_BLOGS = `${BACKEND_BASEURL}api/blogs/`;

const postBlog = async (blogData) => {
  const response = await axios.post(API_BLOGS + "postBlog", blogData);
  return response;
};

const getBlogs = async (email) => {
  const response = await axios.get(API_BLOGS + "getBlogs", email);
  return response.data;
};

const updateBlog = async ({ blogData, id }) => {
  const response = await axios.patch(`${API_BLOGS}updateBlog/${id}`, blogData);
  return response;
};

const giveAccess = async ({ email, id }) => {
  const response = await axios.post(`${API_BLOGS}giveAccess/${id}`, email);
  return response;
};

const removeAccess = async ({ email, id }) => {
  const response = await axios.post(`${API_BLOGS}removeAccess/${id}`, email);
  return response;
};

const deleteBlog = async (id) => {
  const response = await axios.delete(`${API_BLOGS}deleteBlog/${id}`);
  return response;
};

const blogServices = {
  postBlog,
  getBlogs,
  updateBlog,
  giveAccess,
  removeAccess,
  deleteBlog,
};
export default blogServices;
