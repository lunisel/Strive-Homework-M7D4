import JobList from "./JobList";
import { Container } from "react-bootstrap";
import Loading from "../Loading";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fillJobsAction } from "../../actions";

const Homepage = () => {
  const isLoading = useSelector((state) => state.jobs.isLoading);
  const allJobs = useSelector((state) => state.jobs.allJobs);
  const query = useSelector((state) => state.jobs.query);

  const dispatch = useDispatch();

  useEffect(async () => {
    if (query) {
      dispatch(fillJobsAction(query));
    } else {
      dispatch(fillJobsAction());
    }
  }, [query]);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="home-cont">
          <JobList jobs={allJobs} />
          {/* <div className="prev-next-cont my-2">
              <div
                className="prev mr-2"
                onClick={() => this.getJobs(`limit=18&skip=0`)}
              >
                <BsArrowLeft style={{ fontSize: "2rem" }} />
              </div>
              <div
                className="next ml-2"
                onClick={() => this.getJobs("limit=18&skip=18")}
              >
                <BsArrowRight style={{ fontSize: "2rem" }} />
              </div>}
            </div> */}
        </div>
      )}
    </Container>
  );
};

export default Homepage;
