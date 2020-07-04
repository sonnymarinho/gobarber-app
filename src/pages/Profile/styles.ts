import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
  position: relative;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
  top: 12px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 12px 0 12px;
`;

export const BackToLogin = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;

  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0 16px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToLoginText = styled.Text`
  color: #f4ede8;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;

export const UserAvatarButton = styled.TouchableOpacity`

`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  margin-top: 170px;
  align-self: center;
`;