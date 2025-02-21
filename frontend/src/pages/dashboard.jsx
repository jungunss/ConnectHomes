import { useState } from "react";
import {
  BsArrowLeftShort,
  BsSearch,
  BsChevronDown,
  BsFillHousesFill,
} from "react-icons/bs";
import { RiHomeWifiFill } from "react-icons/ri";
import { MdDashboardCustomize, MdSpaceDashboard } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";

import TableEmployee from "../components/TableEmployee";
import TableProduct from "../components/TableProduct";
import CardProduct from "../components/CardProduct";

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <div className="flex">
      <div
        className={`bg-blue-950 h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-blue-950 text-3xl rounded-full absolute -right-3 top-9 border border-b-blue-900 cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <RiHomeWifiFill
            className={`bg-amber-400 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            ConnectHomes
          </h1>
        </div>
        {/* SEARCH */}
        <div
          className={`flex items-center rounded-md bg-white mt-6 ${
            !open ? "px-2.5" : "px-4"
          } py-2`}
        >
          <BsSearch
            className={`text-blue-950 text-lg block float-left cursor-pointer ${
              open && "mr-2"
            }`}
          />
          <input
            type={"search"}
            placeholder="Search"
            className={`bg-transparent w-full text-black border-none focus: outline-none ${
              !open && "hidden"
            }`}
          />
        </div>
        {/* ## SEARCH ## */}

        {/* MENU NAVIGATION */}
        <ul className="pt-2">
          <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-600 rounded-md mt-2">
            <span className="text-2xl block float-left">
              <MdSpaceDashboard />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-100 ${
                !open && "hidden"
              }`}
            >
              Dashboard
            </span>
          </li>

          <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-600 rounded-md mt-2">
            <span className="text-2xl block float-left">
              <HiMiniUserGroup />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-100 ${
                !open && "hidden"
              }`}
            >
              Employees
            </span>
          </li>

          <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-600 rounded-md mt-2">
            <span className="text-2xl block float-left">
              <BsFillHousesFill />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-100 ${
                !open && "hidden"
              }`}
            >
              Property
            </span>
          </li>

          <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-600 rounded-md mt-9">
            <span className="text-2xl block float-left">
              <MdDashboardCustomize />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-100 ${
                !open && "hidden"
              }`}
            >
              Projects
            </span>
            {open && (
              <BsChevronDown
                className={`${submenuOpen && "rotate-180"}`}
                onClick={() => setSubmenuOpen(!submenuOpen)}
              />
            )}
          </li>

          {submenuOpen && open && (
            <ul>
              <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-gray-600 rounded-md">
                Submenu 1
              </li>
              <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-gray-600 rounded-md">
                Submenu 2
              </li>
              <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-gray-600 rounded-md">
                Submenu 3
              </li>
            </ul>
          )}

          <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-600 rounded-md mt-2">
            <span className="text-2xl block float-left">
              <MdDashboardCustomize />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-100 ${
                !open && "hidden"
              }`}
            >
              Analytics
            </span>
          </li>

          <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-600 rounded-md mt-2">
            <span className="text-2xl block float-left">
              <MdDashboardCustomize />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-100 ${
                !open && "hidden"
              }`}
            >
              Inbox
            </span>
          </li>

          <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-600 rounded-md mt-9">
            <span className="text-2xl block float-left">
              <MdDashboardCustomize />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-100 ${
                !open && "hidden"
              }`}
            >
              Profile
            </span>
          </li>

          <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-600 rounded-md mt-2">
            <span className="text-2xl block float-left">
              <MdDashboardCustomize />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-100 ${
                !open && "hidden"
              }`}
            >
              Setting
            </span>
          </li>

          <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-600 rounded-md mt-2">
            <span className="text-2xl block float-left">
              <MdDashboardCustomize />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-100 ${
                !open && "hidden"
              }`}
            >
              Logout
            </span>
          </li>
        </ul>
        {/* ## MENU NAVIGATION ## */}
      </div>

      <div className="flex-1 max-h-screen p-7 pt-8">
        {/* <TableProduct /> */}
        {/* <TableEmployee /> */}
        <CardProduct />
      </div>
    </div>
  );
}
