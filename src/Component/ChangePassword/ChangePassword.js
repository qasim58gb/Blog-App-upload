import React, { useState } from "react";
import { FaLock } from "react-icons/fa6";
import { FiX } from "react-icons/fi";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.newPassword ||
      !formData.currentPassword ||
      !formData.confirmPassword
    ) {
      toast.error("please fill all fields");
    }
    if (formData.newPassword >= 8) {
      toast.error("Password must be 8 character");
    }
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
    }
  };

  return (
    <div>
      {/* Trigger Button */}
      <button
        className=" flex  items-center gap-2 bg-gradient-to-r from-purple-700  to-purple-500 text-white px-4 py-2 rounded hover:from-purple-900 hover:via-blue-600 hover:to-purple-700"
        onClick={handleOpenModal}
      >
        <FaLock className="size-4 text-white" />
        <span>Change Password</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-md p-6 rounded shadow-lg md:mx-0 mx-3 relative">
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-gray-600 text-xl font-bold hover:text-gray-800"
              onClick={handleCloseModal}
            >
              <FiX className="w-6 h-6" />
            </button>

            {/* Change Password Form */}
            <h2 className="md:text-2xl text-xl font-bold mb-4 text-center">
              Change Password
            </h2>

            <form className="text-sm " onSubmit={handleSubmit}>
              {/* Current Password */}
              <div className="mb-4 text-start">
                <label
                  htmlFor="currentPassword"
                  className="block text-gray-700"
                >
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  placeholder="Enter your current password"
                  className="mt-2 p-2 outline-none block w-full border rounded-md focus:ring focus:ring-purple-600"
                  required
                />
              </div>

              {/* New Password */}
              <div className="mb-4 text-start">
                <label htmlFor="newPassword" className="block text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Enter a new password"
                  className="mt-2 p-2 outline-none block w-full border rounded-md focus:ring focus:ring-purple-600"
                  required
                />
              </div>

              {/* Confirm New Password */}
              <div className="mb-4 text-start">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700"
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your new password"
                  className="mt-2 p-2 outline-none block w-full border rounded-md focus:ring focus:ring-purple-600"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-[50%] bg-gradient-to-r from-purple-700 to-purple-500 text-white px-4 py-2 rounded hover:from-purple-900 hover:via-blue-600 hover:to-purple-700"
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangePassword;
