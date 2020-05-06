import {
  AUTH,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  GET_USER_DATA,
  AUTH_RESULT,
  authReducerType,
  userDataType,
} from "../types";

const initialState: authReducerType = {
  token: null,
  result: null,
  userData: { name: null, email: null },
};

export const authReducer = (
  state = initialState,
  action: { type: string; payload: string | userDataType }
) => {
  switch (action.type) {
    case AUTH:
      return state;

    case AUTH_SUCCESS:
      return { ...state, token: action.payload, result: action.payload };

    case GET_USER_DATA:
      return { ...state, userData: action.payload, result: action.payload };

    case AUTH_LOGOUT:
      return { ...state, token: null, userData: null, result: null };

    case AUTH_RESULT:
      return { ...state, result: action.payload };

    default:
      return state;
  }
};
