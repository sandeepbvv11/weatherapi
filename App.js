import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './view/Home';
import AddItem from './view/AddItem';
import ListItem from './view/ListItem';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Welcome" component={Home} />
      <Stack.Screen name="AddItem" component={AddItem} />
      <Stack.Screen name="ListItem" component={ListItem} /> 
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}


