import {actionTypes} from "../constants";
import {takeLatest, call, put} from "redux-saga/effects";
import {api} from "../../api";

export function* onListRequest() {
  yield takeLatest(actionTypes.COIN_LIST_REQUEST, listRequest)
}

export function* listRequest(action) {
  try {
    const coins = yield call(api.requestCoinList);
    yield put({
      type: actionTypes.COIN_LIST_RESPONCE,
      payload: {
        coins
      }
    });
  } catch (error) {
    yield put({
      type: actionTypes.COIN_LIST_ERROR,
      payload: {
        message: error.message
      }
    })
  }
}