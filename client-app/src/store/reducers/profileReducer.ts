//TYPES
import { GET_PROFILE } from "store/types";

//INTERFACE
import { IProfileReducer } from "ts/interfaces/reducer";
import { IProfileAction } from "ts/interfaces/action";

const initialState: IProfileReducer = {
  profile: [],
};

export const profileReducer = (
  state: IProfileReducer = initialState,
  action: IProfileAction
) => {
  switch (action.type) {
    case GET_PROFILE:
      return { ...state, profile: action.payload };
    default:
      return state;
  }
};
