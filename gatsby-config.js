module.exports = {
  
  pathPrefix: `/official_site`,
  siteMetadata: {
    title: `gatsby-example-using-excel`,
    description: `Blazing-fast React.js static site generator`,
                },

   

  plugins: [

     
    `gatsby-transformer-excel`,
    `gatsby-transformer-remark`,
     
    {
      resolve: `gatsby-source-filesystem`,
      options:    {
        path: `${__dirname}/src/data`,
        name: `data`,
                 },
                   },
     
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
               },
    },
     
  ],
  
}
