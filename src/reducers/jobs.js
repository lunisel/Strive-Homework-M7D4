import { initialState } from "../store";

const jobsReducer = (state = initialState.jobs, action) => {
  switch (action.type) {
    case "FILL_JOBS":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          allJobs: action.payload
        }
      };
    case "ADD_SELECTED_JOB":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          selectedJob: action.payload
        }
      };
    case "FILL_JOBS_LOADING":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          isLoading: action.payload
        }
      };
    case "FILL_JOBS_ERROR":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          error: action.payload
        }
      };
    default:
      return state;
  }
};

export default jobsReducer;
