import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdAddModerator, MdRemoveModerator } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  deleteBlog,
  getBlogs,
  selectBlogSuccess,
} from "../../redux/features/blog/BlogSlice";
import { toast } from "react-toastify";
import AccessPeoples from "../AccessPeoples/AccessPeoples";

const BlogCard = ({ id, title, date, category, summary, image, access }) => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength);
    }
    return text;
  };

  const isSuccess = useSelector(selectBlogSuccess);

  const dispatch = useDispatch();

  const handleDeleteBlog = async (id) => {
    console.log("delete");
    console.log(id);
    await dispatch(deleteBlog(id));
    if (isSuccess) {
      console.log(isSuccess);
      toast.success("blog has been deleted");
      dispatch(getBlogs());
    }
  };

  return (
    <div className="flex flex-col md:flex-row  bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Left: Image Section */}
      <div className="md:w-1/3 2xl:w-1/5 w-full p-4 ">
        <img
          className="object-cover w-full h-52  rounded-lg"
          src={image}
          alt="Blog"
        />
      </div>

      <div className="md:w-2/3 2xl:w-4/5 w-full p-6">
        <div className="flex items-center gap-3">
          <h2 className="text-[1.3rem] font-semibold hover:text-gray-400 text-gray-700 ">
            {truncateText(title, 45) + "..."}
          </h2>
          <span className="mx-2">
            <AccessPeoples access={access} />
          </span>
        </div>

        <div className="text-gray-500 text-[10px] mt-1 ">
          <span>{date}</span> |{" "}
          <span className="  text-gray-400  hover:text-gray-900 ">
            {category}
          </span>
        </div>
        <p className="mt-2 text-gray-400 text-sm">
          {truncateText(summary, 200)}
          <span>...</span>
        </p>
      </div>
      <div className="flex justify-center items-center md:flex-col flex-row p-4 gap-4">
        <NavLink to={`/updateBlog/${id}`}>
          <FaEdit title="Edit blog" className="text-blue-500 size-8" />
        </NavLink>
        <NavLink to={`/access/${id}`}>
          <MdAddModerator
            title="Give access to other"
            className="text-green-500 size-8"
          />
        </NavLink>
        <NavLink to={`/removeAccess/${id}`}>
          <MdRemoveModerator
            title="Remove the access"
            className="text-gray-500 size-8"
          />
        </NavLink>
        <NavLink onClick={() => handleDeleteBlog(id)}>
          <RiDeleteBin5Fill
            title="Delete blog"
            className="text-red-500 size-8"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default BlogCard;
