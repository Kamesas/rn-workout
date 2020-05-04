import React from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text,
} from "react-native";
import { WHITE_2, BLUE_1, WHITE_1 } from "../../styles/colors";

export interface IProps {
  valueAmount: string;
  setValueAmount(val: string): void;
  valueWeight: string;
  setValueWeight(val: string): void;
  onPostDate(): void;
  selectedExercise: string;
}

const AddForm: React.FC<IProps> = ({
  valueAmount,
  setValueAmount,
  valueWeight,
  setValueWeight,
  onPostDate,
  selectedExercise,
}) => {
  const onSubmitHandler = () => {
    if (!valueAmount) return;
    onPostDate();
  };

  return (
    <View style={styles.form}>
      <View style={styles.imputWrap}>
        <TextInput
          value={valueWeight}
          placeholder="weight"
          onChangeText={(value) => setValueWeight(value)}
          style={styles.input}
        />
        <TextInput
          value={valueAmount}
          placeholder={selectedExercise}
          onChangeText={(value) => setValueAmount(value)}
          style={styles.input}
        />
        <TouchableOpacity onPress={onSubmitHandler} style={styles.buttonWrap}>
          <Text style={styles.buttonTitle}>ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddForm;

const styles = StyleSheet.create({
  form: {
    margin: 8,
    borderColor: WHITE_2,
    borderBottomWidth: 2,
    paddingBottom: 8,
  },
  imputWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    width: "40%",
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: BLUE_1,
    marginBottom: 10,
  },
  buttonWrap: {
    height: 44,
    width: "20%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: BLUE_1,
  },
  buttonTitle: {
    color: WHITE_1,
    fontWeight: "bold",
    letterSpacing: 2,
  },
});
