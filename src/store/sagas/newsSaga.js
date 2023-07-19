import {
  call,
  put,
  takeLeading,
} from "redux-saga/effects";
import { getDataNews } from "../api/newsRequest";
import { FETCH_POST_REQ, FETCH_POST_SUCCES, FETCH_POST_FAIL } from "../actions/newsActions";
function* getNews() {
  try {
    const result = yield call(getDataNews);
    console.log(result)
    yield put({
      type: FETCH_POST_SUCCES,
      payload: result,
    });
  } catch (e) {
    yield put({
      type: FETCH_POST_FAIL,
      payload: "error load news from api",
    });
  }
}
export default function* watchNews() {
  yield takeLeading(FETCH_POST_REQ, getNews);
}
