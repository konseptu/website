import { getPermalink } from './utils/permalinks';
import DefaultLogo from '~/assets/images/default.png';
import DefaultLogoDark from '~/assets/images/default-dark.png';

export const headerData = {
  links: [
    {
      text: 'About Us',
      href: getPermalink('/about'),
      icon: 'tabler:info-circle',
    },
    {
      text: 'Impressum',
      href: getPermalink('/impressum'),
      icon: 'tabler:file-description',
    },
    {
      text: 'Products',
      icon: 'tabler:apps',
      links: [
        { text: 'Enterprise App', href: getPermalink('/products/enterprise-app'), icon: 'tabler:app-window' },
        { text: 'Queuing System', href: getPermalink('/products/queuing-system'), icon: 'tabler:list' },
        { text: 'User Feedback System', href: getPermalink('/products/user-feedback'), icon: 'tabler:message-circle' },
      ],
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
      ],
    },
    {
      title: 'Products',
      links: [
        { text: 'Enterprise App', icon: 'tabler:app-window', href: getPermalink('/products/enterprise-app') },
        { text: 'Queuing System', icon: 'tabler:list', href: getPermalink('/products/queuing-system') },
        {
          text: 'User Feedback System',
          icon: 'tabler:message-circle',
          href: getPermalink('/products/user-feedback'),
        },
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
  socialLinks: [
    { text: 'Facebook', ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/konseptuit' },
    { text: 'Viber', ariaLabel: 'Viber', icon: 'tabler:message-circle', href: 'https://viber.com/konseptuit' },
    { text: 'Github', ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/konseptu' },
    { text: 'contact@konseptu.com', ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:contact@konseptu.com' },
  ],
  footNote: '© Konseptu 2024. All rights reserved.',
  description: 'Upscale and digitize your business with us!',
};
