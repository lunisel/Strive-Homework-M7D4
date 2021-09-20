import { initialState } from "../store";

const jobsReducer = (state = initialState.jobs, action) => {
  switch (action.type) {
    case "FILL_JOBS":
      return {
        ...state,
        allJobs: action.payload,
      };
    case "ADD_SELECTED_JOB":
      return {
        ...state,
        selectedJob: action.payload,
      };
    case "FILL_JOBS_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "FILL_JOBS_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;
