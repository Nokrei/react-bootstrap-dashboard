import React from "react";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarPlus,
  faCog,
  faHome,
  faList,
  faPowerOff,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";
import avatarSide from "../images/avatarSide.png";

const SideBar = () => {
  return (
    <div className=" text-center">
      <div className="logo-wrap">
        <img src={logo} />
      </div>
      <ul>
        <li>
          <FontAwesomeIcon icon={faHome} />
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarPlus} />
        </li>
        <li>
          <FontAwesomeIcon icon={faUserTie} />
        </li>
        <li>
          <FontAwesomeIcon icon={faCog} />
        </li>
        <li>
          <FontAwesomeIcon icon={faList} />
        </li>
        <li>
          <FontAwesomeIcon icon={faPowerOff} />
        </li>
      </ul>
      <div className="avatar-side-wrap">
        <img src={avatarSide} />
      </div>
    </div>
  );
};

export default SideBar;
