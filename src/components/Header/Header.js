import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.scss'
import CssModules from 'react-css-modules'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'

export class HeaderComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'Outside button'
    };
  }

  changeText = () => {
    this.setState({ buttonText: 'Outer Button' })
  }

  render() {
    const { message } = this.props.testSaga
    console.log(message)

    return (
      <div>
        <Toolbar>
          <ToolbarGroup>
            <div>{`${process.env.REACT_APP_NAME}-v${process.env.REACT_APP_VERSION}`}</div>
            <button styleName='button'><span styleName='inside'>Vanity Button</span></button>
            <button onClick={this.changeText} styleName='inside'>{this.state.buttonText}</button>
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }

  static propTypes = {
    testSaga: PropTypes.object
  }
}

export default CssModules(HeaderComponent, styles)
