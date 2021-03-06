import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
// import { Link, graphql } from 'gatsby'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BlogPosts from '../components/BlogPosts'
import Helmet from 'react-helmet'
// import BlogGallery from '../components/BlogGallery'
// import chroma from 'chroma-js'

const BlogPageStyles = styled.div`
  overflow: hidden;
  width: calc(min(1000px, 95vw));
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  color: #e6ddeb;

  h1 {
    /* color: #f9f7fa; */
    text-align: center;
  }
  p {
    color: whitesmoke;
    padding: 1rem;
    margin: 3rem auto;
    max-width: 500px;
  }
`

export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    // console.log(data.allMarkdownRemark)
    // console.log(posts)
    // console.log(data.allMarkdownRemark)
    // console.log('posts: ', posts)

    return (
      <Layout>
        <Helmet
          meta={[
            { property: 'og:type', name: 'og:type', content: 'website' },
            {
              property: 'og:title',
              name: 'og:title',
              content: "Waylon Walker's Blog Feed",
            },
            {
              property: 'twitter:title',
              name: 'twitter:title',
              content: "Waylon Walker's Blog Feed",
            },
            {
              property: 'og:image',
              name: 'og:image',
              content: 'https://waylonwalker.com/waylon-walker.png',
            },
            {
              property: 'og:image:width',
              name: 'og:image:width',
              content: '1000',
            },
            {
              property: 'og:image:height',
              name: 'og:image:height',
              content: '420',
            },
            {
              property: 'og:url',
              name: 'og:url',
              content: 'https://waylonwalker.com/blog',
            },
            {
              property: 'description',
              name: 'description',
              content:
                'A cronological feed of my posts about software development and data science.',
            },
            {
              property: 'og:description',
              name: 'og:description',
              content:
                'A cronological feed of my posts about software development and data science.',
            },
            {
              property: 'twitter:description',
              name: 'twitter:description',
              content:
                'A cronological feed of my posts about software development and data science.',
            },
            {
              property: 'keywords',
              name: 'keywords',
              content:
                'python, kedro, datascience, bash, command line, javascript, gatsby',
            },
            {
              property: 'twitter:image',
              name: 'twitter:image',
              content: 'https://waylonwalker.com/waylon-walker.png',
            },
          ]}
        />
        <BlogPageStyles>
          <h1>Blog Posts</h1>
          <p>
            I am always learning something, including blogging/writing skills. I
            try to share my experiences here. Much of it is random things form
            my career.
          </p>
          <ul className="tags">
            <li>
              {' '}
              <Link to="/tag/python">python</Link>{' '}
            </li>
            <li>
              {' '}
              <Link to="/tag/git">git</Link>{' '}
            </li>
            <li>
              {' '}
              <Link to="/tag/kedro">kedro</Link>{' '}
            </li>
          </ul>
          <BlogPosts posts={posts} />
        </BlogPageStyles>
      </Layout>
    )
  }
}

// previously filtered by this after frontmatter
// fields: { slug: { regex: "^/blog/" } }
export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { templateKey: { eq: "blog-post" } }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          html
          plainText
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            status
            description
            tags
            cover {
              absolutePath
              childImageSharp {
                fixed(width: 500, height: 210) {
                  ...GatsbyImageSharpFixed
                }
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }

            date
          }
        }
      }
    }
  }
`
