/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Input = styled.TextInput`
  margin: 12px;
  border-width: 1px;
  width: auto;
  height: 50px;
  background-color: white;
  color: black;
  border-radius: 15px;
`;

export const View = styled.View`
  display: flex;
  justify-content: center;
  flex: 1;
  background-color: white;
`;

export const Text = styled.Text`
  align-self: center;
  font-size: 20px;
  color: black;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  background-color: yellow;
  padding: 10px;
  margin: 40px;
  color: white;
  border-radius: 15px;
`;
