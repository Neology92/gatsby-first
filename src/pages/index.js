import React from 'react';
import { Link } from 'gatsby';
import { Layout } from 'layouts';
import { SEO, PostsList } from 'components';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostsList />
    <div style={{ margin: `2rem`, textAlign: `right` }}>
      <Link to="/page-2/">Page 2</Link>
    </div>
  </Layout>
);

export default IndexPage;
