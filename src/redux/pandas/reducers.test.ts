import { action } from "@storybook/addon-actions";
import pandas from "../../pandas";
import { Panda } from "../../types";
import { pandasSlice } from "./pandasSlice";

describe("loadPandas", () => {
  const {
    actions: { loadPandasRequest, loadPandasSuccess, loadPandasFailure },
    reducer,
  } = pandasSlice;

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
});

describe("createPanda", () => {
  const {
    actions: { createPandaRequest, createPandaSuccess, createPandaFailure },
    reducer,
  } = pandasSlice;
  //panda create
  test("createPandaRequest", () => {
    const panda: Panda = {
      key: "keytest",
      name: "panda",
      image: "imageUrltest",
      interests: ["interest1test", "interest2test"],
    };
    const action = createPandaRequest(panda);
    expect(reducer(undefined, action)).toEqual({
      data: [],
      fetching: true,
      error: undefined,
    });
  });
  //panda create success
  describe("createPandaSuccess", () => {
    const panda: Panda = {
      key: "keytest",
      name: "panda",
      image: "imageUrltest",
      interests: ["interest1test", "interest2test"],
    };

    test("createPandaSuccess", () => {
      const action = createPandaSuccess(panda);

      expect(reducer(undefined, action)).toEqual({
        data: [...[], panda],
        fetching: true,
        error: undefined,
      });
    });
  });

  //panda create failure
  test("createPandaFailure", () => {
    const error = new Error('an error happened');
    const action = createPandaFailure(error);
    expect(reducer(undefined, action)).toEqual({
      data:[],
      fetching: true,
      error: undefined,
    });
  });

