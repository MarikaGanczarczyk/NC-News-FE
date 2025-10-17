import React from 'react'
import ArticleList from '../Components/articles/ArticleList'

export default function Articles() {
  return (
    <>
    <main className='articles-page'>
      <h1 className='articles-title'>All Articles</h1>
      <ArticleList/>
    </main>
    
    </>
  )
}
