import axios from "axios";
export const BACKEND_BASEURL = "http://localhost:5000/";
export const API_USERS = `${BACKEND_BASEURL}api/users/`;

const register = async (userData) => {
  console.log(userData);
  const response = await axios.post(API_USERS + "register", userData);
  return response.data;
};

const login = async (userData) => {
  console.log(userData);
  const response = await axios.post(API_USERS + "login", userData);
  return response.data;
};

// logout user function
const logout = async () => {
  const response = await axios.get(API_USERS + "logout");
  return response.data;
};
// get login status function
const getLoginStatus = async () => {
  const response = await axios.get(API_USERS + "loginStatus");
  return response.data;
};

// get user function
const getUser = async () => {
  const response = await axios.get(API_USERS + "getUser");
  return response.data;
};

// get users function
const getUsers = async () => {
  const response = await axios.get(API_USERS + "getUsers");
  return response.data;
};

// del user function
const deleteUser = async (id) => {
  const response = await axios.delete(API_USERS + id);
  return response.data.message;
};

// change password function
const changePassword = async (userData) => {
  const response = await axios.patch(API_USERS + "changePassword", userData);
  return response.data.message;
};
// forgot password function
const forgotPassword = async (userData) => {
  const response = await axios.post(API_USERS + "forgotPassword", userData);
  return response.data.message;
};

// resetPassword function
const resetPassword = async ({ resetToken, userData }) => {
  const response = await axios.patch(
    `${API_USERS}resetPassword/${resetToken}`,
    userData
  );
  return response.data.message;
};

// updrade role user function
const upgradeRole = async (userData) => {
  const response = await axios.post(API_USERS + "upgradeRole", userData);
  return response.data.message;
};

const authServices = {
  register,
  login,
  getUser,
  logout,
  getLoginStatus,
  getUsers,
  deleteUser,
  upgradeRole,
  changePassword,
  forgotPassword,
  resetPassword,
};
export default authServices;
