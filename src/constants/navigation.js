export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    hasDropdown: true,
  },
  { label: 'Industries', path: '/industries' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Blog', path: '/blog' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
];

export const FOOTER_LINKS = {
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Careers', path: '/careers' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ],
  Services: [
    { label: 'Custom Software', path: '/services/custom-software-development' },
    { label: 'Web Applications', path: '/services/web-applications' },
    { label: 'Mobile Apps', path: '/services/mobile-applications' },
    { label: 'AI Development', path: '/services/ai-development' },
    { label: 'Cloud Solutions', path: '/services/cloud-solutions' },
    { label: 'UI/UX Design', path: '/services/ui-ux-design' },
  ],
  Resources: [
    { label: 'Case Studies', path: '/portfolio' },
    { label: 'Technologies', path: '/technologies' },
    { label: 'Industries', path: '/industries' },
  ],
  Legal: [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
  ],
};
