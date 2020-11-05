import axios from "axios";
import { Panda } from "../../types";

export const baseURL = "http://localhost:3004/pandas";

//loadPanda basé sur axios qui retourne la liste
export const loadPanda = (): Promise<Panda[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.message));
  });
};
