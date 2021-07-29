import React from "react";
import { Col } from "react-bootstrap";
import slack from "../images/slack.png";
const Card = (props) => {
  return (
    <Col xl="4">
      <div className="dashboard-card" style={{ background: props.background }}>
        <div>
          <img src={props.img} />
          <img src={slack} />
        </div>

        <p className="card-name">{props.name}</p>
        <p className="card-job">{props.job}</p>
        <button>Send Message</button>
      </div>
    </Col>
  );
};

export default Card;
