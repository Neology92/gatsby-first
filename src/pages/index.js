import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import { Layout } from 'layouts';
import { SEO, PostsList } from 'components';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StaticQuery
      query={POSTS_LIST_QUERY}
      render={({ allMarkdownRemark }) => (
        <PostsList allMarkdownRemark={allMarkdownRemark} />
      )}
    />
    <div style={{ margin: `2rem`, textAlign: `right` }}>
      <Link to="/page-2/">Page 2</Link>
    </div>
  </Layout>
);

const POSTS_LIST_QUERY = graphql`
  query PostsListing {
    allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
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

export default IndexPage;
