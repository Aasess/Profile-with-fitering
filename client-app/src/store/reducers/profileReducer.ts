//TYPES
import { GET_PROFILE } from "store/types";

//INTERFACE
import { IProfileReducer } from "ts/interfaces/reducer";
import { IProfileAction } from "ts/interfaces/action";

const initialState: IProfileReducer = {
  profiles: [],
};

export const profileReducer = (
  state: IProfileReducer = initialState,
  action: IProfileAction
) => {
  switch (action.type) {
    case GET_PROFILE:
      return { ...state, profiles: action.payload };
    default:
      return state;
  }
};
