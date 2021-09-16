import SingleJob from "./SingleJob";
import { Row, Col } from "react-bootstrap";

const JobList = (props) => {
  console.log(props.jobSelected);
  return (
    <div className="job-list-cont">
      <Row>
        {props.jobs &&
          props.jobs.map((j) => (
            <Col xs={12} md={3} className="mt-3" key={props.jobs._id}>
              <SingleJob
                job={j}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default JobList;