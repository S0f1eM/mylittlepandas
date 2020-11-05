import { all } from "redux-saga/effects";
import { loadPanda } from "../services/api";
import { pandasSlice } from "../pandas/pandasSlice";

export default function* rootSaga() {
  yield all([pandasSlice.actions.loadPandasRequest, loadPanda]);
}
