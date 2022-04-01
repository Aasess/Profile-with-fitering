import { api, get } from "network";

import { GET_PROFILE } from "../types";

export const fetchProfileData = (name: string) => {
  return async (dispatch: Function) => {
    const res: any = await get(`${api.profile}/${name}`, dispatch);
    if (res) {
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    }
  };
};
