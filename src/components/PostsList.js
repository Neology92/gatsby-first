import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
// import Image from './Image.js';

const PostsList = () => (
  <StaticQuery
    query={POSTS_LIST_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(({ node }) => (
        <section key={node.frontmatter.slug}>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
          <h1>{node.frontmatter.title}</h1>
          <p>{node.frontmatter.date}</p>
          <p style={{ marginBottom: `0.8rem` }}>{node.excerpt}</p>
          <Link to={`/posts${node.frontmatter.slug}`}>Read more</Link>
        </section>
      ))
    }
  />
);

const POSTS_LIST_QUERY = graphql`
  query PostsListing {
    allMarkdownRemark {
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

export default PostsList;
