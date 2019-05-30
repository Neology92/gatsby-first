import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Archive = () => (
  <StaticQuery
    query={graphql`
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
    `}
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
