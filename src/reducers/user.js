import { initialState } from "../store";

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        email: action.payload
      };
    case "ADD_FAVOURITE":
      return {
        ...state,
        favourite: [...state.favourite, action.payload]
      };
    case "REMOVE_FAVOURITE":
      return {
        ...state,
        favourite: state.favourite.filter((job, i) => i !== action.payload)
      };
    default:
      return state;
  }
};

export default userReducer;
