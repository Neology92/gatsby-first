import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from './layout';
import { PostsList, SEO } from 'components';

const Pages = styled.div`
  margin: 2rem;
  text-align: right;
  display: grid;
  grid-template-columns: 5fr 1fr;
`;

const PageNumbers = styled.div`
  display: flex;
  flex-direction: row;
`;

const Number = styled(Link)`
  text-decoration: none;
  margin: 0 10px;
`;

export default class PostsListLayout extends Component {
  render() {
    const { pathname } = this.props.location;
    const { allMarkdownRemark } = this.props.data;
    const { pages } = this.props.pageContext;

    const pageNumbers = [];

    pageNumbers.push(
      <Number key={1} to={`/`}>
        1
      </Number>
    );

    for (let i = 2; i <= pages; i++) {
      pageNumbers.push(
        <Number key={i} to={`/${i}`}>
          {i}
        </Number>
      );
    }

    return (
      <Layout pathname={pathname}>
        <SEO title="Home" />
        <PostsList allMarkdownRemark={allMarkdownRemark} />
        <Pages>
          <PageNumbers>{pageNumbers}</PageNumbers>
          <Link to="/page-2/">Page 2</Link>
        </Pages>
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
