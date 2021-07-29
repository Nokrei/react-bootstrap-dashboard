import React from "react";
import { Row, Col } from "react-bootstrap";
import ashoka from "../images/ashoka.png";
import orely from "../images/orely.png";
import chart from "../images/chart.png";
import graph from "../images/graph.png";
import Card from "./Card";
import CardBig from "./CardBig";
import Team from "./Team";
import CalendarItem from "./CalendarItem";
const Content = () => {
  return (
    <Row className="content">
      <Col xl="7">
        <Row>
          <h2>My Dashboard</h2>
        </Row>
        <Row>
          <Card
            background="linear-gradient(4.29deg, #FDEDE5 7.36%, #FEF5F0 53.39%)"
            img={ashoka}
            name="Ashoka Tano"
            job="Product Design @ Chicago"
          ></Card>
          <Card
            background="linear-gradient(1.51deg, #EBF1FF 5.34%, #F2F5FE 72.41%)"
            img={ashoka}
            name="Ashoka Tano"
            job="Product Design @ Chicago"
          ></Card>
          <Card
            background="linear-gradient(15.95deg, #F1F8FE 15.52%, #ECF6FF 70.25%)"
            img={ashoka}
            name="Ashoka Tano"
            job="Product Design @ Chicago"
          ></Card>
        </Row>
        <Row>
          <CardBig
            img={orely}
            name="Orely Studio"
            desc="Design studio focus on UI/UX Design"
            clients="23"
            reputation="#2"
            members="17"
          />
          <Team />
        </Row>
      </Col>
      <Col xl="5" className="content-right">
        <Row>
          <Col>
            <h2>Schedules</h2>
          </Col>
          <Col>
            <p>View details</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={graph} />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={chart} />
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Today</h4>
          </Col>
        </Row>
        <CalendarItem
          date="23"
          day="Mon"
          title="Food app concept"
          person="UX Designer"
        />
        <CalendarItem
          date="29"
          day="Tue"
          title="Layout conversion"
          person="JS Developer"
        />
      </Col>
    </Row>
  );
};

export default Content;
