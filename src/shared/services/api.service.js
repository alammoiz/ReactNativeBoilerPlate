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
        'Bearer Rl8YHPVwj/+RxL75c5LkmxKSa9mnXScpKw/u3i1avgq3XCiy9YxE0JGJMwzpjDIalOChsXGJ9Ef4GwkZXm+fcO+ffjED4lfgLShT2OwUyPYfwLVD+Qks7x6UGIRowjMFZdw7tjBn7f87P+CiZehEJp9r6uqUaU9JwEFHdWSHTZfjF6Yfgb0TuyYWKI3bKiifxq6FIMc8k+GngeTXyP/zryQ1GUDQP5vE/pk3a0i6jyn57y5rTnCv4tnsh9xr+EBbK5FI5Z11jU9ejzlTpmT9E94EcwHK1UE5hS55QcJre6LM97Ugy5Tmo3QyCcCKX46S4365BaDN6V7r1dMiWPPPULRT5eXgia+HlBGE9V3H7tWhAld3z6RFooiX6F0BIQxW0S2UcC2BzoAv4cpoD2JjHyVX2nzSUZbGewJDpoJDeuyaQDOP6Fo1Rh9v21atP6yTa7Og10bXeaY9o9f5gYrwNaf3cHkeyjSiKbCsxHQqJM8b2xkfckqhLnOmDGH172jr',
    },
    body: JSON.stringify(options.payload),
  });
  let responseJson = await response.json();
  return apiService.handleResponse(responseJson);
}

function handleResponse(response) {
  const mutatedResponse = {
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
    return {...mutatedResponse, data};
  } else {
    return {...mutatedResponse, data: !utilService.isEmpty(data) ? data : null};
  }
}

export default {
  onFetch: apiService.onFetch,
};
