import { AUTH_LOGOUT, GET_USER_DATA, AUTH_RESULT } from "../types";
import { authRef, fire } from "../../../firebaseConfig";
import { AsyncStorage } from "react-native";

export const auth = (registerBody: any, isLogin: boolean) => {
  if (isLogin) {
    return async (dispatch: any) => {
      fire
        .auth()
        .signInWithEmailAndPassword(registerBody.email, registerBody.password)
        .then((data) => {
          const userData = {
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
    return async (dispatch: any) => {
      fire
        .auth()
        .createUserWithEmailAndPassword(
          registerBody.email,
          registerBody.password
        )
        .then((data) => {
          const userData = {
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

export const getUserData = (userData: any) => {
  return {
    type: GET_USER_DATA,
    payload: userData,
  };
};

export const logout = () => (dispatch: any) => {
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
