import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Store from '../../Store';

const SendScreen = () => {
  return (
    <View>
      <Text>{Store.SMSString}</Text>
    </View>
  );
};

export default SendScreen;
