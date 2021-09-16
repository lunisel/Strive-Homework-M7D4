import { initialState } from "../store";

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload
        }
      };
    case "ADD_FAVOURITE":
      return {
        ...state,
        user: {
          ...state.user,
          favourite: [...state.user.favourite, action.payload]
        }
      };
    case "REMOVE_FAVOURITE":
      return {
        ...state,
        user: {
          ...state.user,
          favourite: state.user.favourite.filter(
            (job, i) => i !== action.payload
          )
        }
      };
    default:
      return state;
  }
};

export default userReducer;
