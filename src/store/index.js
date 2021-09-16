import { createStore } from "redux";
import mainReducer from "../reducers";

export const initialState = {
  user: {
    email: "",
    favourite: [],
  },
  query: "",
  selectedJob: null,
};

const configureStore = createStore(
  mainReducer,
  initialState,
  process.env.REACT_APP_DEVELOPMENT && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore;
