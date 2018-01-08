import {actionTypes} from "../constants";

const INITIAL_STATE = {
  data: null,
  error: null,
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.COIN_LIST_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.COIN_LIST_RESPONCE:
      return {
        ...state,
        isLoading: false,
        data: action.payload.coins
      };
    case actionTypes.COIN_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message
      };
    default:
      return state
  }
}