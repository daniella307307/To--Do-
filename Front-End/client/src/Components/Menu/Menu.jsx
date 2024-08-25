import {
  faCalendar,
  faEnvelope,
  faHand,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowAltCircleDown,
  faChevronUp,
  faHome,
  faTasks,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Menu() {
  return (
    <div>
      <div>
        <h1 className="pt-10 text-[2.5em] text-blue-900 ">
          Start Your Day <br /> & Be Productive
          <FontAwesomeIcon icon={faHand} className="ml-2 text-yellow-500" />
        </h1>
        <div className="flex flex-wrap items-center justify-between mt-8">
          <span>MENU</span>
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
        <div>
          <ul className="mt-6 space-y-4 text-gray-400 text-xl">
            <li className="flex flex-wrap items-center justify-between">
              <span >
                <FontAwesomeIcon icon={faHome} className="mr-2 text-lg"/>DashBoard
              </span>
              <FontAwesomeIcon icon={faArrowAltCircleDown} className="text-lg" />
            </li>
            <li  className="flex flex-wrap items-center justify-between">
            <span>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-lg"/>Message
              </span>
            </li>
            <li  className="flex flex-wrap items-center justify-between">
            <span>
                <FontAwesomeIcon icon={faTasks} className="mr-2 text-lg"/>My Tasks
              </span>
              <FontAwesomeIcon icon={faArrowAltCircleDown} className="text-lg" />
            </li>
            <li  className="flex flex-wrap items-center justify-between">
              <span> 
              <FontAwesomeIcon icon={faUsers} className="mr-2 text-lg"/>
                Friends</span>
              <FontAwesomeIcon icon={faArrowAltCircleDown} />
            </li>
            <li  className="flex flex-wrap items-center">
              <FontAwesomeIcon icon={faCalendar} className="mr-2 text-lg" />
              <span> Calendar</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
