import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const ArchiveWrapper = styled.aside`
  border-radius: 4px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
  background-color: #e8eeff;
  padding: 1rem;

  & h3 {
    color: #222;
  }

  & ul {
    list-style: none;
    margin: 0;

    a {
      color: #666;
    }
    a:hover {
      color: #222;
    }
  }
`;

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <ArchiveWrapper>
          <h3>Archive</h3>
          <ul>
            {allMarkdownRemark.edges.map(edge => (
              <li key={edge.node.frontmatter.slug}>
                <Link to={`/posts${edge.node.frontmatter.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </ArchiveWrapper>
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
            slug
          }
        }
      }
    }
  }
`;
export default Archive;
