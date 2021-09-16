import { Component } from "react";
import JobList from "./JobList";
import { Container } from "react-bootstrap";
import Loading from "../Loading";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  query: state.query,
});

class Search extends Component {
  state = {
    jobs: [],
    isLoading: false,
  };

  getJobs = async (q) => {
    this.setState({
      ...this.state,
      isLoading: true,
    });
    try {
      let resp = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?search=" + q
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

  componentDidUpdate = async (prevProp) => {
    if (prevProp.query !== this.props.query) {
      await this.getJobs(this.props.query);
    }
  };

  render() {
    return (
      <Container>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <div className="home-cont">
            <JobList
              jobs={this.state.jobs}
            />
          </div>
        )}
      </Container>
    );
  }
}

export default connect(mapStateToProps)(Search);
