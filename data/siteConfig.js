module.exports = {
  siteTitle: 'Mark Bennett',
  siteDescription: 'Personal blog and project portfolio for Mark Bennett.',
  authorName: 'Mark Bennett',
  twitterUsername: '_mrko_polo',
  authorAvatar: 'avatar.jpg', // file in content/images
  multilangPosts: false, // enable/disable flags in post lists
  authorDescriptionShort: `
  Software engineer based in Oakland, CA.
  `,
  authorDescriptionLong: `
  Hey, I'm Mark. I'm a software engineer based in Oakland, CA. Currently, I'm building cloud integrations for Samsara, an Internet of Things (IoT) company that brings real-time visibility, analytics, and AI to business operations. I'm also a drummer, basketball nerd, and podcast junky.
  `,
  siteUrl: 'https://markbennett.io/',
  disqusSiteUrl: 'https://markbennett.io/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  // pathPrefix: '/gatsby-starter-morning-dew', // Note: it must *not* have a trailing slash.
  siteCover: 'cover.jpg', // file in content/images
  googleAnalyticsId: 'UA-67868977-1',
  background_color: '#ffffff',
  theme_color: '#7dffcf',
  display: 'standalone',
  icon: 'content/images/icon.svg',
  postsPerPage: 6,
  disqusShortname: 'maxpou',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    // {
    //   label: 'Blog',
    //   url: '/blog',
    // },
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
    // {
    //   sectionName: 'Explore the site',
    //   links: [
    //     {
    //       label: 'Home',
    //       url: '/',
    //     },
    //     {
    //       label: 'Blog',
    //       url: '/blog',
    //     },
    //     {
    //       label: 'About',
    //       url: '/about',
    //     },
    //   ],
    // },
    {
      sectionName: 'Around the web',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/mwbennett/',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/_mrko_polo/',
        },
        {
          label: 'LinkedIn',
          url: 'https://linkedin.com/in/bennettwmark/',
        },
        {
          label: 'Email',
          url: 'mailto:bennettwmark@gmail.com',
        },
      ],
    },
  ],
};
