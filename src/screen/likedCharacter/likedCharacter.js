import React from 'react';
import {
  Container,
  EmptyDataContainer,
  EmptyText,
  HeaderContainer,
  HeaderText,
} from './styled';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity, View} from 'react-native';
import constant from '../../helper/constant';
import {connect} from 'react-redux';
import CharacterList from '../../component/characterList';
import {useNavigation} from '@react-navigation/native';
import {likeCharacter} from '../../module/homeCharacter/action';

const LikedCharacter = props => {
  const navigation = useNavigation();

  const onPressGoBack = () => {
    navigation.goBack();
  };

  const onPressUnLike = badCharacterData => {
    try {
      let getAllLikedPost = props.likePost;
      const unLikeItem = getAllLikedPost.filter(
        arr => arr.char_id !== badCharacterData.char_id,
      );
      props.likeCharacter(unLikeItem);
    } catch (e) {
      if (__DEV__) {
        alert(e.message);
      }
    }
  };

  const onPressGoToDetail = detail => {
    try {
      navigation.navigate('characterDetail', {detail});
    } catch (e) {}
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderText>{'Favourites'}</HeaderText>
        <TouchableOpacity onPress={onPressGoBack}>
          <AntDesign size={14} color={constant.appWhiteColor} name={'close'} />
        </TouchableOpacity>
      </HeaderContainer>
      {props.likePost.length !== 0 ? (
        <CharacterList
          characterList={props.likePost}
          onPressLikeButton={onPressUnLike}
          likeStatus={true}
          showCharacterDetail={onPressGoToDetail}
        />
      ) : (
        <EmptyDataContainer>
          <EmptyText>{'No Favourites Character'}</EmptyText>
        </EmptyDataContainer>
      )}
    </Container>
  );
};

const mapStateToProps = state => {
  return {likePost: state.home.likePost || []};
};

export default connect(mapStateToProps, {likeCharacter})(LikedCharacter);
