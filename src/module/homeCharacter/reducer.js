import {LIKE_POST} from './constant';

export const initStateAccount = {
  likePost: [],
};

export default (state = initStateAccount, action) => {
  switch (action.type) {
    case LIKE_POST: {
      return {
        ...state,
        likePost: action.data,
      };
    }
    default:
      return state;
  }
};
