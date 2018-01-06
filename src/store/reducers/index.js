import {actionTypes} from "../constants";

const INITIAL_STATE = {
  name: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_NAME:
      return {
        ...state,
        name: action.payload.name
      };
    default:
      return state;
  }
}