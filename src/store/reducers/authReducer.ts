import {
  AUTH_LOGOUT,
  GET_USER_DATA,
  AUTH_RESULT,
  authReducerType,
  userDataType,
  LOADING,
} from "../types";

const initialState: authReducerType = {
  result: null,
  userData: null,
  loading: false,
};

export const authReducer = (
  state = initialState,
  action: { type: string; payload: string | userDataType }
) => {
  switch (action.type) {
    case GET_USER_DATA:
      return { ...state, userData: action.payload, result: action.payload };

    case AUTH_LOGOUT:
      return { ...state, token: null, userData: null, result: null };

    case AUTH_RESULT:
      return { ...state, result: action.payload };

    case LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
