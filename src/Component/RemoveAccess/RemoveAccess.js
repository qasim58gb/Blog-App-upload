import React, { useState } from "react";
import logo from "../../Asset/Capture-removebg-preview.png";
import useRedirectLogoutUser from "../../CustomHook/useRedirectLogoutUser";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeAccess } from "../../redux/features/blog/BlogSlice";

const RemoveAccess = () => {
  useRedirectLogoutUser("/");

  const { id } = useParams();

  console.log(id);

  const [formData, setFormData] = useState({
    email: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(removeAccess({ email: formData, id }));
    // navigate("/");
  };

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white w-full max-w-md p-6 rounded shadow-lg md:mx-0 mx-3 ">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Logo" className="md:h-12 h-10 w-auto" />
          </div>

          {/* Access Form */}
          <h2 className="md:text-2xl text-xl font-bold mb-4 text-center">
            Remove Access
          </h2>
          <form className="text-sm" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 p-2 outline-none block w-full border rounded-md focus:ring focus:ring-purple-600"
                placeholder="Enter your email..."
                required
              />
            </div>

            <div className="text-center mt-8">
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-700  to-purple-500 text-white w-[50%] py-2 rounded hover:from-purple-900 hover:via-blue-600 hover:to-purple-700"
              >
                Remove Access
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RemoveAccess;
