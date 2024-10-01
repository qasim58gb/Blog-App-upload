import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import CreatePost from "./Pages/CreatePage/CreatePage";
import Users from "./Pages/Users/Users";
import Login from "./Component/Login/Login";
import Message from "./Pages/Message";
import Home from "./Pages/Home/Home";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getLoginStatus,
  getUser,
  selectUser,
} from "./redux/features/auth/AuthSlice";
import ForgotPassword from "./Component/Forgot Password/ForgotPassword";
import ResetPassword from "./Component/ResetPassword/ResetPassword";
import UpdatePost from "./Component/UpdatePost/UpdatePost";
import Access from "./Component/Access/Access";
import RemoveAccess from "./Component/RemoveAccess/RemoveAccess";

axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(getLoginStatus());
  }, [dispatch]);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <div className="bg-gray-200 py-10 min-h-[100vh] ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createPost" element={<CreatePost />} />
            <Route path="/users" element={<Users />} />
            <Route path="/login" element={<Login />} />
            <Route path="/message" element={<Message />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route
              path="/resetPassword/:resetToken"
              element={<ResetPassword />}
            />
            <Route path="/updateBlog/:id" element={<UpdatePost />} />
            <Route path="/access/:id" element={<Access />} />
            <Route path="/removeAccess/:id" element={<RemoveAccess />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
