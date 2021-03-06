import React from 'react'
import Layout from '../components/layout'

const MetaPage = ({ data, pageContext }) => {
  const now = new Date()

  return (
    <Layout
      description="stats about waylonwalkers blog"
      status="published"
      title="stats"
      keywords="meta stats"
      time={now}
      url="https://waylonwalker.com/meta"
    >
      <h2>tags</h2>
      <ul>
        {pageContext.tags.map((tag) => (
          <li>
            <a href={`https://waylonwalker.com/tag/${tag}`}>
              {tag} </a>: {pageContext.tagCounts[tag]}
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default MetaPage
