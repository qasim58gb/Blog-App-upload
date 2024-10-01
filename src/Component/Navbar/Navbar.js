import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../Asset/Capture-removebg-preview.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/features/auth/AuthSlice";
import { OnlyLoginUser, OnlySuperAdmin } from "../protect/HiddenLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isSuccess } = useSelector((state) => state.auth);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    await dispatch(logoutUser());
    if (isSuccess) {
      navigate("/login");
    }
  };

  return (
    <nav className="flex justify-between items-center sticky top-0 backdrop-blur px-[10%] py-4 bg-white/50 z-40 ">
      {/* Logo */}
      <div className="logo text-lg font-bold">
        <NavLink to="/">
          <img className="h-10" src={logo} alt="logo" />
        </NavLink>
      </div>

      <div className="hidden md:flex space-x-6">
        <OnlyLoginUser>
          <NavLink to="/" className="hover:text-gray-700">
            Home
          </NavLink>
          <NavLink to="/createPost" className="hover:text-gray-700">
            CreatePost
          </NavLink>
          <OnlySuperAdmin>
            <NavLink to="/message" className="hover:text-gray-700">
              Message
            </NavLink>
            <NavLink to="/users" className="hover:text-gray-700">
              Users
            </NavLink>
          </OnlySuperAdmin>
          <NavLink onClick={logout} to="/" className="hover:text-gray-700">
            LogOut
          </NavLink>
        </OnlyLoginUser>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}{" "}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-gray-100/80 backdrop-blur flex flex-col items-center justify-center p-4 space-y-4 md:hidden">
          <OnlyLoginUser>
            <NavLink to="/" className="hover:text-gray-700">
              Home
            </NavLink>
            <NavLink to="/createPost" className="hover:text-gray-700">
              CreatePost
            </NavLink>
            <OnlySuperAdmin>
              <NavLink to="/message" className="hover:text-gray-700">
                Message
              </NavLink>
              <NavLink to="/users" className="hover:text-gray-700">
                Users
              </NavLink>
            </OnlySuperAdmin>
            <NavLink onClick={logout} to="/" className="hover:text-gray-700">
              LogOut
            </NavLink>
          </OnlyLoginUser>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
