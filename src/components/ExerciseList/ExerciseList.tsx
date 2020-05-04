import React, { useEffect } from "react";
import { View, Picker, StyleSheet } from "react-native";
import { BLUE_1, WHITE_1 } from "../../styles/colors";

export const exercises = [
  { title: "Push ups", alias: "pushUps" },
  { title: "Pull ups", alias: "pullUps" },
  { title: "Squats", alias: "squats" },
  { title: "Crunches", alias: "crunches" },
  { title: "Biceps", alias: "biceps" },
  { title: "Hyperextension ", alias: "hyperextension" },
];

export interface IProps {
  setExercise(val: string): void;
  selectedExercise: any;
}

const ExerciseList: React.FC<IProps> = ({ setExercise, selectedExercise }) => {
  useEffect(() => {
    setExercise("pushUps");
    // eslint-disable-next-line
  }, []);

  const handleChange = (value: string) => {
    setExercise(value);
  };

  return (
    <View style={styles.selectContainer}>
      <View style={styles.select}>
        <Picker
          selectedValue={selectedExercise}
          style={styles.selectPlaceholder}
          onValueChange={(value) => handleChange(value)}
        >
          {exercises.map((item) => {
            return (
              <Picker.Item
                key={item.alias}
                label={item.title}
                value={item.alias}
              />
            );
          })}
        </Picker>
      </View>
    </View>
  );
};

export default ExerciseList;

const styles = StyleSheet.create({
  selectContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 8,
  },
  select: {
    width: "85%",
    borderWidth: 1,
    borderColor: BLUE_1,
  },
  selectPlaceholder: {
    color: WHITE_1,
    height: 44,
  },
});
