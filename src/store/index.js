import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import userReducer from "../reducers/user.js";
import jobsReducer from "../reducers/jobs.js";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const initialState = {
  user: {
    email: "",
    favourite: [],
  },
  jobs: {
    selectedJob: null,
    allJobs: [],
    isLoading: true,
    error: false,
    query: null,
  },
};

const bigReducers = combineReducers({
  jobs: jobsReducer,
  user: userReducer,
});

const configureStore = createStore(
  bigReducers,
  initialState,
  process.env.REACT_APP_DEVELOPMENT
    ? composeEnhancers(applyMiddleware(thunk))
    : compose(applyMiddleware(thunk))
);

export default configureStore;
