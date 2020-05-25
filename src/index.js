import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {HelloWorld} from '_atoms';

function HomeScreen() {
    return (
        <HelloWorld name="Helder Burato Berto" />
    );
  }

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}
