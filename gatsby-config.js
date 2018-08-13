module.exports = {
  
  pathPrefix: `/official_site`,
   

   

  plugins: [

     
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
               },
    },
     
  ],
  
}
