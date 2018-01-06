import {actionTypes} from "../constants";

export const greet = (name) => {
  return {
    type: actionTypes.GREET,
    payload: {
      name
    }
  }
};