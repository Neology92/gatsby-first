import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Image_Logo } from 'images';

const Wrapper = styled.header`
  background: #a0c6fe;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const HeadingLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;

  & h1 {
    margin: 0 0 0 20px;
    color: #010b61;
  }
`;

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Container>
      <HeadingLink to="/">
        {/* eslint-disable-next-line*/}
        <Image_Logo />
        <h1>{siteTitle}</h1>
      </HeadingLink>
    </Container>
  </Wrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
