import styled from 'styled-components/native';
import constant from '../../helper/constant';

export const Container = styled.View`
  flex: 1;
  background-color: ${constant.appBlackColor};
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 74px;
  padding-horizontal: 16px;
`;

export const HeaderTextInput = styled.TextInput`
  width: ${constant.screenWidth - 86}px;
  color: ${constant.appWhiteColor};
  font-family: ${constant.roboto_light};
  font-size: 20px;
`;

export const NoCharacterContainer = styled.View`
  margin-top: 50px;
  margin-left: 24px;
`;

export const NoCharacterText = styled.Text`
  font-size: 24px;
  font-family: ${constant.roboto_light};
  color: ${props => props.textColor || constant.appWhiteColor};
`;

export const LoadingView = styled.View`
  align-items: center;
  margin-top: 20px;
`
