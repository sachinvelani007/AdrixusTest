import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeCharacter from '../screen/homeCharacter/homeCharacter';
import LikedCharacter from '../screen/likedCharacter/likedCharacter';
import SearchCharacter from '../screen/searchCharacter/searchCharacter';
import CharacterDetail from '../screen/CharacterDetail/characterDetail';

const Stack = createNativeStackNavigator();

const Screens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'homeCharacter'} component={HomeCharacter} />
      <Stack.Screen name={'likedCharacter'} component={LikedCharacter} />
      <Stack.Screen name={'searchCharacter'} component={SearchCharacter} />
      <Stack.Screen name={'characterDetail'} component={CharacterDetail} />
    </Stack.Navigator>
  );
};
export default Screens;
