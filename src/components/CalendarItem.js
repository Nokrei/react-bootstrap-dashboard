import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const CalendarItem = (props) => {
  return (
    <div className="calendar-item">
      <Row>
        <Col xl="3">
          <div className="calendar-item-left">
            <p>{props.date}</p>
            <p>{props.day}</p>
          </div>
        </Col>
        <Col xl="7">
          <div className="calendar-item-mid">
            <p>{props.title}</p>
            <p>{props.person}</p>
          </div>
        </Col>
        <Col xl="2" className="d-flex align-items-center">
          <div className="calendar-item-right ">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CalendarItem;
