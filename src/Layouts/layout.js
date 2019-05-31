import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { Archive } from 'components';
import Header from './header';
import GlobalStyle from './GlobalStyle';

const MainWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1rem 1rem;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  & main {
    padding: 0 1rem 0 0;
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <MainWrapper>
          <main>{children}</main>
          <Archive />
        </MainWrapper>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
