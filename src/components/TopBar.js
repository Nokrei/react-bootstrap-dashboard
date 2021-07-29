import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import ukFlag from "../images/uk.png";
const TopBar = () => {
  return (
    <Row className="topbar ">
      <Col xl="4">
        <div className="input-wrap">
          <FontAwesomeIcon icon={faSearch} />
          <input placeholder="Search"></input>
        </div>
      </Col>
      <Col class="auto">
        <div className="text-end topbar-right">
          <img src={ukFlag} />
          <span>England</span>
          <FontAwesomeIcon icon={faBell} />
        </div>
      </Col>
    </Row>
  );
};

export default TopBar;
