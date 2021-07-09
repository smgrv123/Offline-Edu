/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from './styles.js';
import {Image} from 'react-native';
export default function ConvertedImage({route}) {
  const {text} = route.params;
  console.log('text', text);
  return (
    <View>
      <Text>Hello from the other side</Text>
      <Image
        source={{
          uri: `data:image/png;base64,${text}`,
        }}
        style={{height: 100, width: 100, alignSelf: 'center'}}
      />
    </View>
  );
}
