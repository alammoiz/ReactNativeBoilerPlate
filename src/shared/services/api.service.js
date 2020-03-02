import utilService from './util.service';
export const apiService = {
  onFetch,
  handleResponse,
};

async function onFetch(options) {
  let response = await fetch(options.url, {
    method: options.method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization:
        'Bearer fGGIBkV3SF39MFN5mS47SegfCzgSYWvpECl+FJjC/ZRkVkjGMoug8cRDkH6m6jxUbeAeHIVm4ZqV2YEtK679BB6YsbO3Ov1pVieNAd0nvDc4lDcsXPnkItwcQ2+ek4395CugZDhRI6yvB+Puj6tQ9vc80R+kI/p2/euTdC27xGqNoS/0FbZ/H5Nj8h7B3Mcurzu6WiKtNXuT9ebQp2C2MLzAIlTp6dGF8FwwGCm/RzuIgNs+X+vsucrjvGE+yc9W4N3XbmHi9TUOyMjA1BAuxIXDDp+jeBl4H4ewCszejTLyO5UPthnt4vrpC+Hk5k2OzbGapfEx7dOnDBOiRuxSGLeEOd1whqxV2Afbvw+miIGu1RQnoo+vVvjrN1Nta1kjtCwZkPjFy0CE+mcjD+YnSXksVq7KMY7tI9snlT7Wuyo1TP9gIyNL5XboXuPgli1PEPVva4okA0I35GxnrWru50keFK0jv90OIaWsCgKDnmo=',
    },
    body: JSON.stringify(options.payload),
  });
  let responseJson = await response.json();
  return apiService.handleResponse(responseJson);
}

function handleResponse(response) {
  const mutatedReponse = {
    status: response.Response.Code,
    ok: response.Response.Code === 200,
    response: {
      code: utilService.getValue(response.Data, 'response.code', 500),
      message: utilService.getValue(
        response.Data,
        'response.message',
        'Something went wrong',
      ),
      errorCode: utilService.getValue(response.Data, 'response.errorCode', 400),
    },
  };
  const data = utilService.getValue(response.Data, 'data', response.Data);
  if (response.Response.Code === 401) {
    utilService.redirectToLogin();
    return;
  }
  if (response.Response.Code === 200) {
    return {...mutatedReponse, data};
  } else {
    return {...mutatedReponse, data: !utilService.isEmpty(data) ? data : null};
  }
}

export default {
  onFetch: apiService.onFetch,
};
