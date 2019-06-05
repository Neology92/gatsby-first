import React from 'react';
import { Link } from 'gatsby';

import { Layout } from 'layouts';
import { SEO } from 'components';
import { ImageGatsbyAstronaut } from 'images';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <ImageGatsbyAstronaut />
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
