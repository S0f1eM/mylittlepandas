import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Panda } from "../../types";

export interface pandaState {
  data: Panda[];
  fetching: boolean;
  error?: Error;
}

export const initialState: pandaState = {
  data: [],
  fetching: false,
  error: undefined,
};

//Slice
export const pandasSlice = createSlice({
  name: "pandas",
  initialState,
  reducers: {
    loadPandasRequest(state: pandaState) {
      state.data = [];
      state.fetching = true;
      state.error = undefined;
    },
    loadPandasSuccess(state: pandaState, action: PayloadAction<Panda[]>) {
      state.data = action.payload;
      state.fetching = false;
      state.error = undefined;
    },
    loadPandasFailure(state: pandaState, action: PayloadAction<Error>) {
      state.data = [];
      state.fetching = false;
      state.error = action.payload;
    },
    createPandaRequest(state: pandaState, action: PayloadAction<Panda>) {
      state.fetching = false;
      state.error = undefined;
    },
    createPandaSuccess(state: pandaState, action: PayloadAction<Panda>) {
      state.data
        ? (state.data = [...state.data, action.payload])
        : (state.data = [action.payload]);
      state.fetching = false;
      state.error = undefined;
    },
    createPandaFailure(state: pandaState, action: PayloadAction<Error>) {
      state.fetching = false;
      state.error = action.payload;
    },
  },
});

export const {
  loadPandasRequest,
  loadPandasSuccess,
  loadPandasFailure,
  createPandaRequest,
  createPandaSuccess,
  createPandaFailure,
} = pandasSlice.actions;

export default pandasSlice.reducer;
