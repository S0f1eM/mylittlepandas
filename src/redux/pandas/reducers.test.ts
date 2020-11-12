import { action } from "@storybook/addon-actions";
import pandas from "../../pandas";
import { Panda } from "../../types";
import reducer, {
  loadPandasFailure,
  loadPandasRequest,
  loadPandasSuccess,
  pandasSlice,
  pandaState,
} from "./pandasSlice";

describe("loadPandas", () => {
  const {
    actions: { loadPandasRequest, loadPandasSuccess, loadPandasFailure },
    reducer,
  } = pandasSlice;
});

test("loadPandasRequest", () => {
  const action = loadPandasRequest();
  expect(reducer(undefined, action)).toEqual({
    data: [],
    fetching: true,
    error: undefined,
  });
});

test("loadPandasSuccess", () => {
  const action = loadPandasSuccess(pandas);
  expect(reducer(undefined, action)).toEqual({
    data: pandas,
    fetching: false,
    error: undefined,
  });
});

test("loadPandasFailure", () => {
  const error = new Error("an error for test");
  const action = loadPandasFailure(error);
  expect(reducer(undefined, action)).toEqual({
    data: [],
    fetching: false,
    error: error,
  });
});
