import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hook/useAuth";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        const user = res.user;
        const userInfo = {
          email: user?.email,
          userName: user?.displayName,
          image: user?.photoURL,
          userId: user?.uid,
        };
        fetch(
          "https://brand-shop-server-1uv6sggcd-mdsabbirhowlader420-gmailcom.vercel.app/users",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((err) => {
        console.log(err);
      });
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
