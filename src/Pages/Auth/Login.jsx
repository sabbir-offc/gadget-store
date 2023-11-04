import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hook/useAuth";
import toast from "react-hot-toast";
import useAxios from "../../hook/useAxios";
const Login = () => {
  const { loginUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axios = useAxios();
  const handleLogin = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Logging in...");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const user = await loginUser(email, password);
      toast.success("Login SuccessFull.", { id: toastId });
      //generate access token

      axios
        .post("/api/v1/auth/access-token", { email: user.user?.email })
        .then((res) => {
          if (res.data.message) {
            navigate(location.state ? location.state : "/");
          }
        });
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };
  return (
    <section>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="justify-center mx-auto text-left align-bottom transition-all transform  rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
            <div className="w-full px-6 py-3">
              <div>
                <div className="mt-3 text-left sm:mt-5">
                  <div className="inline-flex items-center w-full">
                    <h3 className="text-lg font-bold  l eading-6 lg:text-5xl">
                      Sign In
                    </h3>
                  </div>
                  \
                </div>
              </div>
              <form onSubmit={handleLogin}>
                <div className="mt-6 space-y-4">
                  <div>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="block w-full px-5 py-3 text-base placeholder-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg  focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="block w-full px-5 py-3 text-base placeholder-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="flex flex-col mt-4 lg:space-y-2">
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </form>
              <div className="flex justify-between items-center my-5">
                <p>{`Don't have an account?`}</p>
                <Link className="text-blue-500 underline" to="/signup">
                  Sign Up
                </Link>
              </div>

              <SocialLogin></SocialLogin>
            </div>
            <div className="order-first hidden w-full lg:block">
              <img src="/login.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
