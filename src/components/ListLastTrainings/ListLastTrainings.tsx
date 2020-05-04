import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import Exercise from "../Exercise/Exercise";
import { WHITE_1 } from "../../styles/colors";

interface ListLastTrainingsProps {
  [key: string]: any;
}

export const ListLastTrainings: React.FC<ListLastTrainingsProps> = () => {
  const workoutStore = useSelector((state: any) => state.workoutStore);
  return (
    <View style={{ paddingTop: 16 }}>
      {workoutStore &&
        Object.keys(workoutStore)
          .reverse()
          .slice(0, 3)
          .map((item) => {
            if (workoutStore[item].date === dayjs().format("DD MM YYYY"))
              return null;
            const keys = Object.keys(workoutStore[item]);
            const { date } = workoutStore[item];

            return (
              <View key={date}>
                <Text style={styles.date}>{date}</Text>

                {keys.map((exercise, i) => {
                  if (exercise === "date") return null;
                  return (
                    <Exercise
                      key={i}
                      exerciseName={exercise}
                      exercisesData={workoutStore[item][`${exercise}`]}
                    />
                  );
                })}
              </View>
            );
          })}
    </View>
  );
};

const styles = StyleSheet.create({
  date: {
    color: WHITE_1,
    paddingLeft: 8,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
