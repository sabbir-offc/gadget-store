import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { axiosSecure } from "../../hook/useAxios";

const SocialLogin = () => {
  const navigate = useNavigate();
  const { googleLogin } = useAuth();

  const handleGoogleLogin = async () => {
    try {
      const user = await googleLogin();
      const currentUser = user.user;

      if (currentUser) {
        const userInfo = {
          email: currentUser?.email,
          name: currentUser?.displayName,
          image: currentUser?.photoURL,
          role: "customer",
          userId: currentUser?.uid,
        };
        console.log(userInfo);

        await axiosSecure.post("/auth/access-token", {
          email: currentUser?.email,
        });
        const { data } = await axiosSecure.post("/user", userInfo);
        console.log(data);
        if (data.acknowledged) return navigate("/");
        toast.success("Login Successfull.");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-500"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 text-neutral-600 bg-white">
            Or continue with
          </span>
        </div>
      </div>
      <div>
        <button
          onClick={handleGoogleLogin}
          className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <div className="flex items-center justify-center">
            <FcGoogle></FcGoogle>
            <span className="ml-4"> Log in with Google</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
