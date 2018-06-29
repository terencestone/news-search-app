import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'
import * as constants from '../constants'

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  articles: [],
  isFetching: false,
  error: null
})

/* ------------- Reducers ------------- */

export const handleFetchArticlesRequest = (state) => state.merge({ isFetching: true })

export const handleFetchArticlesSuccess = (state, action) => {
  return state.merge({
    articles: action.payload.response.articles,
    isFetching: false
  })
}

export const handleFetchArticlesFailure = (state, { error }) =>
  state.merge({ isFetching: false, error })


/* ------------- Hookup Reducers To Types ------------- */

export const articlesReducer = createReducer(INITIAL_STATE, {
  [constants.FETCH_ARTICLES.REQUEST]: handleFetchArticlesRequest,
  [constants.FETCH_ARTICLES.SUCCESS]: handleFetchArticlesSuccess,
  [constants.FETCH_ARTICLES.FAILURE]: handleFetchArticlesFailure,
})