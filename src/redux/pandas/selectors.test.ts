import pandas from "../../pandas";
import { getError, getPanda, isFetching, findPanda } from "./selectors";
import { RootState } from "../store";
import { Panda } from "../../types";

test("getPandas", () => {
  //@ts-ignore
  const state: RooState = {
    pandas: {
      data: pandas,
      fetching: false,
    },
  };
  expect(getPanda(state)).toEqual(pandas);
});

test("isFetching", () => {
  //@ts-ignore
  const state: RootState = {
    pandas: {
      data: [],
      fetching: true,
    },
  };
  expect(isFetching(state)).toBeTruthy();
});

test("getError", () => {
  const error = new Error("testing error");
  //@ts-ignore
  const state: RootState = {
    pandas: {
      data: [],
      fetching: false,
      error,
    },
  };
  expect(getError(state)).toEqual(error);
});


test("findPanda", () => {
  //@ts-ignore
  const state: RootState = {
    pandas: {
      data: pandas,
      fetching: false,
    },
  };
  const panda: Panda | undefined = findPanda(state, "1");
  expect(panda).toBeDefined();
  expect(panda!.key).toEqual('1'),
});
