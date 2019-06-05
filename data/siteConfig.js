module.exports = {
  siteTitle: 'Mark Bennett',
  siteDescription: 'Personal blog and project portfolio for Mark Bennett.',
  authorName: 'Mark Bennett',
  twitterUsername: '_mrko_polo',
  authorAvatar: 'avatar.jpeg', // file in content/images
  multilangPosts: true, // enable/disable flags in post lists
  authorDescription: `
  Mark is a full stack engineer from Oakland, CA.
  `,
  siteUrl: 'https://markbennett.io/',
  disqusSiteUrl: 'https://markbennett.io/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  // pathPrefix: '/gatsby-starter-morning-dew', // Note: it must *not* have a trailing slash.
  siteCover: 'cover.jpg', // file in content/images
  googleAnalyticsId: 'UA-67868977-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/gatsby-icon.png',
  postsPerPage: 6,
  disqusShortname: 'maxpou',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Blog',
      url: '/blog',
    },
    {
      label: 'About',
      url: '/about',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore the site',
      links: [
        {
          label: 'Home',
          url: '/',
        },
        {
          label: 'Blog',
          url: '/blog',
        },
        {
          label: 'About',
          url: '/about',
        },
      ],
    },
    {
      sectionName: 'Around the web',
      links: [
        {
          label: 'Github',
          url: 'https://github.com/mwbennett/',
        },
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/bennettwmark/',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/_mrko_polo/',
        },
      ],
    },
  ],
};
