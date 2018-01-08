import {actionTypes} from "../constants";

const INITIAL_STATE = {
  data: null,
  error: null,
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.COIN_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.COIN_ITEM_RESPONCE:
      return {
        ...state,
        isLoading: false,
        data: action.payload.coin
      };
    case actionTypes.COIN_ITEM_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message
      };
    default:
      return state
  }
}