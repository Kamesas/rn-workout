import { GET_WORKOUT_ACTION, RESET_STATE } from "../types";

const initialState: any = null;

export const workoutStore = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_WORKOUT_ACTION:
      console.log("store reducer", action.payload);
      return { ...state, ...action.payload };

    case RESET_STATE:
      return null;

    default:
      return state;
  }
};
