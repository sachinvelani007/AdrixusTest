import {LIKE_POST} from './constant';

export const likeCharacter = data => {
  return (dispatch, getState) => {
    return dispatch({
      type: LIKE_POST,
      data: data,
    });
  };
};
