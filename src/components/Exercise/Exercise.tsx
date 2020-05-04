import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onUpdatetWorkoutData } from "../../store/actions/actionWorkout";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { BLUE_1, RED_1, GREEN_1, WHITE_1, WHITE_2 } from "../../styles/colors";

interface IProps {
  [key: string]: any;
}

const Exercise: React.FC<IProps> = ({
  exerciseName,
  exercisesData,
  workoutStore,
  currDayId,
  single = false,
  isShowDetails = false,
}) => {
  const [showDetails, setShowDetails] = useState<boolean>(isShowDetails);
  const [editing, setEditing] = useState<boolean>(false);

  const dispatch = useDispatch();
  const userEmail = useSelector(({ authReducer }: any) => {
    if (authReducer.userData) {
      return authReducer.userData.email;
    }
    return null;
  });

  if (!userEmail) return null;

  const deleteItem = (time: any) => {
    if (!editing) return;
    const newArrExercises = workoutStore[exerciseName].filter(
      (item: any) => item.time !== time
    );
    const newData = { ...workoutStore, [`${exerciseName}`]: newArrExercises };
    userEmail && dispatch(onUpdatetWorkoutData(userEmail, newData, currDayId));
  };

  const renderValue = () => {
    let sum: any = 0;

    const list = exercisesData.map((val: any, i: number) => {
      sum += +val.numberOfItems;

      return (
        <View key={i} style={styles.singleValue}>
          {editing && (
            <TouchableOpacity
              onPress={() => deleteItem(val.time)}
              style={styles.singleValueIconWrap}
            >
              <Ionicons
                name="ios-close-circle"
                color={RED_1}
                style={styles.singleValueIcon}
              />
            </TouchableOpacity>
          )}
          <View style={[styles.valueContainer, { paddingVertical: 8 }]}>
            <Text style={{ color: WHITE_1 }}>{val.numberOfItems}</Text>
            {val.valueWeight ? (
              <Text style={{ color: WHITE_1 }}> / {val.valueWeight}</Text>
            ) : null}
          </View>
          <Text style={{ paddingHorizontal: 8, color: WHITE_1 }}>
            {val.time}
          </Text>
        </View>
      );
    });

    return {
      list,
      sum,
    };
  };

  return (
    <View style={{ marginBottom: 16 }}>
      <View style={styles.exerciseHeader}>
        <TouchableOpacity
          onPress={() => setShowDetails(!showDetails)}
          style={styles.exerciseName}
        >
          <Ionicons
            name={`${
              showDetails
                ? "ios-arrow-dropup-circle"
                : "ios-arrow-dropdown-circle"
            }`}
            color={BLUE_1}
            style={{ fontSize: 18 }}
          />
          <Text style={styles.exerciseTitle}>{exerciseName}</Text>
        </TouchableOpacity>

        {single && showDetails && (
          <TouchableOpacity onPress={() => setEditing(!editing)}>
            <Ionicons
              name="ios-create"
              color={GREEN_1}
              style={{ fontSize: 24 }}
            />
          </TouchableOpacity>
        )}

        <Text style={{ color: RED_1 }}>
          {renderValue().list.length} / {renderValue().sum}
        </Text>
      </View>

      {showDetails && (
        <View style={styles.valuesContainer}>{renderValue().list}</View>
      )}
    </View>
  );
};

export default Exercise;

const styles = StyleSheet.create({
  exerciseHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },
  exerciseName: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  exerciseTitle: {
    textTransform: "uppercase",
    paddingLeft: 6,
    color: WHITE_1,
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: "bold",
  },
  valuesContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
    borderColor: WHITE_2,
    borderWidth: 1,
    paddingBottom: 8,
  },
  valueContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  singleValue: {
    position: "relative",
  },
  singleValueIconWrap: {
    position: "absolute",
    top: "20%",
    left: "30%",
    // transform: [{ translateX: 50 }, { translateY: 50 }],
    zIndex: 1,
  },
  singleValueIcon: {
    fontSize: 40,
  },
  iconSize: {
    fontSize: 16,
  },
});
