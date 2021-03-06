// Photo by Dominika Roseclay from Pexels

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImageBanner = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "banner.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_noBase64
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
export default ImageBanner;
