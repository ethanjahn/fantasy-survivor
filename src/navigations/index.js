import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from '@expo/vector-icons'; 
import {
  ToDoScreen,
  LeaderboardScreen,
  TeamScreen,
  RulesScreen,
} from "_screens";

const styles = StyleSheet.create({
    navbar: {
        paddingLeft: 50,
        paddingRight: 50,
        borderTopColor: "transparent",
        backgroundColor: "rgb(242, 242, 242)"
    }
  });

const Tab = createBottomTabNavigator();

export default function Navigator() {
    return (
      <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    var iconNameMap = {
                        "ToDo": "clipboard-list",
                        "Leaderboard": "trophy",
                        "Team": "users",
                        "Rules": "book",
                    }

                    let iconName = iconNameMap[route.name];
        
                    // You can return any component that you like here!
                    return <FontAwesome5 name={iconName} size={size} color={color} />;
                },
                })}
                tabBarOptions={{
                    activeTintColor: 'rgb(17, 17, 17)',
                    inactiveTintColor: 'rgb(233, 192, 168)',
                    showLabel: false,
                    style: styles.navbar,
                }}
        >
          <Tab.Screen name="ToDo" component={ToDoScreen} />
          <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
          <Tab.Screen name="Team" component={TeamScreen} />
          <Tab.Screen name="Rules" component={RulesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }