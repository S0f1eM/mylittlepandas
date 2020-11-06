import { call, put, all, takeLatest } from "redux-saga/effects";
import { Panda } from "../../types";
import loadPandasApi from "../services/api";
import {
  loadPandasRequest,
  loadPandasSuccess,
  loadPandasFailure,
} from "../pandas/pandasSlice";

export function* loadPandas() {
  try {
    const response: Panda[] = yield call(loadPandasApi);
    yield put(loadPandasSuccess(response));
  } catch (error) {
    yield put(loadPandasFailure(error));
  }
}

export default function* rootSaga() {
  yield all([takeLatest(loadPandasRequest, loadPandas)]);
}
