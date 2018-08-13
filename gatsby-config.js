module.exports = {
  
  pathPrefix: `/official_site`,
  siteMetadata: {
    title: `gatsby-example-using-excel`,
    description: `Blazing-fast React.js static site generator`,
  },

   

  plugins: [

    /*****************/
    `gatsby-transformer-excel`,
    `gatsby-transformer-remark`,
    
    `gatsby-source-mongodb`,

    

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `data`,
      },
    },
    /*
     * Gatsby's data processing layer begins with “source” plugins. Here we
     * setup the site to pull data from the "documents" collection in a local
     * MongoDB instance
     */
    
    /*****************/
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
               },
    },
    /*****************/
     
  ],
  
}
