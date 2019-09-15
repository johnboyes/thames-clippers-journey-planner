module.exports = {
  siteMetadata: {
    title: `Thames Clippers Journey Planner`,
    description: `Journey information on the Thames Clippers`,
    author: `@johnmboyes`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `thames-clippers-journey-planner`,
        short_name: `thames-clippers`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "TIMETABLES",
        // This is the field under which it's accessible
        fieldName: "timetables",
        // URL to query from
        url: "https://thames-clippers-timetables-api.herokuapp.com/graphql",
      },
    },
  ],
}
