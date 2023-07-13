import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, BarsArrowDownIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 5,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 4,
      name: "Products",
      path: "/products",
    },
    {
      id: 5,
      name: "Services",
      path: "/services",
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <nav className="mt-5 ml-5">
      <div onClick={() => setOpen(!open)} className="md:hidden">
        <span className="">
          {open === true ? (
            <BarsArrowDownIcon className="h-6 w-6 text-purple-600"></BarsArrowDownIcon>
          ) : (
            <Bars3Icon className="h-6 w-6 text-purple-600"></Bars3Icon>
          )}
        </span>
      </div>
      <ul
        className={` bg-purple-400 pt-3 pb-3 duration-500 md:flex absolute md:static ${
          open ? "top-6" : "-top-36"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
