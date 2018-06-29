import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.scss'
import CssModules from 'react-css-modules'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'
import { MenuItem } from 'material-ui/Menu'
import Button from '@material-ui/core/Button';

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
    // this.props.fetchArticles({ searchText: "Apple", sortBy: "publishedAt" })
    return (
      <div styleName='main'>
        <Toolbar>
          <ToolbarGroup styleName='main'>
            <div styleName='search-bar'>
              <input onChange={this.handleText} onKeyPress={this.handleEnterPress} />
              <Button>Search</Button>
            </div>
            <div styleName='sort-bar' style={{top: isMenuOpen ? 97 : 0}}>
              <Button
                onClick={isMenuOpen ? this.handleClose : this.handleClick}
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
