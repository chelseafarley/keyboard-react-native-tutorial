import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Keyboard,
  Button,
} from "react-native";

export default function App() {
  const [keyboardState, setKeyboardState] = useState("Keyboard closed");

  useEffect(() => {
    const keyboardShowingSub = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardState("Keyboard open");
    });

    const keyboardHidingSub = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardState("Keyboard closed");
    });

    return () => {
      keyboardHidingSub.remove();
      keyboardShowingSub.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>{keyboardState}</Text>
      <TextInput style={styles.textInput} placeholder="Text goes here..." />
      <Button title="Dismiss" onPress={Keyboard.dismiss} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    margin: 16,
    padding: 5,
    borderColor: "black",
    borderWidth: 1,
    alignSelf: "stretch",
  },
});
