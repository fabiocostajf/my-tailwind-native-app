import React from 'react';
import { Text, View, Button } from 'react-native';import { StatusBar } from 'expo-status-bar';
// import { Container } from './styles';

const Pages = ({ navigation }) => {
  return (
    <View className="flex-1 bg-indigo-700 items-center justify-center">
        <View className="w-56">
        <View
            className="bg-white  rounded-md p-3 items-center justify-center"
            
        >
            <Text className=" text-indigo-500 font-medium" onPress={() => navigation.navigate('Repos')}>
                LOGIN
            </Text>
        
        </View>
        </View>
    
        <StatusBar style="auto" />
  </View>
  );
}

export default Pages;