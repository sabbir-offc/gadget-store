import { updateProfile } from "firebase/auth";
import useAuth from "../../hook/useAuth";
import SocialLogin from "./SocialLogin";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import { axiosSecure } from "../../hook/useAxios";

const SignUp = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const handleCreateUser = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long.");
    } else if (!/[A-Z]/.test(password)) {
      return toast.error(
        "Password must contain at least one capital letter (A-Z)."
      );
    } else if (!/[!@#$%^&*()_+]/.test(password)) {
      return toast.error(
        "Password must contain at least one special character."
      );
    }

    const toastId = toast.loading("Account creating...");
    try {
      const res = await createUser(email, password);
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
      toast.success("Account Created Successfully.", { id: toastId });
      const user = res.user;
      const userInfo = {
        email: user?.email,
        name,
        image: photo,
        role: "customer",
        userId: user?.uid,
        status: "active",
      };

      await axiosSecure.post("/auth/access-token", { email: user?.email });
      const { data } = await axiosSecure.post("/user", userInfo);
      if (data.acknowledged) return navigate("/");
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
                      Sign up
                    </h3>
                  </div>
                  <div className="mt-4 text-base ">
                    <p>Sign up and get our latest product.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 ">
                <form className="space-y-4" onSubmit={handleCreateUser}>
                  <div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg  focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="photo"
                      id="photo"
                      required
                      className="block w-full px-5 py-3 text-base placeholder-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Enter your photo url"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="block w-full px-5 py-3 text-base placeholder-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg  focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="block w-full px-5 py-3 text-base  placeholder-gray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="flex flex-col mt-4 lg:space-y-2">
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Sign up
                    </button>
                  </div>
                </form>

                <div className="flex justify-between items-center my-5">
                  <p>{`Already have an account?`}</p>
                  <Link className="text-blue-500 underline" to="/signin">
                    Sign In
                  </Link>
                </div>
              </div>
              <SocialLogin></SocialLogin>
            </div>
            <div className="order-first hidden w-full lg:block">
              <img src="/register.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
