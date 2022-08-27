import styled, {css} from 'styled-components/native';
import constant from '../../helper/constant';

export const MainContainer = styled.View`
  flex: 1;
  background-color: ${constant.appBlackColor};
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 74px;
  padding-horizontal: 16px;
  font-weight: 700;
`;

export const HeaderText = styled.Text`
  font-size: 23px;
  color: ${constant.appWhiteColor};
  font-family: ${constant.roboto_bold};
`;

export const HeaderIconContainer = styled.View`
  flex-direction: row;
`;

export const FlatLiatView = styled.View`
  flex: 1;
`;

export const CharacterContainer = styled.View`
  width: ${parseInt(constant.screenWidth / 2 - 35)}px;
`;

export const ImageView = styled.Image`
  height: 210px;
  width: 100%;
  border-radius: 10px;
`;

export const CharacterBottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 7px;
`;

export const CharacterName = styled.Text`
  font-size: 16px;
  font-family: ${constant.roboto_bold};
  color: ${constant.appWhiteColor};
  line-height: 19px;
`;

export const CharacterNickName = styled.Text`
  font-size: 14px;
  font-family: ${constant.roboto_light};
  color: ${constant.appWhiteColor};
  line-height: 16px;
  padding-top: 2px;
`;

export const LoadingView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

// export BlankView=styled.View
