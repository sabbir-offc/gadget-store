import { Link, Outlet } from "react-router-dom";
import { HiMiniDocumentPlus } from "react-icons/hi2";
import { IoIosHome } from "react-icons/io";
import { FaUsersCog } from "react-icons/fa";
import { useState } from "react";
const Dashboard = () => {
  const [active, setActive] = useState(false);
  const menu = [
    {
      path: "/",
      icon: <IoIosHome size={25} />,
    },
    {
      path: "/dashboard/add-product",
      icon: <HiMiniDocumentPlus size={25} />,
    },
    {
      path: "/dashboard/manage-users",
      icon: <FaUsersCog size={25} />,
    },
  ];
  return (
    <>
      <div>
        <div>
          <div className="w-full container mx-auto py-5">
            <h1>Dashboard</h1>
          </div>
          <Outlet />
        </div>
        <div className="btm-nav">
          {menu?.map((item) => (
            <Link to={item.path} key={item?.path}>
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
