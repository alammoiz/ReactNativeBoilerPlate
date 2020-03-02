import get from 'lodash.get';
import * as lodashIsEmpty from 'lodash.isempty';

export const utilService = {
  getValue,
  redirectToLogin,
  isEmpty,
};

function getValue(...param) {
  return get(...param);
}

function redirectToLogin(navigation) {
  console.log('Expire localStorage and logout');
  // navigation.popToTop();
  // navigation.navigate('TODO');
}

function isEmpty(value) {
  return lodashIsEmpty(value);
}

export default utilService;
