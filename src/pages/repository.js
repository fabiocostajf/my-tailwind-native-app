import React, {useEffect, useState} from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';
import { SafeAreaView, View, TextInput, ScrollView, Text } from 'react-native';
import ListView from "../components/repository/listview"
import {getRepository} from "../services/repository"

const Pages = () => {
    const [repo, setRepo] = useState([]);
    const [filter, setFilter] = useState(null);

    const getRepo = async () => {
      const repos = await getRepository(filter);
      setRepo(repos.map((unit)=> {return {name: unit.name, description: unit.url}}))
    }
  
    useEffect(()=> {
        getRepo()
      },[filter])

  return (
    <SafeAreaView>
        <ScrollView>
            <View className="flex-1 p-3  min-h-full">
                <TextInput className="bg-white rounded-md p-3 mb-2" onChangeText={e => setFilter(e)}/>
                {
                    (repo && repo?.length > 0) && repo.map((unit) => <ListView key={unit.name + Math.random()} repositories={unit}/>)
                }
            </View>
        </ScrollView>
    </SafeAreaView>
    )
}

export default Pages;