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

function redirectToLogin(loginUrl = utilService.loginUrl) {
  console.log('Expire localStorage and logout');
  /* let returnUrl = encodeURIComponent(
    window.location.pathname.replace(/[//]+/, '') + window.location.search,
  );*/
  // utilService.redirectTo(loginUrl + '?returnUrl=' + returnUrl);
}

function isEmpty(value) {
  return lodashIsEmpty(value);
}

export default utilService;
