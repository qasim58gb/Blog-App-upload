import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authServices from "../redux/features/auth/AuthServices";
import { toast } from "react-toastify";

const useRedirectLoginUser = (path) => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectLoginUser = async () => {
      let isLoggedIn;
      try {
        isLoggedIn = await authServices.getLoginStatus();
        console.log(isLoggedIn);
      } catch (error) {
        console.log(error);
      }

      if (isLoggedIn) {
        navigate(path);
        toast.info("user already login");
      }
    };

    redirectLoginUser();
  }, [path, navigate]);
};

export default useRedirectLoginUser;
