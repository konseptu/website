import { getPermalink } from './utils/permalinks';
import DefaultLogo from '~/assets/images/default.png';
import DefaultLogoDark from '~/assets/images/default-dark.png';

export const headerData = {
  links: [
    {
      text: 'About Us',
      href: getPermalink('/about'),
    },
    {
      text: 'Impressum',
      href: getPermalink('/impressum'),
    },
  ],
  showRssFeed: false,
  position: 'right',
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About', icon: 'tabler:info-circle', href: getPermalink('/about') },
        { text: 'Impressum', icon: 'tabler:file-description', href: getPermalink('/impressum') },
        { text: 'Github', ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/konseptu' },
        { text: 'contact@konseptu.com', ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:contact@konseptu.com' },
      ],
    },
  ],
  logo: {
    src: DefaultLogo.src,
    alt: 'Konseptu logo',
  },
  logoDark: {
    src: DefaultLogoDark.src,
    alt: 'Konseptu logo',
  },
  secondaryLinks: [{ text: 'Website', ariaLabel: 'Website', icon: 'tabler:globe', href: 'https://konseptu.com' }],
  socialLinks: [],
  footNote: '© Konseptu 2024. All rights reserved.',
};
