import React, { Component } from 'react'
import { connect } from 'react-redux'
import CssModules from 'react-css-modules'
import styles from './style.scss'
import ArticleCard from './ArticleCard'

const articles = [
  {id: 1, img: "image", title: "title", blurb: "blurb"},
  {id: 2, img: "image", title: "title", blurb: "blurb"},
  {id: 3, img: "image", title: "title", blurb: "blurb"},
  {id: 4, img: "image", title: "title", blurb: "blurb"},
  {id: 5, img: "image", title: "title", blurb: "blurb"},
  {id: 6, img: "image", title: "title", blurb: "blurb"},
  {id: 7, img: "image", title: "title", blurb: "blurb"},
  {id: 8, img: "image", title: "title", blurb: "blurb"},
]

class ArticlesContainer extends Component {

  mapArticles = () => {
    return (
      articles.map(article => (
        <ArticleCard />
      ))
    )
  }

  render() {
    return (
      <div style={{width: '100%', margin: "auto"}}>
        {this.mapArticles()}
      </div>
    )
  }
}

const mapStatetoProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStatetoProps, mapDispatchToProps)(CssModules(ArticlesContainer, styles))