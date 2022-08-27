import {combineReducers} from 'redux';
import HomeCharacter from './module/homeCharacter/reducer';
import {initStateAccount} from './module/homeCharacter/reducer';

export const appDefaultReducer = {
  home: initStateAccount,
};

const appReducer = combineReducers({
  home: HomeCharacter,
});

export default function rootReducer(state, action) {
  let finalState = appReducer(state, action);
  if (action.type === 'RESET_STORE') {
    finalState = appDefaultReducer; //resetReducer(finalState, action);
  }
  return finalState;
}
