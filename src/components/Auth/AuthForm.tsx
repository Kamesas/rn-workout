import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { auth, loading, authResult } from "../../store/actions/authActions";
import { authDataType } from "../../store/types";
import { RED_1, BLACK_2 } from "../../styles/colors";

interface AuthFormProps {
  navigation: { navigate: (arg: string) => void };
  isLogin: boolean;
}

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // email validation

export const AuthForm: React.FC<AuthFormProps> = ({
  navigation,
  isLogin = true,
}) => {
  const [email, setEmail] = useState<string>("");
  const [emailErr, setEmailErr] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [passwordErr, setPasswordErr] = useState<boolean>(false);
  const [isFormValid, setFormValid] = useState<boolean>(false);
  const authState = useSelector(({ authReducer }: any) => {
    return authReducer;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    authState.result === "error" &&
      email &&
      password &&
      Alert.alert("Wrong email or password !");

    if (authState.result === "success") {
      setEmail("");
      setPassword("");
    }
  }, [authState.result]);

  useEffect(() => {
    if (!password || !email) {
      setFormValid(false);
      return;
    }

    if (!reg.test(email) || password.length < 8) {
      setFormValid(false);
      return;
    }

    setFormValid(true);
  }, [email, password]);

  const onEmailBlur = () => {
    email.length && !reg.test(email) ? setEmailErr(true) : setEmailErr(false);
  };

  const onPasswordBLur = () => {
    password.length && password.length < 8
      ? setPasswordErr(true)
      : setPasswordErr(false);
  };

  const onSubmit = () => {
    dispatch(loading(true));
    dispatch(authResult(null));

    const authData: authDataType = {
      email,
      password,
      returnSecureToken: true,
    };

    dispatch(auth(authData, isLogin));
  };

  return (
    <View>
      <View>
        <Text style={styles.labelErr}>{emailErr && "Enter correct email"}</Text>
        <TextInput
          placeholder="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          onBlur={onEmailBlur}
          onFocus={() => setEmailErr(false)}
          style={[styles.input, emailErr ? styles.inputErr : null]}
        />
      </View>

      <View>
        <Text style={styles.labelErr}>
          {passwordErr && "Password must be not less 8 character"}
        </Text>
        <TextInput
          placeholder="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onBlur={onPasswordBLur}
          onFocus={() => setPasswordErr(false)}
          secureTextEntry={true}
          style={[styles.input, passwordErr ? styles.inputErr : null]}
        />
      </View>
      <View style={styles.button}>
        <Button
          title={`${isLogin ? "Sign in" : "Sign up"}`}
          onPress={onSubmit}
          disabled={!isFormValid || authState.loading}
        />
      </View>

      {isLogin && (
        <>
          <Text style={styles.registerTitle}>Don’t have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.registerBtn}>Sign up now</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 310,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: BLACK_2,
    marginBottom: 15,
  },
  inputErr: {
    borderColor: RED_1,
  },
  labelErr: {
    color: RED_1,
    fontSize: 14,
  },
  button: {
    marginVertical: 10,
  },
  registerTitle: {
    marginTop: 20,
    textAlign: "center",
  },
  registerBtn: {
    textDecorationLine: "underline",
    textAlign: "center",
  },
});
