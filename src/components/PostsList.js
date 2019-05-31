import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
// import Image from './Image.js';

import { Button } from 'elements';

const Post = styled.section`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
  margin-bottom: 70px;
  padding: 1rem;
  position: relative;

  & h1 {
    margin-bottom: 0.7rem;
  }
  & .date {
    color: rgba(0, 0, 0, 0.4);
  }
  & button {
    position: absolute;
    right: 2rem;
  }
`;

const PostsList = () => (
  <StaticQuery
    query={POSTS_LIST_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(({ node }) => (
        <Post key={node.frontmatter.slug}>
          <h1>{node.frontmatter.title}</h1>
          <p className="date">{node.frontmatter.date}</p>
          <p style={{ marginBottom: `0.8rem` }}>{node.excerpt}</p>
          <Link to={`/posts${node.frontmatter.slug}`}>
            <Button> &rarr; &nbsp; Read more </Button>
          </Link>
        </Post>
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
