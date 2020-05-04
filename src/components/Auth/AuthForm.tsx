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
import { auth } from "../../store/actions/authActions";

interface AuthFormProps {
  navigation: { navigate: (arg: string) => void };
  isLogin: boolean;
}

export const AuthForm: React.FC<AuthFormProps> = ({
  navigation,
  isLogin = true,
}) => {
  const [email, setEmail] = useState<string>("");
  const [emailErr, setEmailErr] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [passwordErr, setPasswordErr] = useState<boolean>(false);
  const authResult = useSelector(({ authReducer }: any) => {
    return authReducer.result;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    authResult === "error" && Alert.alert("Wrong email or password !");

    if (authResult === "success") {
      setEmail("");
      setPassword("");
    }
  }, [authResult]);

  const onSubmit = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    reg.test(email) ? setEmailErr(false) : setEmailErr(true);
    if (reg.test(email) !== true) {
      alert("wrong email");
      return;
    }

    password.length < 8 ? setPasswordErr(true) : setPasswordErr(false);
    if (password.length < 8) {
      alert("password must be not less 8 character");
      return;
    }

    const authData = {
      email,
      password,
      returnSecureToken: true,
    };

    isLogin ? dispatch(auth(authData, true)) : dispatch(auth(authData, false));
  };

  return (
    <View>
      <TextInput
        placeholder="email"
        value={email}
        onChangeText={(email) => setEmail(email)}
        style={[styles.input, emailErr ? styles.inputErr : null]}
      />
      <TextInput
        placeholder="passwordrtyer"
        value={password}
        onChangeText={(pass) => setPassword(pass)}
        secureTextEntry={true}
        style={[styles.input, passwordErr ? styles.inputErr : null]}
      />

      <Button title={`${isLogin ? "Sign in" : "Sign up"}`} onPress={onSubmit} />

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
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  inputErr: {
    borderColor: "red",
  },
  button: {
    marginBottom: 10,
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
