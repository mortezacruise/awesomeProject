/**
 * @format
 */
import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import App from "./App";
import { name as appName } from "./app.json";
import configureStore from "./src/Store/redusers/configureStore";
const Store = configureStore();
const RNRedux = () => (
  <Provider store={Store}>
    <App />
  </Provider>
);
AppRegistry.registerComponent(appName, () => RNRedux);
