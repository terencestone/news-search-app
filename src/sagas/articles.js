import * as entityActions from '../redux/actions'
import { put, apply } from 'redux-saga/effects'
import * as api from '../services/api'

const { fetchArticles } = entityActions

export function* articlesFetcher (action) {
  const { searchText, sortBy } = action.payload;
  yield put(fetchArticles.request(action.payload));

  const { response, error } = yield apply(
    null,
    api.getArticles,
    [searchText, sortBy]
  );

  if (!error) {
    yield put(fetchArticles.success(response, action.payload));
  } else {
    yield put(fetchArticles.failure(error));
  }

}