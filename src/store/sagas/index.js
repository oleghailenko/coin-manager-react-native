import {all, put, fork, takeEvery} from 'redux-saga/effects'
import {actionTypes} from "../constants";

export function* greet(action) {
  yield put({
    type: actionTypes.SET_NAME,
    payload: {
      name: action.payload.name
    }
  })
}

export function* onGreet() {
  yield takeEvery(actionTypes.GREET, greet)
}

export default function* rootSaga() {
  yield all([
    fork(onGreet)
  ]);
}