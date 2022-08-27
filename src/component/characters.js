import React from 'react';
import {Pressable, TouchableOpacity, View} from 'react-native';
import {
  CharacterContainer,
  ImageView,
  CharacterBottom,
  CharacterName,
  CharacterNickName,
} from '../screen/homeCharacter/styled';
import AntDesign from 'react-native-vector-icons/AntDesign';
import constant from '../helper/constant';

const Characters = props => {
  const {
    imageUrl,
    name,
    nickName,
    onPressLikeButton,
    likedPost,
    onPressCharacterItem,
    isHideLikeButton,
  } = props;

  const onPressHeart = () => {
    if (onPressLikeButton) {
      onPressLikeButton();
    }
  };

  const onPressCharacter = () => {
    if (onPressCharacterItem) {
      onPressCharacterItem();
    }
  };

  return (
    <CharacterContainer>
      <Pressable onPress={onPressCharacter}>
        <ImageView source={{uri: imageUrl}} />
      </Pressable>
      <CharacterBottom>
        <View>
          <CharacterName>{name}</CharacterName>
          <CharacterNickName>{nickName}</CharacterNickName>
        </View>
        {(!isHideLikeButton && (
          <TouchableOpacity onPress={onPressHeart} activeOpacity={1}>
            <AntDesign
              name={likedPost ? 'heart' : 'hearto'}
              size={21}
              color={likedPost ? constant.appGreenColor : '#3d3d3d'}
            />
          </TouchableOpacity>
        )) ||
          null}
      </CharacterBottom>
    </CharacterContainer>
  );
};
export default Characters;
