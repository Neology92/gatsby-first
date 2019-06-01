import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from './layout';
import { PostsList, SEO } from 'components';

export default class PostsPageLayout extends Component {
  render() {
    const { allMarkdownRemark } = this.props.data;

    return (
      <Layout>
        <SEO title="Home" />
        <PostsList allMarkdownRemark={allMarkdownRemark} />
        <div style={{ margin: `2rem`, textAlign: `right` }}>
          <Link to="/page-2/">Page 2</Link>
        </div>
      </Layout>
    );
  }
}

export const POST_QUERY = graphql`
  query PostsPageQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      sort: { order: DESC, fields: [frontmatter___date] }
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            slug
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
