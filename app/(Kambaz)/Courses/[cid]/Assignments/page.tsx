import Link from "next/link";
import AssignmentControls from "./AssignmentControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControls />
      <br />
      <br />
      <br />
      <br />
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>{" "}
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </Link>{" "}
          <br></br>
          Multipl Modules | Not available until May 6 at 12:00am | Due May 13 at
          11:59pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A2 - CSS + BOOTSTRAP
          </Link>
          <br></br>
          Multipl Modules | Not available until May 13 at 12:00am | Due May 20
          at 11:59pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A3 - JAVASCRIPT + REACT
          </Link>{" "}
          <br></br>
          Multipl Modules | Not available until May 20 at 12:00am | Due May 27
          at 11:59pm | 100 pts
        </li>
      </ul>
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-assignment p-0 mb-5 fs-5 border-gray">
          <BsGripVertical className="me-2 fs-3" /> Assignments
          <ListGroup className="wd-assignment-list rounded-0">
            <ListGroupItem className="wd-a p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <Link
                href="/Courses/1234/Assignments/123"
                className="wd-assignment-link"
              >
                A1
              </Link>
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-a p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <Link
                href="/Courses/1234/Assignments/123"
                className="wd-assignment-link"
              >
                A2
              </Link>
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-a p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <Link
                href="/Courses/1234/Assignments/123"
                className="wd-assignment-link"
              >
                A3
              </Link>
              <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
