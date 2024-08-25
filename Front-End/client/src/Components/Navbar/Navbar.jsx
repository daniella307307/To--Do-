import { faSun } from "@fortawesome/free-regular-svg-icons";
import {
  faBell,
  faChevronDown,
  faClock,
  faGear,
  faSearch,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import girl from '../assates/girl.jpg';

function Navbar() {
  return (
    <div className="p-2">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex flex-wrap items-center space-x-2">
          <FontAwesomeIcon
            icon={faClock}
            className="text-4xl bg-orange-400 rounded-full p-2 text-white"
          />
          <span className="text-blue-700 font-semibold text-2xl">
            TaskMaster.
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center space-x-4 w-[65vh] h-[3em] focus:outline-none p-4 border-blue-700 border-[2px] rounded-[3em]">
          <FontAwesomeIcon icon={faSearch} className="text-xl" />
          <input
            type="search"
            placeholder="Start searching here..."
            className="bg-transparent flex-grow border-none focus:border-none focus:outline-none"
          />
          <FontAwesomeIcon icon={faSliders} />
        </div>

        <div className="flex flex-wrap items-center space-x-6">
          <FontAwesomeIcon
            icon={faSun}
            className="text-gray-800 font-bold p-2 bg-gray-200 text-xl rounded-lg"
          />
          <FontAwesomeIcon
            icon={faBell}
            className="text-gray-800 font-bold p-2 bg-gray-200 text-xl rounded-lg"
          />
          <FontAwesomeIcon
            icon={faGear}
            className="text-gray-800 font-bold p-2 bg-gray-200 text-xl rounded-lg"
          />
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <img
              src={girl}
              alt="Profile avatar of Kim So Min"
              className="h-12 rounded-full border-black border-[2px]"
            />
            <div>
              <h1 className="text-lg font-bold text-blue-900">Kim So Min</h1>
              <span className="text-gray-800 font-light">UI/UX Designer</span>
            </div>
          </div>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
