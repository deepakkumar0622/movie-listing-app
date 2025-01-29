import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { nav } from "../constants/navigation";

export const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [SearchInput, SetSearchInput] = useState(" ");
  const navigate = useNavigate();

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    navigate(`/search?q=${SearchInput}`);
  }, [SearchInput]);

  const handleoutclick = () => {
    setIsClicked(false);
  };

  return (
    <div onClick={handleoutclick}>
      <header className="bg-neutral-600 opacity-75 fixed h-16  top-0  w-full ">
        <div className="container mx-auto px-10 flex items-center h-full">
          <div>
            <Link to={"/"}>
              <img src="./Logo.png" alt="Logo" width={80} />
            </Link>
          </div>
          <nav className="lg:flex hidden items-center justify-center gap-10 mx-auto">
            {nav.map((v, i) => {
              return (
                <div key={i}>
                  <NavLink
                    key={v.label}
                    to={v.href}
                    className={({ isActive }) =>
                      ` hover:scale-130 transition-all ${
                        isActive && "text-neutral-100 font-bold"
                      }`
                    }
                  >
                    {v.label}
                  </NavLink>
                </div>
              );
            })}
          </nav>
          <div className="flex gap-5 ml-auto">
            <div
              onClick={(e) => {
                e.stopPropagation();
                handleClick();
              }}
              className={`p-2 overflow-hidden w-[35px] h-[35px] lg:flex hidden items-center ${
                isClicked && "w-[270px]"
              } bg-gray-300 shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full active:scale-110 cursor-pointer  hover:duration-300 duration-30`}
            >
              <div>
                <FiSearch color="black" size={16} />
              </div>
              <input
                onClick={(e) => {
                  e.stopPropagation();
                }}
                type="text"
                onChange={(e) => {
                  SetSearchInput(e.target.value);
                }}
                value={SearchInput}
                placeholder="Search Here...."
                className="outline-none text-[15px] bg-transparent w-full 
                 text-black font-normal px-4"
              />
            </div>
            <div className="flex bg-gray-100 active:scale-75 transition-all rounded-full p-2 items-center md:hidden ">
              <Link to={"./search"}>
                <FiSearch size={18} color="black" />
              </Link>
            </div>
            <div className="cursor-pointer active:scale-75 transition-all  ">
              <img src="./man.png" alt="user" width={35} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
