import { NavLink } from "react-router-dom";
import { mobilenav } from "../constants/navigation";

const MobileNav = () => {
  return (
    <div className="md:hidden fixed bottom-0 h-14 bg-neutral-600 opacity-70 w-full">
      <div className="flex items-center h-full justify-between text-neutral-400 ">
        {mobilenav.map((v) => {
          return (
            <NavLink
              key={v.label + "Mobilenavigation"}
              to={v.href}
              className={({ isActive }) =>
                `px-5 flex flex-col h-ful items-center justify-center active:scale-125 transition-all ${
                  isActive && "text-white"
                }`
              }
            >
              <div className="text-2xl">{v.icon}</div>
              <p className="text-sm ">{v.label}</p>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav;
