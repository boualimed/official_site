module.exports = {
  
  pathPrefix: `/official_site`,
  /*common pieces */
  siteMetadata: {
    title: `food computer`,
  },

   

  plugins: [

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-glamor`,
    `gatsby-transformer-remark`,

   /* instance path src path */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

    
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
               },
    },
     
  
  
    
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography_poll`,
      },
    },
  ],
  
}
