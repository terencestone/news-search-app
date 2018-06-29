import qs from 'qs'

const BASE_URL = 'https://newsapi.org/v2/everything?'

function callApi(endpoint, fetchInit = {}) {
  const fullUrl = BASE_URL + endpoint
  const fetchArgs = { ...fetchInit };

  return fetch(fullUrl, fetchArgs)
    .then(response => {
      if (response.status === 204) {
        return { json: {}, response };
      }
      return { json: response.json(), response };
    })
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject({ error: json, response });
      }
      return json;
    })
    .then(
      response => ({ response }),
      ({ error, response }) => ({
        error: error.statusText || response.statusText || 'Error',
        response
      })
    );
}

export const getArticles = (searchText, sortBy) => {
  const fetchInit = {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  }

  const queryParams = {
    'q': searchText,
    'sortBy': sortBy,
    'apiKey': '1b58e45094174f14879a2903e491788a'
  }

  const apiEndpoint = qs.stringify(queryParams)

  return callApi(apiEndpoint, null, fetchInit)
}