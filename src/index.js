import "react-native-gesture-handler";
import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {HelloWorld} from "_atoms";

function HomeScreen({ navigation }) {
    return (
        <View>
            <HelloWorld name="Ethan" />
            <Button
            title="Go to Jane's profile"
            onPress={() =>
            navigation.navigate("Profile")
            } />
        </View>
    );
  }

function ProfileScreen() {
    return (
        <Text>Profile</Text>
    )
}

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}
