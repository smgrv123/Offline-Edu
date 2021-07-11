import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import SignUp from '../screens/SignUp/SignUp';
import Landing from '../screens/LandingScreen/Landing';
import ImagePick from '../screens/ImagePicker/ImagePicker';
import Classroom from '../screens/Classroom/Classroom';
import CreateClass from '../screens/Classroom/CreateClass';
import Transcript from '../screens/Transcript/Transcript';
import SendTrans from '../screens/sendSMS/SendTrans';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          component={Landing}
          name="Landing"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Login}
          name="Login"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={SignUp}
          name="SignUp"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={ImagePick}
          name="ImagePick"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Classroom}
          name="Classroom"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={CreateClass}
          name="CreateClass"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Transcript}
          name="Transcipt"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={SendTrans}
          name="SendTrans"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
