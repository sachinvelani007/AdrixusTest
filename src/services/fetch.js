import constant from './constant';

/**
 * Request API
 @param url
 @param options
 @param test
 @param customHeader
 @returns {Promise<R>}
 */

const get = (
  url = '',
  options = {},
  test = false,
  base = constant.baseOnlyUrl,
  customHeader = {},
) => {
  return new Promise((resolve, reject) => {
    let baseURL = base + url;

    fetch(baseURL, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        if (data.code) {
          reject(new Error(data.message));
        } else {
          resolve(data);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default {
  get,
};
