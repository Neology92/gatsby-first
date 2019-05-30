import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

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
                <Link to={`/posts${edge.node.frontmatter.path}`}>
                  {edge.node.frontmatter.title}
                </Link>
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
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
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
