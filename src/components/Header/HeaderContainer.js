import { connect } from 'react-redux'

import HeaderComponent from './Header'

import { fetchArticles } from '../../redux/actions/actionCreators'

const mapStatetoProps = state => {
  return {
    // testSaga: state.testSaga
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: params => {
      dispatch(fetchArticles(params))
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(HeaderComponent)
