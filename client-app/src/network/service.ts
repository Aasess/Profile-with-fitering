import axios from "axios";
import { api } from "./index";

//loading bar added to top(as a animation for api request time)
import { showLoading, hideLoading } from "react-redux-loading-bar";

//create an axios instance
const myAxios = axios.create({ baseURL: api.profile });

export const get = (url: string, dispatch: Function) => {
  return new Promise(async (resolve, reject) => {
    await dispatch(showLoading());
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
  await dispatch(hideLoading());
  resolve(response);
};

const onFailure = async (
  reject: (reason?: any) => void,
  err: any,
  dispatch: Function
) => {
  await dispatch(hideLoading());
  reject("Error while fetching the data");
};
