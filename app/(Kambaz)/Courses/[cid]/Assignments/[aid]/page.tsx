import { Col, FormControl, FormLabel, FormSelect, Row } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <h3>Assignment Name</h3>
      <Row>
        <FormControl
          id="wd-assignment-name"
          placeholder="A1"
          className="mb-2"
        />
      </Row>
      <Row>
        <FormControl as="textarea" style={{ height: "100px" }} />
        The assignment is available online Submit a link to the landing page of
      </Row>
      <Row>
        <FormLabel column sm={2}>
          {" "}
          Points{" "}
        </FormLabel>
        <Col sm={10}>
          <FormControl
            id="wd-assignment-points"
            placeholder="100"
            className="mb-4"
          />
        </Col>
      </Row>
      <Row className="mb-3" controlId="textarea2">
        <FormLabel column sm={2}>
          {" "}
          Bio{" "}
        </FormLabel>
        <Col sm={10}>
          <FormControl as="textarea" style={{ height: "100px" }} />
        </Col>
      </Row>
      <Row>
        <FormLabel column sm={2}>
          Assignment Group
        </FormLabel>
        <Col sm={10}>
          <FormSelect>
            <option value="ASSIGNMENTS" defaultChecked>
              ASSIGNMENTS
            </option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </FormSelect>
        </Col>
      </Row>
      <Row>
        <FormLabel column sm={2}>
          {" "}
          Display Grade as{" "}
        </FormLabel>
        <Col sm={10}>
          <FormSelect>
            <option value="PERCENTAGE" defaultChecked>
              Percentage
            </option>
            <option value="TOTAL">Total points</option>
          </FormSelect>
        </Col>
      </Row>
    </div>
    /*
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            {<input id="wd-group" defaultValue={100} />}
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="PERCENTAGE">Percentage</option>
              <option value="TOTAL">Total points</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="ONLINE">Online</option>
              <option value="IN-PERSON">In-person</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-text-entry">Online Entry Options</label>
            <br />
          </td>
          <td>
            <input type="checkbox" name="check-genre" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input type="checkbox" name="check-genre" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input
              type="checkbox"
              name="check-genre"
              id="wd-media-recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input
              type="checkbox"
              name="check-genre"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input type="checkbox" name="check-genre" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Upload</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
            <br />
            <input id="wd-assign-to" defaultValue={"Everyone"} />
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <label htmlFor="wd-due-date"> Due </label>
            <br />
            <input type="date" defaultValue="2024-05-13" id="wd-due-date" />
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <label htmlFor="wd-available-from"> Available from </label>
            <br />
            <input
              type="date"
              defaultValue="2024-05-06"
              id="wd-available-from"
            />
          </td>
          <td align="left" valign="top">
            <label htmlFor="wd-available-until"> Until </label>
            <br />
            <input
              type="date"
              defaultValue="2024-05-20"
              id="wd-available-until"
            />
          </td>
        </tr>
      </table>
      <button>Cancel</button>
      <button>Save</button>
    </div>*/
  );
}
