import * as constants from '../constants'
import { action } from '../../utils'

export const fetchArticles = {
  request: () => action(constants.FETCH_ARTICLES.REQUEST),
  success: response => action(constants.FETCH_ARTICLES.SUCCESS, { payload: { response } }),
  failure: error => action(constants.FETCH_ARTICLES.FAILURE, { payload: { error } })
}