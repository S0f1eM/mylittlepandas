import { RootState } from "../store";
import { Panda } from "../../types";

export const findPanda = (state: RootState, key: string): Panda | undefined => {
  return state.pandas.data.find((item) => {
    return item.key === key;
  });
};

export const getPanda = (state: RootState): Panda[] => state.pandas.data;
export const isFetching = (state: RootState): boolean => state.pandas.fetching;
export const getError = (state: RootState): Error | undefined =>
  state.pandas.error;
