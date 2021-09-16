export const setUserAction = (email) => ({
  type: "SET_USER",
  payload: email,
});

export const setQueryAction = (queryToAdd) => ({
  type: "ADD_QUERY",
  payload: queryToAdd,
});

export const addToFavouritesAction = (job) => ({
  type: "ADD_FAVOURITE",
  payload: job,
});

export const removeFromFavouritesAction = (job) => ({
  type: "REMOVE_FAVOURITE",
  payload: job,
});

export const addSelectedJobAction = (job) => ({
  type: "ADD_SELECTED_JOB",
  payload: job,
});
