/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

interface IStyle {
  container: React.ViewStyle;
  instructions: React.TextStyle;
  welcome: React.TextStyle;
}

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{"\n"}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create<IStyle>({
  container: {
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flex: 1,
    justifyContent: "center",
  },
  instructions: {
    color: "#333333",
    marginBottom: 5,
    textAlign: "center",
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: "center",
  },
});
