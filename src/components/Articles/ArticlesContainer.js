import React, { Component } from 'react'
import { connect } from 'react-redux'
import CssModules from 'react-css-modules'
import styles from './style.scss'
import ArticleCard from './ArticleCard'
import PropTypes from 'prop-types'

class ArticlesContainer extends Component {

  mapArticles = () => {
    return (
      this.props.articles.map((article, i) => (
        <ArticleCard
          key={i}
          title={article.title}
          description={article.description}
          image={article.urlToImage}
          url={article.url}
          handleReadMore={this.handleReadMore}
        />
      ))
    )
  }

  handleReadMore = (url) => {
    window.location = url
  }

  render() {
    return (
      <div style={{width: '100%', margin: "auto"}}>
        {this.mapArticles()}
      </div>
    )
  }

  static propTypes = {
    articles: PropTypes.array
  }
}

const mapStatetoProps = state => {
  return {
    articles: state.articles.articles
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStatetoProps, mapDispatchToProps)(CssModules(ArticlesContainer, styles))