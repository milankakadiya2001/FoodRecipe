import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import COLORS from '../../conts/colors';
import TabIcons from '../Components/TabIcons';
import {icons} from '../../conts';
import Settings from '../Screen/Settings';

const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
        //   position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.white,
          height: 100,
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
            tabBarIcon: ({focused}) => {
              return(
              <TabIcons focused={focused} icon={icons.home} />
              )},
          }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return(
            <TabIcons focused={focused} icon={icons.search} />
            )},
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={HomeScreen}
        options={{
            tabBarIcon: ({focused}) => {
              return(
              <TabIcons focused={focused} icon={icons.bookmark} />
              )},
          }}
      />
      <Tab.Screen
        name="Setting"
        component={Settings}
        options={{
            tabBarIcon: ({focused}) => {
              return(
              <TabIcons focused={focused} icon={icons.setting} />
              )},
          }}
      />
    </Tab.Navigator>
  );
};

export default TabScreen;

const styles = StyleSheet.create({});
