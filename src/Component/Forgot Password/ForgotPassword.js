import React, { useState } from "react";
import logo from "../../Asset/Capture-removebg-preview.png";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../redux/features/auth/AuthSlice";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("please fill the email first");
      console.log("please fill the email first");
    }

    const userData = {
      email: email,
    };

    await dispatch(forgotPassword(userData));
    // await dispatch(RESET());
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
            Forgot Password
          </h2>
          <form className="text-sm" onSubmit={handleEmailSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 p-2 outline-none block w-full border rounded-md focus:ring focus:ring-purple-600"
                placeholder="Enter your email..."
              />
            </div>

            <div className="text-center mt-8">
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-700  to-purple-500 text-white w-[50%] py-2 rounded hover:from-purple-900 hover:via-blue-600 hover:to-purple-700"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
