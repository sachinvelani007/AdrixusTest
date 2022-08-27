import React from 'react';
import {FlatLiatView} from '../screen/homeCharacter/styled';
import {FlatList, StyleSheet, View} from 'react-native';
import Characters from './characters';

const CharacterList = props => {
  const _renderItem = ({item}) => {
    let checkStatus = false;
    if (props.likeStatus === true) {
      checkStatus = true;
    } else {
      let likeStatus = props.likeStatus(item) || '';
      checkStatus = likeStatus.char_id === item.char_id;
    }

    return (
      <Characters
        imageUrl={item.img}
        name={item.name}
        nickName={item.nickname}
        likedPost={checkStatus}
        onPressLikeButton={() => props.onPressLikeButton(item)}
        onPressCharacterItem={() => props.showCharacterDetail(item)}
      />
    );
  };

  const renderHeader = () => {
    return <View style={Styles.listHeader} />;
  };

  return (
    <FlatLiatView>
      <FlatList
        data={props.characterList}
        renderItem={_renderItem}
        keyExtractor={(item, index) => index}
        numColumns={2}
        style={Styles.flatListContainer}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={Styles.columnWrapperStyle}
        ListHeaderComponent={renderHeader}
      />
    </FlatLiatView>
  );
};
export default CharacterList;

const Styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    paddingHorizontal: 8,
  },
  columnWrapperStyle: {
    justifyContent: 'space-around',
    marginBottom: 55,
  },
  listHeader: {
    width: '100%',
    height: 57,
  },
});
