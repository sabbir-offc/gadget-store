import toast from "react-hot-toast";
import useAuth from "../hook/useAuth";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log Out Successfull.");
      })
      .catch(() => {
        toast.error("Log Out Failed.");
      });
  };
  const links = (
    <>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "px-3 py-2 text-blue-600 text-lg border-2 border-blue-600 rounded"
            : "px-3 py-2 text-black text-lg"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "px-3 py-2 text-blue-600 text-lg border-2 border-blue-600 rounded"
            : "px-3 py-2 text-black text-lg"
        }
        to="/add-product"
      >
        Add Product
      </NavLink>
      {user && (
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "px-3 py-2 text-blue-600 text-lg border-2 border-blue-600 rounded"
              : "px-3 py-2 text-black text-lg"
          }
          to={`/my-cart/${user?.uid}`}
        >
          My Cart
        </NavLink>
      )}
    </>
  );
  return (
    <div className="navbar container mx-auto mt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <img src="/logo.png" className="w-20 h-20" alt="" />
        <a className="font-semibold border-l-2 pl-2 border-l-blue-700 normal-case text-xl">
          Gadget Store
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p>{user.displayName}</p>
              </li>

              <li>
                <button
                  className="bg-blue-700 py-2 text-white hover:bg-blue-800 hover:text-white"
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "px-3 py-2 text-blue-600 text-lg border-2 border-blue-600 rounded"
                : "px-3 py-2 text-lg rounded bg-black text-white font-medium"
            }
            to="/signin"
          >
            Sign In
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
