import { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../hook/useAuth";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut();
  };
  const links = (
    <>
      <NavLink className="px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline">
        Home
      </NavLink>
      <NavLink className="px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline">
        Add Product
      </NavLink>
      <NavLink className="px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline">
        My Cart
      </NavLink>
    </>
  );
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex flex-col max-w-screen-xl p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <img className="w-20 h-20" src="/logo.png" alt="logo" />
          <h4 className="text-lg font-medium pr-3">Tech Gadget</h4>
          <button
            className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
            onClick={() => setOpen(!open)}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
              <path
                style={{ display: open ? "none" : "block" }}
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
              <path
                style={{ display: open ? "block" : "none" }}
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={`md:flex flex-col md:flex-row ${
            open ? "flex" : "hidden"
          } md:items-center flex-grow md:justify-end md:flex-row lg:border-l-2 lg:pl-2`}
        >
          {links}

          <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>{user?.displayName}</li>
                  <button onClick={handleLogOut} className="btn mt-3">
                    Sign Out
                  </button>
                </ul>
              </div>
            ) : (
              <NavLink to="/signin" className="border px-3 py-2 rounded">
                Sign in
              </NavLink>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
