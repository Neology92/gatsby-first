const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  createPage({
    path: '/fakepath',
    component: path.resolve('./src/layouts/postLayout.js'),
  });
};
