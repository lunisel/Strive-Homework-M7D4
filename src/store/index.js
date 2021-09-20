import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import userReducer from "../reducers/user.js";
import jobsReducer from "../reducers/jobs.js";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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

const persistConfig = {
  key: "root",
  storage,
  /* transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENCRYPT_KEY,
    }),
  ], */
};

const bigReducers = combineReducers({
  jobs: jobsReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducers);

export const configureStore = createStore(
  persistedReducer,
  initialState,
  process.env.REACT_APP_DEVELOPMENT
    ? composeEnhancers(applyMiddleware(thunk))
    : compose(applyMiddleware(thunk))
);

export const persistor = persistStore(configureStore);
