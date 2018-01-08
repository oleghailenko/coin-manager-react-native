import {actionTypes} from "../constants";

export const requestCoinsList = () => {
  return {
    type: actionTypes.COIN_LIST_REQUEST
  }
};

export const requestCoin = (id) => {
  return {
    type: actionTypes.COIN_ITEM_REQUEST,
    payload: {
      id
    }
  }
};