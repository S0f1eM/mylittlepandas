import { RootState } from "../store";
import { Panda } from "../../types";

export const findPanda = (state: RootState, key: string): Panda | undefined => {
  return state.pandas.data.find((item) => {
    return item.key === key;
  });
};

export const getPanda = (state: { data: [] }) => state.data;
export const isFetching = (state: { fetching: boolean }) => state.fetching;
export const getError = (state: { error: Error }) => state.error;
