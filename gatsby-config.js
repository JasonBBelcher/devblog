module.exports = {
  plugins: [
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 970,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Shovels Of Code`,
    author: `Jason Belcher`,
    description: `A Blog about coding in JavaScript`,
    social: [
      {
        name: `twitter`,
        url: `http://www.twitter.com/shovelsofcode`,
      },
      {
        name: `github`,
        url: `https://github.com/JasonBBelcher`,
      },
      {
        name: `resume`,
        url:
          "https://drive.google.com/open?id=1QXAC9zhU6RDKHbxOVH4RGpVRvtwLu2oD",
      },
    ],
  },
}
