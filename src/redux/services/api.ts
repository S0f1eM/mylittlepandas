import axios, { AxiosError, AxiosResponse } from "axios";
import { Panda } from "../../types";

export const baseURL = "http://localhost:3004/pandas";

const loadPandas = (): Promise<Panda[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL)
      .then((response: AxiosResponse) => resolve(response.data))
      .catch((error: AxiosError) => reject(error.message));
  });
};

const createPanda = (panda: Panda): Promise<Panda> => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseURL, panda)
      .then((response: AxiosResponse) => resolve(response.data))
      .catch((error: AxiosError) => reject(error));
  });
};

export default { loadPandas, createPanda };
