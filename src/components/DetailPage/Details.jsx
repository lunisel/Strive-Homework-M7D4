import { Button, Container } from "react-bootstrap";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { addToFavouritesAction } from "../../actions";

const mapStateToProps = (state) => ({
  job: state.selectedJob,
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (job) => dispatch(addToFavouritesAction(job)),
});

const Details = (props) => {
  return (
    <Container className="mt-4">
      {props.job && (
        <>
          <h1>{props.job.title}</h1>
          <p>Company name: {props.job.company_name}</p>
          <p>Category: {props.job.category}</p>
          {props.job.candidate_required_location !== "" ? (
            <p>Required location: {props.job.candidate_required_location}</p>
          ) : (
            <></>
          )}
          <p>Job type: {props.job.job_type}</p>
          {props.job.salary !== "" ? <p>Salary: {props.job.salary}</p> : <></>}
          {props.email ? (
            <Button
              onClick={() => {
                props.addToFavourites(props.job);
                alert("Added to favourites!");
              }}
            >
              Add to favourites
            </Button>
          ) : (
            <p
              className="btn btn-light"
              onClick={() => props.history.push("/profile")}
            >
              Log in to add to favourites
            </p>
          )}
        </>
      )}
    </Container>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Details));
