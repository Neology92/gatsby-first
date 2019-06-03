module.exports = {
  siteMetadata: {
    title: `Roll 4 Gatsby Blog`,
    description: `My first gatsby project. Let's learn some new things!`,
    author: `@Neology`,
    siteUrl: `https://musing-perlman-9248db.netlify.com/`,
  },
  plugins: [
    'gatsby-plugin-resolve-src', // Absolute path in code
    `gatsby-plugin-styled-components`, // Styled Components <3
    `gatsby-transformer-remark`, // Allows to  work on .md files queries
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Roll 4 Gatsby Blog`,
        short_name: `Roll4Blog`,
        start_url: `/`,
        background_color: `#a0c6fe`,
        theme_color: `#a0c6fe`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
