import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import './style.scss'

import { Provider } from 'react-redux'
import createStore from '../../redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import { blue800, amber50 } from 'material-ui/styles/colors'

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: amber50
  },
  tabs: {
    backgroundColor: blue800
  }
})

const store = createStore()

injectTapEventPlugin()

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
