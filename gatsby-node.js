const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      posts: allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }

      postsList: allMarkdownRemark {
        edges {
          node {
            id
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors);
    }

    const postTemplate = path.resolve('./src/layouts/postLayout.js');
    result.data.posts.edges.forEach(({ node }) => {
      createPage({
        path: `/posts${node.frontmatter.slug}`,
        component: postTemplate,
        context: {
          slug: node.frontmatter.slug,
        },
      });
    });

    const postsAmount = result.data.postsList.edges.length;
    const postsPerPage = 3;
    const pages = (postsAmount + postsPerPage - 1) / postsPerPage;

    const postsPageTemplate = path.resolve('./src/layouts/postsListLayout.js');
    for (let i = 1; i <= pages; i++) {
      const toSkip = (i - 1) * postsPerPage;
      createPage({
        path: `/${i}`,
        component: postsPageTemplate,
        context: {
          skip: toSkip,
          limit: postsPerPage,
          pages: pages,
        },
      });
    }

    createPage({
      path: `/`,
      component: postsPageTemplate,
      context: {
        skip: 0,
        limit: postsPerPage,
        pages: pages,
      },
    });
  });
};
