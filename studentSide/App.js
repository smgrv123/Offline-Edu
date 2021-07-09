/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LandingPage from './src/LandingPage/LandingPage';
import {createStackNavigator} from '@react-navigation/stack';
import ConvertedImage from './src/ConvertedImage';

const Stack = createStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <LandingPage />
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LandingPage} />
        <Stack.Screen name="Image" component={ConvertedImage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
