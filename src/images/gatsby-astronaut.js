import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image_GatsbyAstronaut = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        alt="Gatsby Astroanut"
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
);
export default Image_GatsbyAstronaut;
