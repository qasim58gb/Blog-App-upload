import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectUser,
} from "../../redux/features/auth/AuthSlice";

const OnlyLoginUser = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <>{children}</>;
  }
  return null;
};

const OnlyLogoutUser = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return <>{children}</>;
  }
  return null;
};

const OnlySuperAdmin = ({ children }) => {
  const user = useSelector(selectUser);

  if (user?.role === "superAdmin") {
    return <>{children}</>;
  }
  return null;
};

export { OnlyLoginUser, OnlyLogoutUser, OnlySuperAdmin };
