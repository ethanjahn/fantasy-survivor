import "react-native-gesture-handler";
import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ToDoScreen, LeaderboardScreen, TeamScreen, PointsScreen } from "_screens";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="ToDo" component={ToDoScreen} />
            <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
            <Tab.Screen name="Team" component={TeamScreen} />
            <Tab.Screen name="Points" component={PointsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      );
}
