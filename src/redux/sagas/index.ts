import { call, put, all, takeLatest } from "redux-saga/effects";
import { Panda } from "../../types";
import api from "../services/api";
import {
  loadPandasRequest,
  loadPandasSuccess,
  loadPandasFailure,
  createPandaFailure,
  createPandaSuccess,
  createPandaRequest,
} from "../pandas/pandasSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { push } from "connected-react-router";

export function* loadPandas() {
  try {
    const response: Panda[] = yield call(api.loadPandas);
    yield put(loadPandasSuccess(response));
  } catch (error) {
    yield put(loadPandasFailure(error));
  }
}

export function* createPanda(action: PayloadAction<Panda>) {
  try {
    const response: Panda = yield call(api.createPanda, action.payload);
    yield put(createPandaSuccess(response));
    yield put(push("/"));
    console.log("success");
  } catch (error) {
    yield put(createPandaFailure(error));
    console.log("error");
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(loadPandasRequest, loadPandas),
    takeLatest(createPandaRequest, createPanda),
  ]);
}
