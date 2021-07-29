import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Content from "./Content";

function App() {
  return (
    <Container className="App">
      <Row>
        <Col xl="1" className="sidebar">
          <SideBar />
        </Col>
        <Col xl="11">
          <TopBar />
          <Content />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
