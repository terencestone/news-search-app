import React from 'react'
// import PropTypes from 'prop-types'
import styles from './style.scss'
import CssModules from 'react-css-modules'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'
import { MenuItem } from 'material-ui/Menu'
import Button from '@material-ui/core/Button';

export class HeaderComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    }
  }

  handleClick = event => {
    this.setState({ isMenuOpen: true });
  }

  handleClose = () => {
    this.setState({ isMenuOpen: false });
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <div styleName='main'>
        <Toolbar>
          <ToolbarGroup styleName='main'>
            <div styleName='search-bar'>
              <input />
              <Button>Search</Button>
            </div>
            <div styleName='sort-bar' style={{top: isMenuOpen ? 73 : 0}}>
              <Button
                onClick={isMenuOpen ? this.handleClose : this.handleClick}
              >
                Sort
              </Button>
              { isMenuOpen ?
                <div styleName='menu'>
                  <MenuItem onClick={this.handleClose}>Date</MenuItem>
                  <MenuItem onClick={this.handleClose}>Relevance</MenuItem>
                  <MenuItem onClick={this.handleClose}>Popularity</MenuItem>
                </div> : null }
              </div>
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }

  // static propTypes = {
  //   testSaga: PropTypes.object
  // }
}

export default CssModules(HeaderComponent, styles)
