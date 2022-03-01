import * as gtag from '../gtag';

export const generateSocialMediaActions = () => ([
  {
    id: 'linkedin',
    name: 'Linkedin',
    shortcut: ['l'],
    keywords: 'linkedin',
    section: 'Follow me',
    perform: () => {
      gtag.event({
        action: 'socialMedia',
        label: 'Click on social media item',
        category: 'CTA',
        value: 'linkedin',
      });
      window.open('https://www.linkedin.com/in/igornfaustino', '_blank');
    },
  },
  {
    id: 'github',
    name: 'Github',
    shortcut: ['a'],
    keywords: 'github',
    section: 'Follow me',
    perform: () => {
      gtag.event({
        action: 'socialMedia',
        label: 'Click on social media item',
        category: 'CTA',
        value: 'github',
      });
      window.open('https://github.com/igornfaustino', '_blank');
    },
  },
  {
    id: 'twitter',
    name: 'Twitter',
    shortcut: ['t'],
    keywords: 'twitter',
    section: 'Follow me',
    perform: () => {
      gtag.event({
        action: 'socialMedia',
        label: 'Click on social media item',
        category: 'CTA',
        value: 'twitter',
      });
      window.open('https://twitter.com/igornfaustino', '_blank');
    },
  },
  {
    id: 'youtube',
    name: 'Youtube',
    shortcut: ['y'],
    keywords: 'youtube',
    section: 'Follow me',
    perform: () => {
      gtag.event({
        action: 'socialMedia',
        label: 'Click on social media item',
        category: 'CTA',
        value: 'youtube',
      });
      window.open(
        'https://www.youtube.com/channel/UCIOtxH-8UsIX8J7iHZ8px5w',
        '_blank'
      );
    },
  },
])
