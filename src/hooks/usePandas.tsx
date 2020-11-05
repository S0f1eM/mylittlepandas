import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Panda } from "../types";
import { pandasSlice } from "../redux/pandas/pandasSlice";
import { getPanda, isFetching, getError } from "../redux/pandas/selectors";

const usePandas = () => {
  const dispatch = useDispatch();
  const pandas: Panda[] = useSelector(getPanda);
  const fetching: boolean = useSelector(isFetching);
  const error: Error | undefined = useSelector(getError);

  useEffect(() => {
    dispatch(pandasSlice.actions.loadPandasRequest());
  }, [dispatch]);

  return { pandas, fetching, error };
};

export default usePandas;
