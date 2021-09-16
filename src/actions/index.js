export const setUserAction = (email) => ({
  type: "SET_USER",
  payload: email
});

export const addToFavouritesAction = (job) => ({
  type: "ADD_FAVOURITE",
  payload: job
});

export const removeFromFavouritesAction = (job) => ({
  type: "REMOVE_FAVOURITE",
  payload: job
});

export const addSelectedJobAction = (job) => ({
  type: "ADD_SELECTED_JOB",
  payload: job
});

export const fillJobsAction = (searchString) => {
  return async (dispatch, getState) => {
    const baseUrl = "https://strive-jobs-api.herokuapp.com/jobs?";
    try {
      let resp = await fetch(
        searchString ? baseUrl + "title=" + searchString : baseUrl + "limit=18"
      );
      if (resp.ok) {
        let data = await resp.json();
        let jobs = data.data;
        setTimeout(() => {
          dispatch({
            type: "FILL_JOBS_LOADING",
            payload: false
          });
        }, 1000);
        dispatch({
          type: "FILL_JOBS_ERROR",
          payload: false
        });
        dispatch({
          type: "FILL_JOBS",
          payload: jobs
        });
      } else {
        setTimeout(() => {
          dispatch({
            type: "FILL_JOBS_LOADING",
            payload: false
          });
        }, 1000);
        setTimeout(() => {
          dispatch({
            type: "FILL_JOBS_ERROR",
            payload: true
          });
        }, 1000);
      }
    } catch (err) {
      console.log(err);
      setTimeout(() => {
        dispatch({
          type: "FILL_JOBS_LOADING",
          payload: false
        });
      }, 1000);
      setTimeout(() => {
        dispatch({
          type: "FILL_JOBS_ERROR",
          payload: true
        });
      }, 1000);
    }
  };
};
