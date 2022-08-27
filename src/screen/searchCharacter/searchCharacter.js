import React, {useState} from 'react';
import {
  Container,
  HeaderContainer,
  HeaderTextInput,
  LoadingView,
  NoCharacterContainer,
  NoCharacterText,
} from './styled';
import Feather from 'react-native-vector-icons/Feather';
import _ from '../../helper/constant';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CharacterList from '../../component/characterList';
import {connect} from 'react-redux';
import {likeCharacter} from '../../module/homeCharacter/action';
import {searchCharacters} from '../../services/services';

const SearchCharacter = props => {
  const navigation = useNavigation();

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);

  const onPressGoBack = () => {
    navigation.goBack();
  };

  const onInputChange = text => {
    setInput(text);
    setLoading(true);
    if (text.length >= 3) {
      searchCharacters(text)
        .then(result => {
          setLoading(false);
          setSearchData(result);
        })
        .catch(e => {
          setLoading(false);
          console.log(e.message);
        });
    } else {
      setLoading(false);
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

  const onPressClearData = () => {
    setSearchData([]);
    setInput('');
    setLoading(false);
  };

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

  const onPressGoToDetail = detail => {
    try {
      navigation.navigate('characterDetail', {detail});
    } catch (e) {}
  };

  return (
    <Container>
      <HeaderContainer>
        <TouchableOpacity onPress={onPressGoBack}>
          <Feather name={'arrow-left'} color={_.appWhiteColor} size={24} />
        </TouchableOpacity>
        <HeaderTextInput
          placeholder={'Search'}
          placeholderTextColor={'#ABABAB'}
          onChangeText={text => onInputChange(text)}
          value={input}
        />
        <TouchableOpacity onPress={onPressClearData}>
          <AntDesign size={14} color={_.appWhiteColor} name={'close'} />
        </TouchableOpacity>
      </HeaderContainer>
      {loading ? (
        <LoadingView>
          <ActivityIndicator size={'small'} color={_.appWhiteColor} />
        </LoadingView>
      ) : (
        <>
          {searchData.length === 0 ? (
            <NoCharacterContainer>
              <NoCharacterText textColor={_.appGreenColor}>
                {'No character found'}
              </NoCharacterText>
              <NoCharacterText textColor={_.appWhiteColor}>
                {'Try again'}
              </NoCharacterText>
            </NoCharacterContainer>
          ) : (
            <CharacterList
              characterList={searchData}
              onPressLikeButton={onPressLikeButton}
              likeStatus={getLikeStatus}
              showCharacterDetail={onPressGoToDetail}
            />
          )}
        </>
      )}
    </Container>
  );
};
const mapStateToProps = state => {
  return {likePost: state.home.likePost || []};
};
export default connect(mapStateToProps, {likeCharacter})(SearchCharacter);
