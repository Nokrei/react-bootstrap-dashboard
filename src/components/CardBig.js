import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const CardBig = (props) => {
  return (
    <Col xl="7" className="text-center ">
      <div className="card-big">
        <div className="card-big-top">
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>

        <Row className="card-big-mid ">
          <div className="">
            <img src={props.img} />
          </div>
          <p>{props.name}</p>
          <p>{props.desc}</p>
        </Row>
        <Row className="card-big-bottom">
          <Col xl="4">
            <p>{props.clients}</p>
            <p>Clients</p>
          </Col>
          <Col xl="4" className="side-border">
            <p>{props.reputation}</p>
            <p>Reputation</p>
          </Col>
          <Col xl="4">
            <p>{props.members}</p>
            <p>Members</p>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default CardBig;
