import axios, { AxiosError, AxiosResponse } from "axios";
import { Panda } from "../../types";

export const baseURL = "http://localhost:3004/pandas";

const loadPandasApi = (): Promise<Panda[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL)
      .then((response: AxiosResponse) => resolve(response.data))
      .catch((error: AxiosError) => reject(error.message));
  });
};

export default loadPandasApi;
