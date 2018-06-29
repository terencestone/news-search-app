import * as constants from '../constants'

export const fetchArticles = (params) => (
  { type: constants.FETCH_ARTICLES.TRIGGER, payload: params }
)