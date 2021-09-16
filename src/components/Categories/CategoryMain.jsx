import { Component } from "react";
import JobList from "../Homepage/JobList";
import { Container } from "react-bootstrap";
import Loading from "../Loading";

class CategoryMain extends Component {
  state = {
    jobs: [],
    isLoading: false,
  };

  getJobs = async () => {
    this.setState({
      ...this.state,
      isLoading: true,
    });
    try {
      let resp = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?category=" +
          this.props.match.params.name
      );
      if (resp.ok) {
        let data = await resp.json();
        let jobs = data.data;
        this.setState({ ...this.state, jobs: jobs });
        console.log(this.state);
        this.setState({
          ...this.state,
          isLoading: false,
        });
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount = async () => {
    await this.getJobs();
  };

  componentDidUpdate = async (prevProp) => {
    if (prevProp.location.pathname !== this.props.location.pathname) {
      await this.getJobs();
    }
  };

  render() {
    return (
      <Container>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <div className="home-cont">
            <JobList jobs={this.state.jobs} />
          </div>
        )}
      </Container>
    );
  }
}

export default CategoryMain;
