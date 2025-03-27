import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from './HomeStackNavigator';

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <HomeStackNavigator />
        </NavigationContainer>
    );
}
