import * as React from "react";
import { Text, View } from "react-native";
import { HelloWorld } from "_atoms";

export default function ToDoScreen() {
  return (
    <View>
      <Text>ToDo</Text>
      <HelloWorld name="Ethan" />
    </View>
  );
}
