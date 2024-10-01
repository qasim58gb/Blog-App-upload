import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { IoMdPersonAdd } from "react-icons/io";
import logo from "../../Asset/Capture-removebg-preview.png";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, registerUser } from "../../redux/features/auth/AuthSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { isSuccess } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const handleLoginClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(registerUser(formData));
    dispatch(getUsers());

    if (isSuccess) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      {/* Login Button */}
      <button
        className=" flex  items-center gap-2 bg-gradient-to-r from-purple-700  to-purple-500 text-white px-4 py-2 rounded hover:from-purple-900 hover:via-blue-600 hover:to-purple-700"
        onClick={handleLoginClick}
      >
        <IoMdPersonAdd className="size-6" />
        Add New User
      </button>

      {/* Login Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-md p-6 rounded shadow-lg md:mx-0 mx-3 relative">
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-gray-600 text-xl font-bold hover:text-gray-800"
              onClick={handleClose}
            >
              <FiX className="w-6 h-6" />
            </button>

            {/* Logo */}
            <div className="flex justify-center mb-4">
              <img src={logo} alt="Logo" className="md:h-12 h-10 w-auto" />
            </div>

            {/* Register Form */}
            <h2 className="md:text-2xl text-xl font-bold mb-4 text-center">
              Register
            </h2>
            <form className="text-sm" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 p-2 outline-none block w-full border rounded-md focus:ring focus:ring-purple-600"
                  placeholder="Enter your name..."
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 p-2 outline-none block w-full border rounded-md focus:ring focus:ring-purple-600"
                  placeholder="Enter your email..."
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-2 p-2 outline-none block w-full border rounded-md focus:ring focus:ring-purple-600"
                  placeholder="Enter your password..."
                />
              </div>
              <div className="text-center mt-8">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-700  to-purple-500 text-white w-[50%] py-2 rounded hover:from-purple-900 hover:via-blue-600 hover:to-purple-700"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
