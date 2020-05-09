import {
  AUTH_LOGOUT,
  GET_USER_DATA,
  AUTH_RESULT,
  authDataType,
  userDataType,
  LOADING,
} from "../types";
import { authRef, fire } from "../../../firebaseConfig";
import { AsyncStorage } from "react-native";
import { onResetState } from "./actionWorkout";

export const auth = (registerBody: authDataType, isLogin: boolean) => {
  if (isLogin) {
    return async (dispatch: any) => {
      fire
        .auth()
        .signInWithEmailAndPassword(registerBody.email, registerBody.password)
        .then((data) => {
          const userData: userDataType = {
            name: data.user ? data.user.displayName : "",
            email: data.user ? data.user.email : "",
          };

          AsyncStorage.setItem("WorkoutUserData", JSON.stringify(userData));
          dispatch(getUserData(userData));
          dispatch(authResult("success"));
          dispatch(loading(false));
        })
        .catch((error) => {
          dispatch(authResult("error"));
          dispatch(loading(false));
          console.log("login err", error);
        });
    };
  } else {
    return async (dispatch: (arg0: any) => void) => {
      fire
        .auth()
        .createUserWithEmailAndPassword(
          registerBody.email,
          registerBody.password
        )
        .then((data) => {
          const userData: userDataType = {
            name: data.user ? data.user.displayName : null,
            email: data.user ? data.user.email : null,
          };

          AsyncStorage.setItem("WorkoutUserData", JSON.stringify(userData));
          dispatch(getUserData(userData));
          dispatch(authResult("success"));
          dispatch(loading(false));
        })
        .catch(function (error) {
          dispatch(authResult("error"));
          dispatch(loading(false));
          console.log(error);
        });
    };
  }
};

export const authResult = (result: string | null) => {
  return {
    type: AUTH_RESULT,
    payload: result,
  };
};

export const loading = (loading: boolean) => {
  return {
    type: LOADING,
    payload: loading,
  };
};

export const getUserData = (userData: userDataType) => {
  return {
    type: GET_USER_DATA,
    payload: userData,
  };
};

export const logout = () => (dispatch: (arg0: any) => void) => {
  authRef
    .signOut()
    .then(() => {
      AsyncStorage.removeItem("WorkoutUserData");
      dispatch({ type: AUTH_LOGOUT });
      dispatch(onResetState());
    })
    .catch((error) => {
      dispatch(authResult("logout"));
      console.log(error);
    });
};
