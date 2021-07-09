/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Input, View, Text, Button} from './styles';

export default function LandingPage(props) {
  const [text, onChangeText] = useState('');

  function pressHandler() {
    props.navigation.navigate('Image', {
      text: text,
    });
  }
  return (
    <View>
      <Text>Paste your Image code in the input box below</Text>
      <Input onChangeText={res => onChangeText(res)} value={text} />
      <Button onPress={pressHandler}>
        <Text>Convert</Text>
      </Button>
    </View>
  );
}
