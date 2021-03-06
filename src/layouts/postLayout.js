import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';

export default class PostLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    const { pathname } = this.props.location;

    return (
      <Layout pathname={pathname}>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </Layout>
    );
  }
}

export const POST_QUERY = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        title
      }
    }
  }
`;
