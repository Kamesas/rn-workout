import React from "react";
import Exercise from "../Exercise/Exercise";
import { View, Text } from "react-native";
import { BLACK_2 } from "../../styles/colors";

export interface IProps {
  workoutStore: any;
  [key: string]: any;
}

const TrainingList: React.FC<IProps> = ({ workoutStore, currDayId }) => {
  if (!currDayId) return <Text>There was no training today</Text>;

  return (
    <View>
      {workoutStore &&
        Object.keys(workoutStore[currDayId]).map((item, i) => {
          if (item === "date") return null;
          return (
            <Exercise
              key={i}
              single={true}
              isShowDetails={true}
              currDayId={currDayId}
              workoutStore={workoutStore[currDayId]}
              exerciseName={item}
              exercisesData={workoutStore[currDayId][`${item}`]}
            />
          );
        })}
    </View>
  );
};

export default TrainingList;
