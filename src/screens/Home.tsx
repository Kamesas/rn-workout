import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  onGetWorkoutData,
  onCreateWorkoutData,
  onUpdatetWorkoutData,
} from "../store/actions/actionWorkout";
import dayjs from "dayjs";
import TrainingList from "../components/TrainingList/TrainingList";
import { SafeAreaView } from "react-native-safe-area-context";
import { BLACK_2 } from "../styles/colors";

interface HomeProps {
  [key: string]: any;
}

export const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();
  const workoutStore = useSelector((state: any) => state.workoutStore);
  const userEmail = useSelector(({ authReducer }: any) => {
    if (authReducer.userData) {
      return authReducer.userData.email;
    }
    return null;
  });
  const [valueAmount, setValueAmount] = useState<string>("");
  const [valueWeight, setValueWeight] = useState<string>("");
  const [selectedExercise, setExercise] = useState<string>("");

  useEffect(() => {
    dispatch(onGetWorkoutData(userEmail));
    // eslint-disable-next-line
  }, [userEmail]);

  const onPostDate = () => {
    if (!userEmail) return;
    workoutStore && Object.keys(workoutStore).length !== 0
      ? onUpdateNewData(selectedExercise)
      : onCreateData();
  };

  const onCreateData = () => {
    if (!userEmail) return;
    const newData = {
      date: dayjs().format("DD MM YYYY"),
      [`${selectedExercise}`]: [
        {
          numberOfItems: valueAmount,
          valueWeight: valueWeight,
          time: dayjs().format("HH:mm:ss"),
        },
      ],
    };

    dispatch(onCreateWorkoutData(userEmail, newData));
    setValueAmount("");
    setValueWeight("");
  };

  const onUpdateNewData = (selectedExercise: string) => {
    if (!userEmail) return;

    const currDayId: any = Object.keys(workoutStore).find((item) => {
      return workoutStore[item].date === dayjs().format("DD MM YYYY");
    });

    let newData;

    if (currDayId) {
      newData = workoutStore[currDayId];

      if (workoutStore[currDayId][`${selectedExercise}`]) {
        newData[`${selectedExercise}`] = [
          ...workoutStore[currDayId][`${selectedExercise}`],
          {
            numberOfItems: valueAmount,
            valueWeight: valueWeight,
            time: dayjs().format("HH:mm:ss"),
          },
        ];
      } else {
        newData[`${selectedExercise}`] = [
          {
            numberOfItems: valueAmount,
            valueWeight: valueWeight,
            time: dayjs().format("HH:mm:ss"),
          },
        ];
      }
      dispatch(onUpdatetWorkoutData(userEmail, newData, currDayId));
    } else {
      newData = {
        date: dayjs().format("DD MM YYYY"),
        [`${selectedExercise}`]: [
          {
            numberOfItems: valueAmount,
            valueWeight: valueWeight,
            time: dayjs().format("HH:mm:ss"),
          },
        ],
      };

      dispatch(onCreateWorkoutData(userEmail, newData));
    }

    setValueAmount("");
    setValueWeight("");
  };

  const currDayId: any =
    workoutStore &&
    Object.keys(workoutStore).find((item) => {
      return workoutStore[item].date === dayjs().format("DD MM YYYY");
    });

  return (
    <SafeAreaView>
      <View style={{ height: "100%", backgroundColor: BLACK_2 }}>
        <TrainingList workoutStore={workoutStore} currDayId={currDayId} />
      </View>
    </SafeAreaView>
  );
};
