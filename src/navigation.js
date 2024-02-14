import {getPermalink, getBlogPermalink, getAsset, getHomePermalink} from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home', href: getHomePermalink(),
    },
    
    // INFO TAB
    {
      text: 'Info',
      links: [
        {
          text: 'About',
          href: getPermalink('/info/about'),
        },
        
        {
          text: 'How to play',
          href: getPermalink('/info/how-to-play'),
        },
        
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        
        {
          text: 'Contact',
          href: getPermalink('/info/contact'),
        },

        {
          text: 'Donate',
          href: getPermalink('/info/donate'),
        },
      ],
    },
    
    // download
    {
      text: 'Download', href: getPermalink('/download'),
    }
  ],
  actions: [{ text: 'Play now!', href: 'https://www.dingoapp.io', target: '_blank' }],
};

// this is for the footer 
export const footerData = {
  links: [
    
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
   socialLinks: [
     { ariaLabel: 'Bluesky', icon: 'tabler:brand-bluesky', href: 'https://bsky.app/profile/deafchan.bsky.social' },
     { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/deafbits/' },
  //   { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
   ],
  footNote: `
    Made in South Jersey with 💚 by <a class="text-fuchsia-900 hover:underline dark:text-lime-500" href="https://chanbrown.com/"> Channing Brown</a> · © All rights reserved.
  `,
};
