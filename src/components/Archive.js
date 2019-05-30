import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Archive</h3>
          <ul>
            {allMarkdownRemark.edges.map(edge => (
              <li key={edge.node.frontmatter.path}>
                {edge.node.frontmatter.title}
              </li>
            ))}
          </ul>
        </aside>
      </>
    )}
  />
);

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostsArchive {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
export default Archive;
