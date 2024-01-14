import React from "react";
import { Link, NavLink } from "react-router-dom";

const SideNavbar = () => {
  //  bg-slate-100
  const links = [
    { title: "Dashboard", path: "/" },
    { title: "Cars", path: "/cars" },
  ];

  return (
    <div className="SideBar w-[20%] px-6 py-[30px] bg-white justify-start items-start gap-2.5 inline-flex">
      <div className="Contents flex-col justify-start items-start gap-[464px] inline-flex w-[100%]">
        <div className="Top flex-col justify-start items-start gap-[35px] flex w-[100%]">
          <div className="Logo justify-start items-center gap-3 inline-flex">
            <div className="Logo px-[5px] py-1.5 bg-purple-500 rounded-md flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="Logo w-[16.91px] h-[14.85px] relative" />
            </div>
            <div className="Motiv text-neutral-800 text-2xl font-bold font-['DM Sans']">
              Motiv.
            </div>
          </div>
          <div className="Contents flex-col justify-start items-start gap-2.5 flex w-[100%]">
            {links?.map((data) => {
              return (
                <NavLink
                  to={data?.path}
                  className={({ isActive }) =>
                    isActive ? "bg-slate-100 w-[100%]" : "inactive"
                  }
                >
                  <div className="Dashboard h-[34px] px-2 py-[7px] rounded-md flex-col justify-center items-start gap-2.5 flex">
                    <div className="Dashboard justify-start items-center gap-2 inline-flex">
                      <div className="DashboardIcon w-5 h-5 relative" />
                      <div className="Dashboard text-zinc-600 text-sm font-medium font-['DM Sans']">
                        {data?.title}
                      </div>
                    </div>
                  </div>
                </NavLink>
              );
            })}
            <div className="Booking h-[34px] px-2 py-[7px] rounded-md" />
            <div className="SellCars h-[34px] px-2 py-[7px] rounded-md" />
            <div className="BuyCar h-[34px] px-2 py-[7px] rounded-md" />
            <div className="Services h-[34px] px-2 py-[7px] rounded-md" />
            <div className="Calender h-[34px] px-2 py-[7px] rounded-md" />
            <div className="Calender h-[34px] px-2 py-[7px] rounded-md" />
          </div>
        </div>
        <div className="Bottom flex-col justify-start items-start gap-6 flex">
          <div className="Settings justify-start items-center gap-2 inline-flex">
            <div className="Calender w-[174px] px-2 py-[7px] rounded-md flex-col justify-center items-start gap-2.5 inline-flex">
              <div className="Messages justify-start items-center gap-2 inline-flex">
                <div className="IconsCogLine w-5 h-5 relative" />
                <div className="Messages text-zinc-600 text-sm font-medium font-['DM Sans']">
                  Settings
                </div>
              </div>
            </div>
          </div>
          <div className="Logout justify-start items-center gap-2 inline-flex">
            <div className="Calender w-[174px] px-2 py-[7px] rounded-md flex-col justify-center items-start gap-2.5 inline-flex">
              <div className="Messages justify-start items-center gap-2 inline-flex">
                <div className="IconsSignOutLine w-5 h-5 relative" />
                <div className="Messages text-zinc-600 text-sm font-medium font-['DM Sans']">
                  Log out
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
