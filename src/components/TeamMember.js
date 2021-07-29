import React from "react";
import { Row, Col } from "react-bootstrap";
const TeamMember = (props) => {
  return (
    <Row className="team-member">
      <Col xl="3">
        <div className="member-img-wrap d-flex justify-content-center">
          <img src={props.img} />
        </div>
      </Col>
      <Col className="bottom-border">
        <div className="member-mid">
          <p>{props.name}</p>
          <p>{props.desc}</p>
        </div>
      </Col>
      <Col className="bottom-border">
        <p className="member-right">{props.lastSeen} ago</p>
      </Col>
    </Row>
  );
};

export default TeamMember;
