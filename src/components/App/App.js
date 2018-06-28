import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Routes from '../../routes'
import styles from './style.scss'
import CssModules from 'react-css-modules'

class App extends Component {
  static propTypes = {
    init: PropTypes.func
  }

  render() {
    this.props.init()

    return (
      <div styleName="App">
        <Routes />
      </div>
    )
  }
}

export default CssModules(App, styles)