import { GET_WORKOUT_ACTION, RESET_STATE } from "../types";

export const onGetWorkoutData = (userEmail: string) => async (
  dispatch: Function
) => {
  try {
    const user = userEmail && userEmail.split("@")[0];

    const res = await fetch(
      `https://workout-ec6f3.firebaseio.com/${user}.json`
    );
    const data = await res.json();
    return dispatch({
      type: GET_WORKOUT_ACTION,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const onCreateWorkoutData = (userEmail: string, newData: any) => async (
  dispatch: Function
) => {
  try {
    const user = userEmail.split("@")[0];
    await fetch(`https://workout-ec6f3.firebaseio.com/${user}.json`, {
      method: "POST",
      body: JSON.stringify(newData),
    });

    return dispatch(onGetWorkoutData(userEmail));
  } catch (err) {
    console.log(err);
  }
};

export const onUpdatetWorkoutData = (
  userEmail: string,
  newData: any,
  currDayId: string
) => async (dispatch: Function) => {
  try {
    const user = userEmail.split("@")[0];
    await fetch(
      `https://workout-ec6f3.firebaseio.com/${user}/${currDayId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(newData),
      }
    );

    return dispatch(onGetWorkoutData(userEmail));
  } catch (err) {
    console.log(err);
  }
};

export const onResetState = () => {
  return {
    type: RESET_STATE,
  };
};

// export const onDeleteWorkoutData = (id: any) => {
//   return {
//     type: DELETE_WORKOUT_ACTION,
//     payload: id
//   };
// };
