import { Button, Col, Form, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
//import GreenCheckmark from "./Courses/Modules/GreenCheckmark";
export default function AssignmentControls() {
  return (
    <div id="wd-assignment-controls" className="text-nowrap">
      <Form>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button
              variant="secondary"
              size="lg"
              className="me-1 float-end"
              id="wd-add-module-btn"
            >
              <FaPlus
                className="position-relative me-2"
                style={{ bottom: "1px" }}
              />
              Group
            </Button>
          </Col>
          <Col xs="auto">
            <Button
              variant="danger"
              size="lg"
              className="me-1 float-end"
              id="wd-add-module-btn"
            >
              <FaPlus
                className="position-relative me-2"
                style={{ bottom: "1px" }}
              />
              Assignment
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
