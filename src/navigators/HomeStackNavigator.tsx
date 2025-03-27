import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import { AboutMoviesScreen } from '../screens/Movies';
import { SearchScreen } from '../screens/Search';
import { FavouritesScreen } from '../screens/Favourites';


const HomeStack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{
      headerShown: false,
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="AboutMovie" component={AboutMoviesScreen} />
        <HomeStack.Screen name="Search" component={SearchScreen} />
        <HomeStack.Screen name="Favourites" component={FavouritesScreen} />
    </HomeStack.Navigator>
  );
}
