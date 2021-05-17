import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home from './assets/components/home/home';
import about from './assets/components/about/about';
import contact from './assets/components/contact/contact';

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen title="home" component="home"/>
        <Tab.Screen title="about" component="about"/>
        <Tab.Screen title="contact" component="contact"/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
