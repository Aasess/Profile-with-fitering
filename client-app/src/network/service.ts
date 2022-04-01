import axios from "axios";
import { api } from "./index";

//create an axios instance
const myAxios = axios.create({ baseURL: api.profile });

export const get = (url: string, dispatch: Function) => {
  return new Promise(async (resolve, reject) => {
    await myAxios
      .get(url)
      .then((response) => onSuccess(resolve, response, dispatch))
      .catch((err) => onFailure(reject, err, dispatch));
  });
};

const onSuccess = async (
  resolve: (value: unknown) => void,
  response: any,
  dispatch: Function
) => {
  resolve(response);
};

const onFailure = async (
  reject: (reason?: any) => void,
  err: any,
  dispatch: Function
) => {
  reject("Error while fetching the data");
};
