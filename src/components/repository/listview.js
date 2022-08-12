import React from 'react';
import { Text, View } from 'react-native';

// import { Container } from './styles';

const Repository = ({repositories}) => {
  return <View className="flex flex-row items-center justify-center ">
    <View className="flex flex-col max-w-max w-full bg-indigo-700 rounded-md p-3 mb-2 justify-between ">
      <Text className="capitalize text-white text-sm mr-2">{repositories.name}</Text>
      <Text className="text-white text-sm mr-2 ">{repositories.description}</Text>
    </View>
     
  </View>;
}

export default Repository;