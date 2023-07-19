import { all } from "redux-saga/effects";
import watchNews from "./newsSaga";

export default function* rootSaga() {
  yield all([watchNews()]);
}
