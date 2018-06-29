import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.scss'
import CssModules from 'react-css-modules'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'
import { MenuItem } from 'material-ui/Menu'
import Button from '@material-ui/core/Button';

const overrideStyles = {
  button: {
    backgroundColor: "#e71d37",
    height: 30,
    marginBottom: 4,
    minHeight: 0, color:
    'white',
    fontSize: 12,
    textTransform: 'capitalize'
  },
  sortBtn: {
    backgroundColor: '#313131',
    width: 110,
    height: 35
  }
}

export class HeaderComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      searchText: '',
      sortBy: "popularity"
    }
  }

  handleClick = event => {
    this.setState({ isMenuOpen: true });
  }

  handleClose = () => {
    this.setState({ isMenuOpen: false });
  }

  handleText = (e) => {
    this.setState({ searchText: e.target.value })
  }

  handleSubmit = () => {
    this.props.fetchArticles({
      searchText: this.state.searchText,
      sortBy: "popularity"
    })
  }

  handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      this.handleSubmit()
    }
  }

  handleSort = (type) => {
    this.props.fetchArticles({
      searchText: this.state.searchText,
      sortBy: type || undefined
    })
    this.handleClose()
  }

  render() {
    const { isMenuOpen } = this.state;
    // I'm overriding some of material-ui's styles inline
    return (
      <div styleName='main'>
        <Toolbar style={{backgroundColor: '#454545'}}>
          <ToolbarGroup styleName='main'>
            <div styleName='search-bar'>
              <input
                onChange={this.handleText}
                onKeyPress={this.handleEnterPress}
              />
              <Button
                onClick={this.handleSubmit}
                style={overrideStyles.button}>Search</Button>
            </div>
            <div styleName='sort-bar' style={{top: isMenuOpen ? 97 : 0}}>
              <Button
                onClick={isMenuOpen ? this.handleClose : this.handleClick}
                style={{...overrideStyles.button, ...overrideStyles.sortBtn}}
              >
                Sort Articles
              </Button>
              { isMenuOpen ?
                <div styleName='menu'>
                  <MenuItem onClick={() => this.handleSort("publishedAt")}>Date</MenuItem>
                  <MenuItem onClick={() => this.handleSort("relevancy")}>Relevance</MenuItem>
                  <MenuItem onClick={() => this.handleSort("popularity")}>Popularity</MenuItem>
                  <MenuItem onClick={() => this.handleSort(null)}>None</MenuItem>
                </div> : null }
              </div>
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }

  static propTypes = {
    fetchArticles: PropTypes.func
  }
}

export default CssModules(HeaderComponent, styles)
