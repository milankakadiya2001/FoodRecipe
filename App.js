import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './src/View/Screen/RegisterScreen';
import LoginScreen from './src/View/Screen/LoginScreen';
import HomeScreen from './src/View/Screen/OnBoardScreen';
import OnBoardScreen from './src/View/Screen/OnBoardScreen';
import TabScreen from './src/View/Navigation/Tab';
import RecipeScreen from './src/View/Screen/RecipeScreen';
import Settings from './src/View/Screen/Settings';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoard"  screenOptions={{headerShown: false}} >
        {/* <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="OnBoard" screenOptions={{headerShown: true}}  component={OnBoardScreen} /> */}
        <Stack.Screen name="Tab" screenOptions={{headerShown: true}}  component={TabScreen} />
        <Stack.Screen name="Recipe" screenOptions={{headerShown: true}}  component={RecipeScreen} />
        <Stack.Screen name="Settings" screenOptions={{headerShown: true}}  component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})