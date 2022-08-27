import React, {useEffect, useState} from 'react';
import constant from '../../services/constant';
import _ from '../../helper/constant';
import {
  MainContainer,
  HeaderContainer,
  HeaderText,
  HeaderIconContainer,
  LoadingView,
} from './styled';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {likeCharacter} from '../../module/homeCharacter/action';
import {useNavigation} from '@react-navigation/native';
import CharacterList from '../../component/characterList';
import {getAllBadCharacters} from '../../services/services';

const HomeCharacter = props => {
  const navigation = useNavigation();

  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //Get all the characters of Breaking bad
    setLoading(true);
    getAllBadCharacters()
      .then(result => {
        global.allCharacters = result;
        setLoading(false);
        setCharacter(result);
      })
      .catch(e => {
        setLoading(false);
        console.log(e.message);
      });
  }, []);

  const onPressLikeButton = badCharacterData => {
    try {
      let getAllLikedPost = props.likePost;
      if (getLikeStatus(badCharacterData)) {
        const unLikeItem = getAllLikedPost.filter(
          arr => arr.char_id !== badCharacterData.char_id,
        );
        props.likeCharacter(unLikeItem);
      } else {
        const newCharacters = [...getAllLikedPost, badCharacterData];
        props.likeCharacter(newCharacters);
      }
    } catch (e) {
      if (__DEV__) {
        alert(e.message);
      }
    }
  };

  const getLikeStatus = item => {
    try {
      const findArray = props.likePost.find(
        arrItem => arrItem.char_id === item.char_id,
      );
      return findArray;
    } catch (e) {
      return false;
    }
  };

  const goToLikedCharacter = () => {
    navigation.navigate('likedCharacter');
  };

  const goToSearchCharacter = () => {
    navigation.navigate('searchCharacter');
  };

  const onPressGoToDetail = detail => {
    try {
      navigation.navigate('characterDetail', {detail});
    } catch (e) {}
  };

  return (
    <MainContainer>
      <HeaderContainer>
        <HeaderText>{'The Breaking bad'}</HeaderText>
        <HeaderIconContainer>
          <TouchableOpacity onPress={goToSearchCharacter}>
            <Feather
              name={'search'}
              size={20}
              color={_.appWhiteColor}
              style={{marginRight: 26}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={goToLikedCharacter}>
            <AntDesign name={'heart'} size={22} color={_.appGreenColor} />
          </TouchableOpacity>
        </HeaderIconContainer>
      </HeaderContainer>
      {(loading && (
        <LoadingView>
          <ActivityIndicator color={_.appWhiteColor} size={'small'} />
        </LoadingView>
      )) || (
        <CharacterList
          characterList={character}
          onPressLikeButton={onPressLikeButton}
          likeStatus={getLikeStatus}
          showCharacterDetail={onPressGoToDetail}
        />
      )}
    </MainContainer>
  );
};

const mapStateToProps = state => {
  return {likePost: state.home.likePost || []};
};

export default connect(mapStateToProps, {
  likeCharacter,
})(HomeCharacter);
