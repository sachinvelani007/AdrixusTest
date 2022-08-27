import styled, {css} from 'styled-components/native';
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

export const HeaderText = styled.Text`
  font-size: 23px;
  font-family: ${constant.roboto_bold};
  color: ${constant.appGreenColor};
`;

export const EmptyDataContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const EmptyText = styled.Text`
  font-size: 16px;
  font-family: ${constant.roboto_bold};
  color: ${constant.appWhiteColor};
`;
