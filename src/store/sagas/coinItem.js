import {actionTypes} from "../constants";
import {takeLatest, call, put} from "redux-saga/effects";
import {api} from "../../api";

export function* onCounRequest() {
  yield takeLatest(actionTypes.COIN_ITEM_REQUEST, coinRequest)
}

export function* coinRequest(action) {
  try {
    const coin = yield call(api.requestCoin, action.payload.id);
    yield put({
      type: actionTypes.COIN_ITEM_RESPONCE,
      payload: {
        coin
      }
    });
  } catch (error) {
    yield put({
      type: actionTypes.COIN_ITEM_ERROR,
      payload: {
        message: error.message
      }
    })
  }
}