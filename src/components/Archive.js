import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

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

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Archive</h3>
          <ul>
            {allMarkdownRemark.edges.map((edge, index) => (
              <li key={index}>{edge.node.frontmatter.title}</li>
            ))}
          </ul>
        </aside>
      </>
    )}
  />
);

export default Archive;
