import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getStoredStateMigrateV4 from 'redux-persist/lib/integration/getStoredStateMigrateV4';
import AppReducer from './src/rootReducer';
import thunk from 'redux-thunk';
import Screens from './src/navigation/screen';
import {NavigationContainer} from '@react-navigation/native';
import constant from './src/helper/constant';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  getStoredState: getStoredStateMigrateV4({
    blacklist: ['navigation'],
    storage: AsyncStorage,
  }),
  timeout: 0,
};

const persistedReducer = persistReducer(persistConfig, AppReducer);
let store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar
            backgroundColor={constant.appBlackColor}
            barStyle={'#FFF'}
          />
          <Screens />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
