import {
  AUTH_LOGOUT,
  GET_USER_DATA,
  AUTH_RESULT,
  authDataType,
  userDataType,
} from "../types";
import { authRef, fire } from "../../../firebaseConfig";
import { AsyncStorage } from "react-native";

export const auth = (registerBody: authDataType, isLogin: boolean) => {
  if (isLogin) {
    return async (
      dispatch: (arg0: { type: string; payload: string | userDataType }) => void
    ) => {
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
        })
        .catch((error) => {
          dispatch(authResult("error"));
          console.log("login err", error);
        });
    };
  } else {
    return async (
      dispatch: (arg0: { type: string; payload: string | userDataType }) => void
    ) => {
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
        })
        .catch(function (error) {
          dispatch(authResult("error"));
          console.log(error);
        });
    };
  }
};

const authResult = (result: string) => {
  return {
    type: AUTH_RESULT,
    payload: result,
  };
};

export const getUserData = (userData: userDataType) => {
  return {
    type: GET_USER_DATA,
    payload: userData,
  };
};

export const logout = () => (
  dispatch: (arg0: { type: string; payload?: string }) => void
) => {
  authRef
    .signOut()
    .then(() => {
      AsyncStorage.removeItem("WorkoutUserData");
      dispatch({ type: AUTH_LOGOUT });
    })
    .catch((error) => {
      dispatch(authResult("logout"));
      console.log(error);
    });
};
