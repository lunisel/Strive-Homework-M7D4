import { Component } from "react";
import JobList from "./JobList";
import { Container } from "react-bootstrap";
import Loading from "../Loading";

class Homepage extends Component {
  state = {
    jobs: [],
    isLoading: true
  };

  getJobs = async () => {
    try {
      let resp = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?limit=18"
      );
      if (resp.ok) {
        let data = await resp.json();
        let jobs = data.data;
        this.setState({ ...this.state, jobs: jobs });
        console.log(this.state);
        this.setState({
          ...this.state,
          isLoading: false
        });
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount = async () => {
    await this.getJobs("limit=18");
  };

  render() {
    return (
      <Container>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <div className="home-cont">
            <JobList jobs={this.state.jobs} />
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
  }
}

export default Homepage;
