import { Card } from "react-bootstrap";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { addSelectedJobAction } from "../../actions";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addSelectedJob: (job) => dispatch(addSelectedJobAction(job)),
});

const SingleJob = (props) => {
  return (
    <Card
      className="card-main"
      onClick={() => {
        props.addSelectedJob(props.job);
        props.history.push(`/details/${props.job._id}`);
      }}
      style={{ cursor: "pointer" }}
    >
      {/* <div className="cart-img-cont">
        <img
          className="job-image img-fluid"
          src="http://placehold.it/200x200"
          alt="job cover"
        />
      </div> */}
      <Card.Body className="d-flex">
        <div>
          <Card.Text className="font-weight-bold">{props.job.title}</Card.Text>
          <p>{props.job.company_name}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SingleJob));
