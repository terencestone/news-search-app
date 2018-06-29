import { takeLatest } from 'redux-saga/effects'
import * as constants from '../redux/constants'

/* ------------- Sagas ------------- */

import { articlesFetcher } from './articles'

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    takeLatest(constants.FETCH_ARTICLES.TRIGGER, articlesFetcher)
  ]
}