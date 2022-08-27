import request from './fetch';
import constant from './constant';

export const getAllBadCharacters = () => request.get(constant.characters);

export const searchCharacters = name =>
  request.get(`${constant.characters}?name=${name}`);
