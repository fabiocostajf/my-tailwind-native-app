import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/pages/home"
import Repos from "./src/pages/repository"

const Stack = createNativeStackNavigator();
export default function App() {
 

  return (
    <TailwindProvider>
       <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4338CA',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: '#DEDEDE',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Durable' }}
        />
        <Stack.Screen name="Repos" component={Repos} />
      </Stack.Navigator>
    </NavigationContainer>
    </TailwindProvider>
  );
}

