import styled, {css} from 'styled-components/native';
import Constant from '../../helper/constant';

export const MainContainer = styled.View`
  flex: 1;
  background-color: ${Constant.appBlackColor};
`;

export const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.View`
  width: ${Constant.screenWidth}px;
  aspect-ratio: ${props => props.imageRatio || 1};
  overflow: visible;
`;

export const AbsoluteContainer = styled.View`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: black;
  opacity: 0.6;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  height: 74px;
  padding-horizontal: 16px;
  font-weight: 700;
`;

export const ImageViewContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 20px;
  align-items: center;
`;
export const ImageView = styled.Image`
  width: ${parseInt(Constant.screenWidth / 2 - 35)}px;
  height: 210px;
  border-radius: 10px;
  margin-bottom: 30px;
`;

export const CharacterName = styled.Text`
  font-size: ${props => props.fontSize || 30}px;
  font-family: ${Constant.roboto_bold};
  color: ${Constant.appWhiteColor};
`;

export const CharacterNickName = styled.Text`
  font-size: ${props => props.fontSize || 14}px;
  font-family: ${Constant.roboto_light};
  color: ${Constant.appWhiteColor};
  margin-right: ${props => props.marginRight || 0}px;
`;

export const CharacterStatus = styled.Text`
  font-size: ${props => props.fontSize || 14}px;
  font-family: ${Constant.roboto_bold};
  color: ${props => props.textColor || '#ca184e'};
  padding-top: 6px;
  padding-bottom: ${props => props.paddingBottom || 0}px;
`;

export const DirectionView = styled.View`
  flex-direction: row;
  margin-horizontal: 17px;
  justify-content: space-between;
  align-items: center;
`;

export const BirthContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const OccupationContainer = styled.View`
  margin-top: 48px;
  margin-horizontal: 17px;
  margin-bottom: ${props => props.marginBottom || 0}px;
`;

export const AppearedContainer = styled.View`
  background-color: #1a1a1a;
  border-radius: 3px;
  margin-right: 6px;
`;

export const AppearedText = styled.Text`
  font-size: ${props => props.fontSize || 14}px;
  font-family: ${Constant.roboto_light};
  color: ${Constant.appWhiteColor};
  padding-horizontal: 16px;
  padding-vertical: 5px;
`;
