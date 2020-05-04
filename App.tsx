import React from "react";
import { Provider } from "react-redux";
import configureStore from "./src/store/store";
import { Routes } from "./src/Routes/Routes";

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
