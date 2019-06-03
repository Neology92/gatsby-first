// Photo by Dominika Roseclay from Pexels

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image_Banner = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "banner.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        alt="Notepad with word MOCKUP"
        fluid={data.file.childImageSharp.fluid}
      />
    )}
  />
);
export default Image_Banner;
