export const GET_WORKOUT_ACTION = "GET_WORKOUT_ACTION";
export const POST_WORKOUT_ACTION = "POST_WORKOUT_ACTION";
export const UPDATE_WORKOUT_ACTION = "UPDATE_WORKOUT_ACTION";
export const DELETE_WORKOUT_ACTION = "DELETE_WORKOUT_ACTION";
export const CREATE_WORKOUT_ACTION = "CREATE_WORKOUT_ACTION";
export const RESET_STATE = "RESET_STATE";

export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_LOGOUT = "AUTH_LOGOUT";
export const AUTH_RESULT = "AUTH_RESULT";
export const GET_USER_DATA = "GET_USER_DATA";
export const LOADING = "LOADING";

export type authDataType = {
  email: string;
  password: string;
  returnSecureToken: boolean;
};

export type authReducerType = {
  result: string | null;
  loading: boolean;
  userData: { name: string | null; email: string } | null;
};

export type userDataType = {
  name: string | null;
  email: string | null;
};
