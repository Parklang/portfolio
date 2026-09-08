import { Icons } from '@/components/icons';

import { USER } from '@/config/user';

export const DockConfig = {
  navbar: [
    { href: '/', icon: Icons.home, label: 'Home' },
    // { href: '/guestbook', icon: Icons.guestbook, label: 'Guestbook' },
    { href: '/cal', icon: Icons.calendar, label: 'Book a Meeting' },
    // { href: "/resume", icon: Icons.resume, label: "Resume" },
  ],
  contact: {
    social: {
      GitHub: {
        name: 'GitHub',
        url: USER.social.github,
        icon: Icons.github,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: USER.social.linkedin,
        icon: Icons.linkedin,
      },
      email: {
        name: 'Send Email',
        url: `mailto:${USER.email}`,
        icon: Icons.email,
      },
      // Bluesky: {
      //   name: 'Bluesky',
      //   url: USER.social.bluesky,
      //   icon: Icons.bluesky,
      // },
    },
  },
};
