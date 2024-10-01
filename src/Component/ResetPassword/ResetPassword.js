import React, { useState } from "react";
import logo from "../../Asset/Capture-removebg-preview.png";
import { useDispatch, useSelector } from "react-redux";
import {
  RESET,
  resetPassword,
  selectSuccess,
} from "../../redux/features/auth/AuthSlice";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const { resetToken } = useParams();
  const isSuccess = useSelector(selectSuccess);
  const navigate = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      toast.error("please fill the password first");
      console.log("please fill the password first");
      return;
    }

    if (newPassword.length < 8) {
      toast.error("password should be 8 character");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match");
      console.log("New passwords do not match");
      return;
    }
    console.log(resetToken);

    const userData = {
      password: newPassword,
    };

    await dispatch(resetPassword({ userData, resetToken }));
    if (isSuccess) {
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white w-full max-w-md p-6 rounded shadow-lg md:mx-0 mx-3 ">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Logo" className="md:h-12 h-10 w-auto" />
          </div>

          {/* Register Form */}
          <h2 className="md:text-2xl text-xl font-bold mb-4 text-center">
            Reset Password
          </h2>
          <form className="text-sm" onSubmit={handleEmailSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">New Password</label>
              <input
                type="password"
                name="New password"
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-2 p-2 outline-none block w-full border rounded-md focus:ring focus:ring-purple-600"
                placeholder="Enter your password..."
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-2 p-2 outline-none block w-full border rounded-md focus:ring focus:ring-purple-600"
                placeholder="Enter your password..."
              />
            </div>

            <div className="text-center mt-8">
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-700  to-purple-500 text-white w-[50%] py-2 rounded hover:from-purple-900 hover:via-blue-600 hover:to-purple-700"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
