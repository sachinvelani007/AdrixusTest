import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {
  AbsoluteContainer,
  HeaderContainer,
  ImageBackground,
  ImageView,
  MainContainer,
  ImageViewContainer,
  CharacterName,
  CharacterNickName,
  CharacterStatus,
  DirectionView,
  BirthContainer,
  OccupationContainer,
  AppearedContainer,
  AppearedText,
} from './styled';
import constant from '../../helper/constant';
import _ from '../../helper/constant';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Characters from '../../component/characters';
import {connect} from 'react-redux';
import {likeCharacter} from '../../module/homeCharacter/action';

const CharacterDetail = props => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const {detail} = params || {};
  const [imageRatio, setImageRatio] = useState(0);
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  useEffect(() => {
    Image.getSize(detail?.img, (width, height) => {
      const ratio = width / height;
      setImageRatio(ratio);
    });
  }, []);

  const onPressGoBack = () => {
    navigation.goBack();
  };

  const getFullDate = currentDate => {
    const splitDate = currentDate.split('-');
    const date = new Date(splitDate[2], splitDate[1], splitDate[0]);
    const formatDate =
      parseInt(date.getDate()) < 10 ? `0${date.getDate()}` : date.getDate();
    return `${formatDate}-${
      monthNames[date.getMonth() - 1]
    }-${date.getFullYear()}`;
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

  const renderHeader = () => {
    return (
      <HeaderContainer>
        <TouchableOpacity onPress={onPressGoBack}>
          <Feather name={'arrow-left'} color={_.appWhiteColor} size={24} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onPressLikeButton(detail)}>
          <AntDesign
            name={getLikeStatus(detail) ? 'heart' : 'hearto'}
            size={24}
            color={
              getLikeStatus(detail)
                ? constant.appGreenColor
                : constant.appWhiteColor
            }
          />
        </TouchableOpacity>
      </HeaderContainer>
    );
  };

  const renderCharacterDetail = () => {
    return (
      <>
        <ImageViewContainer>
          <ImageView source={{uri: detail?.img}} />
          <CharacterName>{detail?.name}</CharacterName>
          <CharacterNickName>{detail?.nickname}</CharacterNickName>
          <CharacterStatus>{detail?.status}</CharacterStatus>
        </ImageViewContainer>
      </>
    );
  };

  const renderPersonalDetail = () => {
    return (
      <DirectionView>
        <View>
          <CharacterStatus textColor={_.appGreenColor} fontSize={16}>
            {'Potrayed'}
          </CharacterStatus>
          <CharacterNickName fontSize={16}>
            {detail?.nickname}
          </CharacterNickName>
        </View>
        {(detail?.birthday !== 'Unknown' && (
          <BirthContainer>
            <CharacterNickName fontSize={16} marginRight={13}>
              {getFullDate(detail?.birthday.toString())}
            </CharacterNickName>
            <Feather name={'gift'} size={13} color={constant.appWhiteColor} />
          </BirthContainer>
        )) ||
          null}
      </DirectionView>
    );
  };

  const characterOccupation = () => {
    return (
      <OccupationContainer>
        <CharacterStatus
          textColor={_.appGreenColor}
          fontSize={16}
          paddingBottom={9}>
          {'Occupation'}
        </CharacterStatus>
        {detail?.occupation.map((item, index) => {
          return (
            <CharacterNickName fontSize={16} key={index}>
              {item}
            </CharacterNickName>
          );
        })}
      </OccupationContainer>
    );
  };

  const characterAppeared = () => {
    return (
      <>
        <OccupationContainer>
          <CharacterStatus
            textColor={_.appGreenColor}
            fontSize={16}
            paddingBottom={16}>
            {'Appeared in'}
          </CharacterStatus>
        </OccupationContainer>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={Styles.appearedContain}>
            {detail?.appearance.map((item, index) => {
              return (
                <AppearedContainer key={index}>
                  <AppearedText fontSize={14} key={index}>
                    {'Season ' + item}
                  </AppearedText>
                </AppearedContainer>
              );
            })}
          </View>
        </ScrollView>
      </>
    );
  };

  const _renderItem = ({item}) => {
    if (item.char_id === detail.char_id) {
      return null;
    } else {
      return (
        <View style={Styles.characterContainer}>
          <Characters
            imageUrl={item.img}
            name={item.name}
            nickName={item.nickname}
            likedPost={true}
            onPressLikeButton={() => {}}
            onPressCharacterItem={() => {}}
            isHideLikeButton={true}
          />
        </View>
      );
    }
  };

  const otherCharacters = () => {
    return (
      <>
        <OccupationContainer marginBottom={18}>
          <CharacterName fontSize={23}>{'Other characters'}</CharacterName>
        </OccupationContainer>
        <FlatList
          data={global.allCharacters}
          renderItem={_renderItem}
          keyExtractor={(item, index) => index}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={Styles.contentContainer}
        />
      </>
    );
  };

  return (
    <MainContainer>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'light-content'}
      />
      <ScrollView style={Styles.container}>
        <View
          style={[
            Styles.imageContainer,
            {
              aspectRatio: imageRatio,
            },
          ]}>
          <ImageBackground
            source={{uri: detail?.img}}
            style={Styles.backgroundImage}>
            <AbsoluteContainer />
            {renderHeader()}
            {renderCharacterDetail()}
          </ImageBackground>
        </View>
        {renderPersonalDetail()}
        {characterOccupation()}
        {characterAppeared()}
        {(global.allCharacters.length !== 0 && otherCharacters()) || null}
      </ScrollView>
    </MainContainer>
  );
};

const mapStateToProps = state => {
  return {likePost: state.home.likePost || []};
};

export default connect(mapStateToProps, {likeCharacter})(CharacterDetail);

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: constant.screenWidth,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  appearedContain: {
    marginHorizontal: 17,
    flexDirection: 'row',
  },
  contentContainer: {
    marginLeft: 17,
    marginBottom: 60,
  },
  characterContainer: {
    marginRight: 43,
  },
});
