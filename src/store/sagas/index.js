import {all, fork} from 'redux-saga/effects'
import {onListRequest} from "./coinList";
import {onCounRequest} from "./coinItem";

export default function* rootSaga() {
  yield all([
    fork(onListRequest),
    fork(onCounRequest)
  ]);
}