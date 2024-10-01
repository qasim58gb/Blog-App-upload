import React, { useEffect } from "react";
import BlogCard from "../../Component/BlogCard";
import useRedirectLogoutUser from "../../CustomHook/useRedirectLogoutUser";
import ProfileCard from "../../Component/ProfileCard/ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { getUser, selectUser } from "../../redux/features/auth/AuthSlice";
import { getBlogs, selectBlogs } from "../../redux/features/blog/BlogSlice";

const Home = () => {
  useRedirectLogoutUser("/login");

  const dispatch = useDispatch();

  const blogs = useSelector(selectBlogs);

  const user = useSelector(selectUser);
  const email = user?.email;

  useEffect(() => {
    if (email) {
      dispatch(getBlogs(email));
    }
  }, [dispatch, email]);

  return (
    <div className=" w-[70%] mx-auto">
      <ProfileCard user={user} />
      {Array.isArray(blogs) && blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog._id}>
            <BlogCard
              id={blog._id}
              title={blog.title}
              category={blog.category}
              summary={blog.summary}
              image={blog.image}
              date={blog.createdAt}
              access={blog.access}
            />
          </div>
        ))
      ) : (
        <p>No blogs available</p>
      )}
    </div>
  );
};

export default Home;
