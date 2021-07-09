import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login/Login'
import SignUp from '../screens/SignUp/SignUp';
import Landing from '../screens/LandingScreen/Landing';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing'  >
        <Stack.Screen component={Landing} name='Landing' options={{headerShown:false}}/>
        <Stack.Screen component={Login} name='Login' options={{headerShown:false}} />
        <Stack.Screen component={SignUp} name='SignUp' options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
