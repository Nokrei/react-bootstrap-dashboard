import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import TeamMember from "./TeamMember";
import luke from "../images/luke.png";
import kate from "../images/kate.png";
import mike from "../images/mike.png";
import sara from "../images/sara.png";
import chris from "../images/chris.png";
const Team = () => {
  return (
    <Col xl="5">
      <div className="team">
        <Row>
          <Col xl="10">
            <h4>Team members</h4>
          </Col>
          <Col xl="2">
            <FontAwesomeIcon icon={faEllipsisH} />
          </Col>
        </Row>
        <TeamMember
          img={luke}
          name="Luke S."
          desc="Designer"
          lastSeen="10 min"
        />
        <TeamMember
          img={kate}
          name="Kate P."
          desc="Developer"
          lastSeen="20 min"
        />
        <TeamMember
          img={mike}
          name="Mike W."
          desc="Manager"
          lastSeen="14 min"
        />
        <TeamMember
          img={sara}
          name="Sara L."
          desc="Designer"
          lastSeen="28 min"
        />
        <TeamMember
          img={chris}
          name="Chris A."
          desc="Support"
          lastSeen="48 min"
        />
      </div>
    </Col>
  );
};

export default Team;
